import React from 'react';
import {Global, css} from '@emotion/core';
import styled from '@emotion/styled';
import {graphql} from 'gatsby';
import * as Components from '@ezcater/recipe';
import {withPrefix} from 'gatsby-link';
import ComponentGrid from './ComponentGrid';
import Cookbook from './Cookbook';
import Layout from './Layout';
import Placeholder from './Placeholder';
import logo from '../ezcater-logo.svg';
import {Link, NavLink, BrowserRouter, StaticRouter, Route} from 'react-router-dom';
import 'prismjs/themes/prism.css';
import CodeHighlighting from './Code';
import Playground from './Playground';
import CodePlaygroundHostNode from './ModalWrapper';

const cleanProps = p =>
  Object.keys(p).reduce((previous, current) => {
    const key = current.startsWith('aria')
      ? current.toLowerCase().replace('aria', 'aria-')
      : current;
    const value = Array.isArray(p[current]) ? p[current].join(' ') : p[current];
    return {...previous, [key]: value};
  }, {});

const HtmlAst = ({htmlAst, scope}) => {
  const heading = (size, as) => props =>
    React.createElement(Components.EzHeading, {size, as, className: 'gatsby', ...props});

  const wrapEl = type => props => React.createElement(type, {className: 'gatsby', ...props});

  const componentMap = {
    code: props => {
      const {className} = props;
      const language = className?.replace('language-', '') || 'jsx';

      if (className && className.includes('language-jsx')) {
        return <Playground code={props.children[0]} scope={scope} language={language} />;
      }

      if (!className) return <code {...props} />;

      return <CodeHighlighting code={props.children[0]} language={language} />;
    },
    a: props => React.createElement(props.className ? 'a' : Components.EzLink, props),
    p: props => {
      const {children} = props;
      const type = children[0].type;
      const hasNestedComponent = children.length === 1 && type && type !== 'string';
      return hasNestedComponent ? children : React.createElement('p', props, children);
    },
    pre: ({children}) => children,
    componentgrid: ComponentGrid,
    cookbook: Cookbook,
    ezalert: Components.EzAlert,
    ul: wrapEl('ul'),
    ol: wrapEl('ol'),
    li: wrapEl('li'),
    h1: heading(1),
    h2: heading(3, 'h2'),
    h3: heading(3, 'h3'),
    h4: heading(5, 'h4'),
  };

  const renderTag = (node, i) => {
    if (node.type === 'element') {
      const {tagName, properties, children} = node;
      properties.key = i;
      return React.createElement(
        componentMap[tagName] || tagName,
        cleanProps(properties),
        (children.length && children.map(renderTag)) || undefined
      );
    } else {
      return node.value;
    }
  };

  return htmlAst.children.map(renderTag);
};

const require = () => ({
  Link,
  NavLink,
  BrowserRouter:
    typeof window === 'undefined'
      ? ({children}) => React.createElement(StaticRouter, {context: {}, location: '/', children})
      : BrowserRouter,
  Route,
});

const ezCaterLogoPath = logo;
const scope = {
  ...Components,
  styled,
  css,
  Global,
  require,
  ezCaterLogoPath,
  withPrefix,
  Placeholder,
  CodePlaygroundHostNode,
};

const splitOnTagName = (list, tagName) => {
  const i = list.findIndex(el => el.tagName === tagName);

  if (i === -1) return [list];

  return [list.slice(0, i), ...splitOnTagName(list.slice(i + 1), tagName)];
};

export default ({data: {markdownRemark: page}, location}) =>
  page && (
    <Layout
      path={page.frontmatter.path}
      title={page.frontmatter.title}
      layout={page.frontmatter.tags?.includes('wide') ? 'wide' : 'centered'}
      location={location}
      name={page.frontmatter.name}
      sections={splitOnTagName(page.htmlAst.children, 'hr').map(section => (
        <HtmlAst htmlAst={{children: section}} scope={scope} />
      ))}
    />
  );

export const pageQuery = graphql`
  query BlogPostByPath($path: String) {
    markdownRemark(frontmatter: {path: {eq: $path}}) {
      html
      htmlAst
      frontmatter {
        path
        title
        name
        tags
      }
    }
  }
`;
