webpackJsonp([0xf7833596f069],{488:function(e,t){e.exports={data:{markdownRemark:{html:'<p><EzAlert\n  headline="This component is deprecated"\n  tagline="EzPage Content and EzContentGroup are deprecated. Use EzPage and EzPageLayout for new pages instead."\n  use="error"\n/></p>\n<h2 id=""><a href="#" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a></h2>\n<p>Page Content is the main content container for a page. The Page Content component controls the horizontal margins of the content area, as well as the vertical spacing between content.</p>\n<p>These examples mostly use Cards, but you can put multiple kinds of content in Page Content.</p>\n<hr>\n<h2 id="best-practices"><a href="#best-practices" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Best Practices</h2>\n<p>Page Content should:</p>\n<ul>\n<li>Be used as the top level container for most pages.</li>\n<li>Use <a href="#organizing-with-content-group">Content Groups</a> to visually group related content with tighter spacing.</li>\n</ul>\n<p>Content Group should not:</p>\n<ul>\n<li>Be used anywhere except as an immediate descendant of <code>EzPageContent</code>.</li>\n</ul>\n<h2 id="examples"><a href="#examples" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Examples</h2>\n<h3 id="basic-page-content"><a href="#basic-page-content" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Basic Page Content</h3>\n<p>Page Content provides consistent spacing of its children.</p>\n<pre><code class="language-jsx">&#x3C;EzPageContent>\n  &#x3C;EzCard title="Card">Content&#x3C;/EzCard>\n  &#x3C;EzCard title="Card">Content&#x3C;/EzCard>\n  &#x3C;EzCard title="Table">\n    This example is really a card, but you can put tables and other content in EzPageContent too.\n  &#x3C;/EzCard>\n&#x3C;/EzPageContent>\n</code></pre>\n<h3 id="organizing-with-content-group"><a href="#organizing-with-content-group" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Organizing with Content Group</h3>\n<p>In some cases you may want to visually group related content with tighter spacing. You can use <code>EzContentGroup</code> to cluster content within <code>EzPageContent</code>.</p>\n<pre><code class="language-jsx">&#x3C;EzPageContent>\n  &#x3C;EzCard title="Card">Content&#x3C;/EzCard>\n  &#x3C;EzContentGroup>\n    &#x3C;EzSegmentedControl\n      name="view-map-options"\n      label="Map View"\n      options={[\n        {label: \'Map\', value: \'map\'},\n        {label: \'Transit\', value: \'transit\'},\n        {label: \'Satellite\', value: \'satellite\'},\n      ]}\n      active="map"\n    />\n    &#x3C;EzCard title="Card">Content&#x3C;/EzCard>\n  &#x3C;/EzContentGroup>\n  &#x3C;EzCard title="Card">Content&#x3C;/EzCard>\n&#x3C;/EzPageContent>\n</code></pre>\n<h3 id="horizontal-content-group"><a href="#horizontal-content-group" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Horizontal Content Group</h3>\n<p>Content Groups can be laid out horizontally.</p>\n<pre><code class="language-jsx">&#x3C;EzPageContent>\n  &#x3C;EzCard title="Card">Content&#x3C;/EzCard>\n  &#x3C;EzContentGroup horizontal>\n    &#x3C;EzCard title="Card">Content&#x3C;/EzCard>\n    &#x3C;EzCard title="Card">Content&#x3C;/EzCard>\n    &#x3C;EzCard title="Card">Content&#x3C;/EzCard>\n  &#x3C;/EzContentGroup>\n  &#x3C;EzCard title="Card">Content&#x3C;/EzCard>\n&#x3C;/EzPageContent>\n</code></pre>\n<hr>\n<h2 id="limitations"><a href="#limitations" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Limitations</h2>\n<ul>\n<li>Sidebar content is not currently supported</li>\n<li>Content Groups currently do not support varying horizontal/vertical layouts across breakpoint.</li>\n</ul>\n<hr>\n<h2 id="related-components"><a href="#related-components" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Related components</h2>\n<ul>\n<li><a href="/recipe/components/ez-card">Card</a></li>\n</ul>',htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"ezalert",properties:{headline:"This component is deprecated",tagline:"EzPage Content and EzContentGroup are deprecated. Use EzPage and EzPageLayout for new pages instead.",use:"error"},children:[]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{id:""},children:[{type:"element",tagName:"a",properties:{href:"#",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Page Content is the main content container for a page. The Page Content component controls the horizontal margins of the content area, as well as the vertical spacing between content."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"These examples mostly use Cards, but you can put multiple kinds of content in Page Content."}]},{type:"text",value:"\n"},{type:"element",tagName:"hr",properties:{},children:[]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{id:"best-practices"},children:[{type:"element",tagName:"a",properties:{href:"#best-practices",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Best Practices"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Page Content should:"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Be used as the top level container for most pages."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Use "},{type:"element",tagName:"a",properties:{href:"#organizing-with-content-group"},children:[{type:"text",value:"Content Groups"}]},{type:"text",value:" to visually group related content with tighter spacing."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Content Group should not:"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Be used anywhere except as an immediate descendant of "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"EzPageContent"}]},{type:"text",value:"."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{id:"examples"},children:[{type:"element",tagName:"a",properties:{href:"#examples",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Examples"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{id:"basic-page-content"},children:[{type:"element",tagName:"a",properties:{href:"#basic-page-content",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Basic Page Content"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Page Content provides consistent spacing of its children."}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-jsx"]},children:[{type:"text",value:'<EzPageContent>\n  <EzCard title="Card">Content</EzCard>\n  <EzCard title="Card">Content</EzCard>\n  <EzCard title="Table">\n    This example is really a card, but you can put tables and other content in EzPageContent too.\n  </EzCard>\n</EzPageContent>\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{id:"organizing-with-content-group"},children:[{type:"element",tagName:"a",properties:{href:"#organizing-with-content-group",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Organizing with Content Group"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"In some cases you may want to visually group related content with tighter spacing. You can use "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"EzContentGroup"}]},{type:"text",value:" to cluster content within "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"EzPageContent"}]},{type:"text",value:"."}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-jsx"]},children:[{type:"text",value:"<EzPageContent>\n  <EzCard title=\"Card\">Content</EzCard>\n  <EzContentGroup>\n    <EzSegmentedControl\n      name=\"view-map-options\"\n      label=\"Map View\"\n      options={[\n        {label: 'Map', value: 'map'},\n        {label: 'Transit', value: 'transit'},\n        {label: 'Satellite', value: 'satellite'},\n      ]}\n      active=\"map\"\n    />\n    <EzCard title=\"Card\">Content</EzCard>\n  </EzContentGroup>\n  <EzCard title=\"Card\">Content</EzCard>\n</EzPageContent>\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{id:"horizontal-content-group"},children:[{type:"element",tagName:"a",properties:{href:"#horizontal-content-group",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Horizontal Content Group"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Content Groups can be laid out horizontally."}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-jsx"]},children:[{type:"text",value:'<EzPageContent>\n  <EzCard title="Card">Content</EzCard>\n  <EzContentGroup horizontal>\n    <EzCard title="Card">Content</EzCard>\n    <EzCard title="Card">Content</EzCard>\n    <EzCard title="Card">Content</EzCard>\n  </EzContentGroup>\n  <EzCard title="Card">Content</EzCard>\n</EzPageContent>\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"hr",properties:{},children:[]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{id:"limitations"},children:[{type:"element",tagName:"a",properties:{href:"#limitations",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Limitations"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Sidebar content is not currently supported"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Content Groups currently do not support varying horizontal/vertical layouts across breakpoint."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"hr",properties:{},children:[]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{id:"related-components"},children:[{type:"element",tagName:"a",properties:{href:"#related-components",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Related components"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"/recipe/components/ez-card"},children:[{type:"text",value:"Card"}]}]},{type:"text",value:"\n"}]}],data:{quirksMode:!1}},frontmatter:{path:"/components/ez-page-content",title:"Page Content"}}},pathContext:{}}}});
//# sourceMappingURL=path---components-ez-page-content-4e5600b507c9536e16ec.js.map