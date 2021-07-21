import React from 'react';
import { ContextElement, createGooberGetter } from '@meiuca/context-element-react';

const css = createGooberGetter({});

const style = css`
  & * {
    font-family: 'Fira Code', monospace !important;
    font-feature-settings: 'calt' 1 !important;
    font-variant-ligatures: contextual !important;
  }

  @supports (font-variation-settings: normal) {
    & * {
      font-family: 'Fira Code VF', monospace !important;
    }
  }
`;

export default ({ children }) => {
  return (
    <ContextElement contextId="code-render" styles={style} insertOnIndex={1}>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/tonsky/FiraCode@5.2/distr/fira_code.css"
      />

      <div>{children}</div>
    </ContextElement>
  );
};
