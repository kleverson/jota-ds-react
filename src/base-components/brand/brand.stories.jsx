import React from 'react';
import BrandTag from './index.js';
import { namespace } from '../../utils/setup.js';
import { action } from '@storybook/addon-actions';

import jotaSymbol from '../../assets/images/jota-symbol.svg';import jotaLogotype from '../../assets/images/jota-logotype.svg';import jotaSymbolOnColor from '../../assets/images/jota-symbol-oncolor.svg';import jotaLogotypeOnColor from '../../assets/images/jota-logotype-oncolor.svg';

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
    type: {
      control: {
        options: ["logotype", "symbol"],
        type: "select"
      },
    },
    externalUrl: {
      control: {
        type: "text"
      },
    }
  },
};

export function Brand(args) {
  const currentSource = (args.externalUrl || ((args.type === 'logotype') ? (args.onColor ? jotaLogotypeOnColor : jotaLogotype) : (args.onColor ? jotaSymbolOnColor : jotaSymbol)));
  return (
    <BrandTag {...args} externalUrl={currentSource}></BrandTag>
  )
}

Brand.args = {
  alt: "Brand",
  size: "medium",
  type: "logotype",
  externalUrl: "",
  onColor: false
}

Brand.argTypes = {
  alt: { table: { disable: true } }
}
