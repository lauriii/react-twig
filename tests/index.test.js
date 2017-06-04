import ReactTwig from '../src/index';
import expect from 'expect';
import React from 'react';
import { renderToStaticMarkup as render } from 'react-dom/server';

describe('Minimal template', () => {
  it('is rendered correctly with minimal setup', () => {
    expect(render(<ReactTwig template="Kittens say: {{ variable }}" data={{ variable: "meow" }} />))
      .toContain('<div>Kittens say: meow</div>')
  });

  it('is rendered correctly without data variable', () => {
    expect(render(
      <ReactTwig
        template="Kittens say: {{ variable }}"
      />
    )).toContain('<div>Kittens say: </div>')
  });

  it('is rendered correctly while using Twig filters', () => {
    expect(render(
      <ReactTwig
        template="Kittens say: {{ variable|default('meow') }}"
      />
    )).toContain('<div>Kittens say: meow</div>')
  });

  it('allows configuring wrapper element', () => {
    expect(render(
      <ReactTwig
        template="Kittens say: {{ variable }}"
        data={{ variable: "meow" }}
        Component="span"
      />
    )).toContain('<span>Kittens say: meow</span>')
  });
});
