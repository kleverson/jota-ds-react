import React from 'react';
import BrandTag from './index.js';
import { namespace } from '../../utils/setup.js';
import { action } from '@storybook/addon-actions';

import jotaSymbol from '../../assets/images/jota-symbol.svg';import jotaLogotype from '../../assets/images/jota-logotype.svg';

export default {
  title: 'Core components react/Brand',
  argTypes: {
    alt: {
      control: {
        type: "text"
      },
    },
    size: {
      control: {
        options: ["small", "medium", "large"],
        type: "select"
      },
    },
    src: {
      control: {
        type: "text"
      },
    },
    type: {
      control: {
        options: ["logotype", "symbol"],
        type: "select"
      },
    }
  },
};

export function BrandLogotype(args) {
  const currentSource = args.src || jotaLogotype;
  return (
    <BrandTag {...args} source={currentSource}></BrandTag>
  )
}

BrandLogotype.args = {
  alt: "Brand",
  size: "medium",
  type: "logotype",
  src: ""
}

BrandLogotype.argTypes = {
  alt: { table: { disable: true } },
  type: { table: { disable: true } },
}


export function BrandSymbol(args) {
  const currentSource = args.src || jotaSymbol;

  return (
    <BrandTag {...args} source={currentSource}></BrandTag>
  )
}

BrandSymbol.args = {
  alt: "Brand",
  size: "medium",
  type: "symbol",
  src: ""
}

BrandSymbol.argTypes = {
  alt: { table: { disable: true } },
  type: { table: { disable: true } },
}