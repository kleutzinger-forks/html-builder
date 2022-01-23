import {
  a,
  b,
  Children,
  details,
  div,
  fragment,
  h1,
  h2,
  h3,
  p,
  span,
  summary,
  table,
  tbody,
  td,
  th,
  tr,
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
    };

    for (const key of Object.keys(html)) {
      expect(html[key]('content')).toBe(`<${key}>content</${key}>`);
      expect(html[key]('con', 'tent')).toBe(`<${key}>content</${key}>`);
    }
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
