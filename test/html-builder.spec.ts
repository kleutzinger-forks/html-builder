import {
  a,
  b,
  Children,
  customTag,
  details,
  div,
  fragment,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  i,
  li,
  ol,
  p,
  span,
  summary,
  table,
  tbody,
  td,
  tfoot,
  th,
  thead,
  tr,
  ul,
} from '../src/html-builder';

describe('Html String Builder', () => {
  it('build html elements', () => {
    const html: {
      [key: string]: (...children: Children[]) => string;
    } = {
      a,
      p,
      b,
      div,
      span,
      h1,
      h2,
      h3,
      details,
      summary,
      table,
      tbody,
      tr,
      td,
      th,
      i,
      h4,
      h5,
      h6,
      thead,
      tfoot,
      ul,
      ol,
      li,
    };

    for (const key of Object.keys(html)) {
      expect(html[key]('content')).toBe(`<${key}>content</${key}>`);
      expect(html[key]('con', 'tent')).toBe(`<${key}>content</${key}>`);
    }
  });

  it('should build a custom element', () => {
    expect(customTag('pre', 'content')).toBe('<pre>content</pre>');
  });

  it('html fragment should return the children', () => {
    expect(fragment()).toBe('');
    expect(fragment('con')).toBe('con');
    expect(fragment('con', 'tent')).toBe('content');
  });

  it('html tags should accept properties', () => {
    expect(a({ href: 'http://www.example.com' }, 'example')).toBe(
      "<a href='http://www.example.com'>example</a>"
    );
    expect(
      a({ href: 'http://www.example.com', target: '_blank' }, 'example')
    ).toBe("<a href='http://www.example.com' target='_blank'>example</a>");
  });
});
