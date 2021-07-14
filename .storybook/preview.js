import React from 'react';

export const decorators = [
  (Story, O) => {
    let style = '';
    if (O.args.inverse || O.args.onColor) {
      style = `.sb-show-main{ background: #1474FF !important;}`;
    }
    return (
      <>
        <style>{style}</style>
        <div>
          <Story></Story>
        </div>
      </>
    );
  },
];

export const parameters = {
  // layout: 'centered',
  // actions: { argTypesRegex: "^on[A-Z].*" },
  // controls: {
  //   matchers: {
  //     color: /(background|color)$/i,
  //     date: /Date$/,
  //   },
  // },
  controls: {
    sort: 'alpha',
  },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#f5f5f5',
      },
    ],
  },
  options: {
    showPanel: true,
    isToolshown: true,

    storySort: {
      method: 'alphabetical',
      order: ['Welcome', 'Getting Started', 'Core components'],
    },
  },
};
