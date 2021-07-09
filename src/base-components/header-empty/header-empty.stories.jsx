import React from 'react';
import HeaderEmptyTag from './index.js';
import { namespace } from '../../utils/setup.js';
import { action } from '@storybook/addon-actions';

import jotaSymbol from '../../assets/images/jota-symbol.svg';import jotaLogotype from '../../assets/images/jota-logotype.svg';

export default {
  title: 'Core components react/Header',
  argTypes: {
    
  },
};

export function HeaderEmpty(args) {
  const currentLogo = args.logo || jotaLogotype;
  return (
    <div style={{width: '100vw', position: 'absolute', top: '0px'}}>
      <HeaderEmptyTag {...args} logoSource={currentLogo}></HeaderEmptyTag>
    </div>
  )
}

HeaderEmpty.args = {
  ghost: false,
  logoSource: ''
}
