import React from 'react';
import BrandTag from './index.js';
import jotaSymbol from '../../assets/images/jota-symbol.svg';
import jotaLogotype from '../../assets/images/jota-logotype.svg';
import jotaLogotypeOnColor from '../../assets/images/jota-logotype-oncolor.svg';



export default {
  title: 'Core components react/Brand',
  argTypes: {
    onColor: {
      name: 'On Color',
      table: {
        category: 'Modifiers',
      },
    },
    size: {
      name: 'Size',
      table: {
        category: 'Modifiers',
      },
      control: {
        options: ['small', 'medium', 'large'],
        type: 'select',
      },
    },
    type: {
      name: 'Type',
      table: {
        category: 'Modifiers',
      },
      control: {
        options: ['logotype', 'symbol'],
        type: 'select',
      },
    },
    externalUrl: {
      name: 'External URL',
      table: {
        category: 'Custom Inputs',
      },
    },
    alt: { table: { disable: true } },
  },
};

export function Brand(args) {
  const currentSource =
    args.externalUrl ||
    (args.type === 'logotype'
      ? args.onColor
        ? jotaLogotypeOnColor
        : jotaLogotype
      : args.onColor
      ? jotaSymbolOnColor
      : jotaSymbol);

  return <BrandTag {...args} externalUrl={currentSource}></BrandTag>;
}

Brand.args = {
  alt: 'Brand',
  size: 'medium',
  type: 'logotype',
  externalUrl: '',
  onColor: false,
};
