import React from 'react';
import BrandTag from './index.js';
import jotaSymbol from '../../assets/images/jota-symbol.svg';
import jotaSymbolOnColor from '../../assets/images/jota-symbol-oncolor.svg';
import jotaLogotype from '../../assets/images/jota-logotype.svg';
import jotaLogotypeOnColor from '../../assets/images/jota-logotype-oncolor.svg';

export default {
  title: 'Core components react/Brand',
  argTypes: {
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
    onColor: {
      name: 'On Color',
      table: {
        category: 'Modifiers',
      },
    },
    externalUrl: {
      name: 'External URL',
      table: {
        category: 'Custom Inputs',
      },
    },
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

  return <BrandTag {...args} alt="Brand" externalUrl={currentSource}></BrandTag>;
}

Brand.args = {
  size: 'medium',
  type: 'logotype',
  externalUrl: '',
  onColor: false,
};
