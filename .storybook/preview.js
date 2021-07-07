import React from "react";

export const decorators = [
  (Story, O) => {
    let style = '';
    if(O.args.inverse || O.args.onColor){
        style = `.sb-show-main{ background: #1474FF !important;}`
      }
    return (
      <>
        <style>{style}</style>
        <div>{Story()}</div>
      </>
    )
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
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#f5f5f5',
      }
    ],
  },
  options: {
    storySort: {
      order: [
        'Getting Started',
        'Core components'
      ]
    }
  }
}