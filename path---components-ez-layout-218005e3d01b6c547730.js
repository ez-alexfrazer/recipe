webpackJsonp([0xb8375911e52e],{481:function(e,t){e.exports={data:{markdownRemark:{html:'<p>The layout component provide common ways to arrange the content of a screen. The layout component controls the spacing of its content. For horizontal layout types, the layout component will vertically center the content items.</p>\n<hr>\n<h2 id="best-practices"><a href="#best-practices" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Best Practices</h2>\n<p>Layouts should:</p>\n<ul>\n<li>Be used for small-scale layout tasks</li>\n<li>Be used when you want to lay out a horizontal row of content OR</li>\n<li>Be used when you want to layout out a vertical stack of content that would otherwise be inline</li>\n</ul>\n<p>Layouts should not:</p>\n<ul>\n<li>Be used for large-scale page layout. For large-scale layouts, consider using a <a href="/recipe/components/ez-card">Card</a> within <a href="/recipe/components/ez-page-content">Page Content</a></li>\n<li>Wrap content onto multiple lines. The content inside a layout should be designed as not to exceed the available horizontal space.</li>\n</ul>\n<hr>\n<h2 id="examples"><a href="#examples" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Examples</h2>\n<h3 id="basic-layout"><a href="#basic-layout" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Basic layout</h3>\n<p>The <code>basic</code> layout arranges content into a single row with even spacing between the content items.</p>\n<pre><code class="language-jsx">&#x3C;EzCard\n  className={css(`\n  .basic > * {\n    background-color: yellow;\n  }\n`)}\n>\n  &#x3C;EzLayout layout="basic" className="basic">\n    &#x3C;div>Content&#x3C;/div>\n    &#x3C;div>Content&#x3C;/div>\n    &#x3C;div>Content&#x3C;/div>\n    &#x3C;div>Content&#x3C;/div>\n  &#x3C;/EzLayout>\n&#x3C;/EzCard>\n</code></pre>\n<h3 id="right-layout"><a href="#right-layout" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Right layout</h3>\n<p>The <code>right</code> layout arranges content into a single row, aligned to the right edge of its container, with even spacing between the content items. The <code>right</code> layout can be used, for example, for aligning action buttons within a card.</p>\n<pre><code class="language-jsx">&#x3C;EzCard\n  className={css(`\n  .right > * {\n    background-color: coral;\n  }\n`)}\n>\n  &#x3C;EzLayout layout="right" className="right">\n    &#x3C;div>Content&#x3C;/div>\n    &#x3C;div>Content&#x3C;/div>\n    &#x3C;div>Content&#x3C;/div>\n    &#x3C;div>Content&#x3C;/div>\n  &#x3C;/EzLayout>\n&#x3C;/EzCard>\n</code></pre>\n<h3 id="equal-layout"><a href="#equal-layout" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Equal layout</h3>\n<p>The <code>equal</code> layout arranges content into equal widths filling a single row. The <code>equal</code> layout can be used, for example, for evenly spacing spending statistics across a single row.</p>\n<pre><code class="language-jsx">&#x3C;EzCard\n  className={css(`\n  .equal > * {\n    background-color: aqua;\n  }\n`)}\n>\n  &#x3C;EzCardSection>\n    &#x3C;EzLayout layout="equal" className="equal">\n      &#x3C;div>Equal Layout&#x3C;/div>\n      &#x3C;div>Content&#x3C;/div>\n      &#x3C;div>Content&#x3C;/div>\n    &#x3C;/EzLayout>\n  &#x3C;/EzCardSection>\n  &#x3C;EzCardSection>\n    &#x3C;EzLayout layout="equal" className="equal">\n      &#x3C;div>Equal Layout&#x3C;/div>\n      &#x3C;div>Content&#x3C;/div>\n      &#x3C;div>Content&#x3C;/div>\n      &#x3C;div>Content&#x3C;/div>\n    &#x3C;/EzLayout>\n  &#x3C;/EzCardSection>\n&#x3C;/EzCard>\n</code></pre>\n<h3 id="split-layout"><a href="#split-layout" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Split layout</h3>\n<p>The <code>split</code> layout arranges content into two groups on a single row, one aligned to the left edge of its container with the other to the right edge. The <code>split</code> layout will usually be <a href="#combining-layouts">combined with other layout arrangements inside</a>. The <code>split</code> layout can be used, for example, for aligning secondary buttons for next steps to the bottom left of a card, while aligning primary calls-to-action to the bottom right of a card.</p>\n<pre><code class="language-jsx">&#x3C;EzCard\n  className={css(`\n  .split > * {\n    background-color: palegreen;\n  }\n`)}\n>\n  &#x3C;EzLayout layout="split" className="split">\n    &#x3C;div>Split Layout&#x3C;/div>\n    &#x3C;div>Content&#x3C;/div>\n  &#x3C;/EzLayout>\n&#x3C;/EzCard>\n</code></pre>\n<h3 id="stack-layout"><a href="#stack-layout" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Stack layout</h3>\n<p>The <code>stack</code> layout arranges content into a vertical column. The <code>stack</code> layout can be used, for example, when targeting small screen sizes, to organize content into stacked columns. In many cases, a <code>stack</code> layout may not be necessary; block level components will naturally stack in a container, and container components such as <a href="/recipe/components/ez-card"><code>EzCard</code></a> and <a href="/recipe/components/ez-page-content"><code>EzPageContent</code></a> will apply consistent spacing between content items.</p>\n<pre><code class="language-jsx">&#x3C;EzCard\n  className={css(`\n  .stack > * {\n    background-color: lightgray;\n  }\n`)}\n>\n  &#x3C;EzLayout layout="stack" className="stack">\n    &#x3C;div>Stack Layout&#x3C;/div>\n    &#x3C;div>Content&#x3C;/div>\n  &#x3C;/EzLayout>\n&#x3C;/EzCard>\n</code></pre>\n<h3 id="combining-layouts"><a href="#combining-layouts" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Combining Layouts</h3>\n<p>The layout component can be nested in order to provide more complex or unique arrangements of components. For example, a toolbar might use a basic layout inside of an equal layout, to arrange logical groupings of action buttons into visual groups with even spacing between the grouped buttons.</p>\n<pre><code class="language-jsx">&#x3C;EzCard\n  className={css(`\n  .basic > * {\n    background-color: yellow;\n  }\n  .equal > * {\n    background-color: aqua;\n  }\n`)}\n>\n  &#x3C;EzCardSection>\n    &#x3C;EzLayout layout="split">\n      &#x3C;EzLayout layout="basic" className="basic">\n        &#x3C;div>Basic Layouts in a Split Layout&#x3C;/div>\n        &#x3C;div>Content&#x3C;/div>\n      &#x3C;/EzLayout>\n      &#x3C;EzLayout layout="basic" className="basic">\n        &#x3C;div>Content&#x3C;/div>\n        &#x3C;div>Content&#x3C;/div>\n      &#x3C;/EzLayout>\n    &#x3C;/EzLayout>\n  &#x3C;/EzCardSection>\n  &#x3C;EzCardSection>\n    &#x3C;EzLayout layout="split">\n      &#x3C;EzLayout layout="equal" className="equal">\n        &#x3C;div>Equal Layouts in a Split Layout&#x3C;/div>\n        &#x3C;div>Content&#x3C;/div>\n      &#x3C;/EzLayout>\n      &#x3C;EzLayout layout="equal" className="equal">\n        &#x3C;div>Content&#x3C;/div>\n        &#x3C;div>Content&#x3C;/div>\n      &#x3C;/EzLayout>\n    &#x3C;/EzLayout>\n  &#x3C;/EzCardSection>\n&#x3C;/EzCard>\n</code></pre>\n<hr>\n<h2 id="limitations"><a href="#limitations" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Limitations</h2>\n<ul>\n<li>Layout does not currently support varying horizontal/vertical stacked layouts across breakpoints.</li>\n</ul>\n<hr>\n<h2 id="related-components"><a href="#related-components" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Related components</h2>\n<ul>\n<li><a href="/recipe/components/ez-card">Card</a></li>\n<li><a href="/recipe/components/ez-page-content">Page Content</a></li>\n</ul>',htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The layout component provide common ways to arrange the content of a screen. The layout component controls the spacing of its content. For horizontal layout types, the layout component will vertically center the content items."}]},{type:"text",value:"\n"},{type:"element",tagName:"hr",properties:{},children:[]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{id:"best-practices"},children:[{type:"element",tagName:"a",properties:{href:"#best-practices",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Best Practices"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Layouts should:"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Be used for small-scale layout tasks"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Be used when you want to lay out a horizontal row of content OR"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Be used when you want to layout out a vertical stack of content that would otherwise be inline"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Layouts should not:"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Be used for large-scale page layout. For large-scale layouts, consider using a "},{type:"element",tagName:"a",properties:{href:"/recipe/components/ez-card"},children:[{type:"text",value:"Card"}]},{type:"text",value:" within "},{type:"element",tagName:"a",properties:{href:"/recipe/components/ez-page-content"},children:[{type:"text",value:"Page Content"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Wrap content onto multiple lines. The content inside a layout should be designed as not to exceed the available horizontal space."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"hr",properties:{},children:[]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{id:"examples"},children:[{type:"element",tagName:"a",properties:{href:"#examples",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Examples"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{id:"basic-layout"},children:[{type:"element",tagName:"a",properties:{href:"#basic-layout",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Basic layout"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"basic"}]},{type:"text",value:" layout arranges content into a single row with even spacing between the content items."}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-jsx"]},children:[{type:"text",value:'<EzCard\n  className={css(`\n  .basic > * {\n    background-color: yellow;\n  }\n`)}\n>\n  <EzLayout layout="basic" className="basic">\n    <div>Content</div>\n    <div>Content</div>\n    <div>Content</div>\n    <div>Content</div>\n  </EzLayout>\n</EzCard>\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{id:"right-layout"},children:[{type:"element",tagName:"a",properties:{href:"#right-layout",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Right layout"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"right"}]},{type:"text",value:" layout arranges content into a single row, aligned to the right edge of its container, with even spacing between the content items. The "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"right"}]},{type:"text",value:" layout can be used, for example, for aligning action buttons within a card."}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-jsx"]},children:[{type:"text",value:'<EzCard\n  className={css(`\n  .right > * {\n    background-color: coral;\n  }\n`)}\n>\n  <EzLayout layout="right" className="right">\n    <div>Content</div>\n    <div>Content</div>\n    <div>Content</div>\n    <div>Content</div>\n  </EzLayout>\n</EzCard>\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{id:"equal-layout"},children:[{type:"element",tagName:"a",properties:{href:"#equal-layout",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Equal layout"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"equal"}]},{type:"text",value:" layout arranges content into equal widths filling a single row. The "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"equal"}]},{type:"text",value:" layout can be used, for example, for evenly spacing spending statistics across a single row."}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-jsx"]},children:[{type:"text",value:'<EzCard\n  className={css(`\n  .equal > * {\n    background-color: aqua;\n  }\n`)}\n>\n  <EzCardSection>\n    <EzLayout layout="equal" className="equal">\n      <div>Equal Layout</div>\n      <div>Content</div>\n      <div>Content</div>\n    </EzLayout>\n  </EzCardSection>\n  <EzCardSection>\n    <EzLayout layout="equal" className="equal">\n      <div>Equal Layout</div>\n      <div>Content</div>\n      <div>Content</div>\n      <div>Content</div>\n    </EzLayout>\n  </EzCardSection>\n</EzCard>\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{id:"split-layout"},children:[{type:"element",tagName:"a",properties:{href:"#split-layout",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Split layout"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"split"}]},{type:"text",value:" layout arranges content into two groups on a single row, one aligned to the left edge of its container with the other to the right edge. The "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"split"}]},{type:"text",value:" layout will usually be "},{type:"element",tagName:"a",properties:{href:"#combining-layouts"},children:[{type:"text",value:"combined with other layout arrangements inside"}]},{type:"text",value:". The "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"split"}]},{type:"text",value:" layout can be used, for example, for aligning secondary buttons for next steps to the bottom left of a card, while aligning primary calls-to-action to the bottom right of a card."}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-jsx"]},children:[{type:"text",value:'<EzCard\n  className={css(`\n  .split > * {\n    background-color: palegreen;\n  }\n`)}\n>\n  <EzLayout layout="split" className="split">\n    <div>Split Layout</div>\n    <div>Content</div>\n  </EzLayout>\n</EzCard>\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{id:"stack-layout"},children:[{type:"element",tagName:"a",properties:{href:"#stack-layout",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Stack layout"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"stack"}]},{type:"text",value:" layout arranges content into a vertical column. The "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"stack"}]},{type:"text",value:" layout can be used, for example, when targeting small screen sizes, to organize content into stacked columns. In many cases, a "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"stack"}]},{type:"text",value:" layout may not be necessary; block level components will naturally stack in a container, and container components such as "},{type:"element",tagName:"a",properties:{href:"/recipe/components/ez-card"},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"EzCard"}]}]},{type:"text",value:" and "},{type:"element",tagName:"a",properties:{href:"/recipe/components/ez-page-content"},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"EzPageContent"}]}]},{type:"text",value:" will apply consistent spacing between content items."}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-jsx"]},children:[{type:"text",value:'<EzCard\n  className={css(`\n  .stack > * {\n    background-color: lightgray;\n  }\n`)}\n>\n  <EzLayout layout="stack" className="stack">\n    <div>Stack Layout</div>\n    <div>Content</div>\n  </EzLayout>\n</EzCard>\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{id:"combining-layouts"},children:[{type:"element",tagName:"a",properties:{href:"#combining-layouts",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Combining Layouts"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The layout component can be nested in order to provide more complex or unique arrangements of components. For example, a toolbar might use a basic layout inside of an equal layout, to arrange logical groupings of action buttons into visual groups with even spacing between the grouped buttons."}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-jsx"]},children:[{type:"text",value:'<EzCard\n  className={css(`\n  .basic > * {\n    background-color: yellow;\n  }\n  .equal > * {\n    background-color: aqua;\n  }\n`)}\n>\n  <EzCardSection>\n    <EzLayout layout="split">\n      <EzLayout layout="basic" className="basic">\n        <div>Basic Layouts in a Split Layout</div>\n        <div>Content</div>\n      </EzLayout>\n      <EzLayout layout="basic" className="basic">\n        <div>Content</div>\n        <div>Content</div>\n      </EzLayout>\n    </EzLayout>\n  </EzCardSection>\n  <EzCardSection>\n    <EzLayout layout="split">\n      <EzLayout layout="equal" className="equal">\n        <div>Equal Layouts in a Split Layout</div>\n        <div>Content</div>\n      </EzLayout>\n      <EzLayout layout="equal" className="equal">\n        <div>Content</div>\n        <div>Content</div>\n      </EzLayout>\n    </EzLayout>\n  </EzCardSection>\n</EzCard>\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"hr",properties:{},children:[]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{id:"limitations"},children:[{type:"element",tagName:"a",properties:{href:"#limitations",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Limitations"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Layout does not currently support varying horizontal/vertical stacked layouts across breakpoints."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"hr",properties:{},children:[]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{id:"related-components"},children:[{type:"element",tagName:"a",properties:{href:"#related-components",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Related components"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"/recipe/components/ez-card"},children:[{type:"text",value:"Card"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"/recipe/components/ez-page-content"},children:[{type:"text",value:"Page Content"}]}]},{type:"text",value:"\n"}]}],data:{quirksMode:!1}},frontmatter:{path:"/components/ez-layout",title:"Layout"}}},pathContext:{}}}});
//# sourceMappingURL=path---components-ez-layout-218005e3d01b6c547730.js.map