import {
  a,
  area,
  b,
  base,
  br,
  caption,
  Children,
  code,
  col,
  colgroup,
  customTag,
  dd,
  details,
  div,
  dt,
  em,
  embed,
  fragment,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  hr,
  i,
  img,
  input,
  li,
  link,
  meta,
  ol,
  p,
  param,
  q,
  source,
  span,
  strong,
  style,
  summary,
  table,
  tbody,
  td,
  tfoot,
  th,
  thead,
  title,
  tr,
  track,
  ul,
  wbr,
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
      style,
      title,
      q,
      strong,
      em,
      code,
      colgroup,
      caption,
      dt,
      dd,
    };

    for (const key of Object.keys(html)) {
      expect(html[key]('content')).toBe(`<${key}>content</${key}>`);
      expect(html[key]('con', 'tent')).toBe(`<${key}>content</${key}>`);
    }
  });

  it('should build self closing tags', () => {
    const selfClosingTags: {
      [key: string]: (...children: Children[]) => string;
    } = {
      area,
      base,
      br,
      col,
      embed,
      hr,
      img,
      input,
      link,
      meta,
      param,
      source,
      track,
      wbr,
    };

    for (const key of Object.keys(selfClosingTags)) {
      expect(selfClosingTags[key]('content')).toBe(`<${key} />`);
      expect(selfClosingTags[key]({ id: '1' }, 'con', 'tent')).toBe(
        `<${key} id='1' />`
      );
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
