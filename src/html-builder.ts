export type Children = string | { [attributeName: string]: string };

export function tag(name: string) {
  return (...children: Children[]): string => {
    let props = '';
    const firstChild = children[0];
    if (typeof firstChild === 'object') {
      props = Object.keys(firstChild)
        .map((key) => ` ${key}='${firstChild[key]}'`)
        .join('');
    }

    const content =
      typeof firstChild === 'string' ? children : children.slice(1);

    return `<${name}${props}>${content.join('')}</${name}>`;
  };
}

export function fragment(...children: Children[]): string {
  return children.join('');
}

export const a = tag('a');
export const p = tag('p');
export const b = tag('b');
export const i = tag('i');
export const div = tag('div');
export const span = tag('span');
export const h1 = tag('h1');
export const h2 = tag('h2');
export const h3 = tag('h3');
export const h4 = tag('h4');
export const h5 = tag('h5');
export const h6 = tag('h6');
export const details = tag('details');
export const summary = tag('summary');
export const table = tag('table');
export const thead = tag('thead');
export const tbody = tag('tbody');
export const tfoot = tag('tfoot');
export const tr = tag('tr');
export const td = tag('td');
export const th = tag('th');
export const ul = tag('ul');
export const ol = tag('ol');
export const li = tag('li');

export const customTag = (name: string, ...children: Children[]) => {
  return tag(name)(...children);
};
