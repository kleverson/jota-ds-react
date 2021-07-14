import { create } from '@storybook/theming';
import logo from './jota-logo-dark.svg';

export default create({
  base: 'dark',
  brandTitle: 'Jota',
  brandUrl: '/',
  brandImage: logo,
  appBg: '#1474FF',
  // inputBg: 'transparent',
  inputBorder: '#fff',
  textColor: '#fff',
  textMutedColor: '#fff',
  inputTextColor: '#fff',
  textInverseColor: '#fff',
});
