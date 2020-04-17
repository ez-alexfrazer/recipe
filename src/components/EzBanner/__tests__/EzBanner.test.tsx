import React from 'react';
import {axe} from 'jest-axe';
import {visualSnapshots} from 'sosia';
import regressionTests from './EzBanner.test.md';
import markdown from '../EzBanner.md';
import EzBanner from '../EzBanner';
import {EzPage} from '../../index';
import {renderToHtml} from '../../../jest-globals';

const scope = {EzBanner, EzPage};

describe('EzBanner', () => {
  visualSnapshots({markdown, scope});
  visualSnapshots({markdown: regressionTests, scope});

  it('should meet accessibility guidelines', async () => {
    const wrapper = renderToHtml(
      <EzBanner
        title="More orders, lower commission."
        message="Linking to ezOrdering from your website lets you take catering orders online, without ezCater branding and at a lower cost per order."
        link={{
          label: 'Learn more',
          href: '#',
        }}
        use="marketing"
        onDismiss={() => {}}
      />
    );
    const actual = await axe(wrapper);
    expect(actual).toHaveNoViolations();
  });
});
