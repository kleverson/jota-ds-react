import { create } from '@storybook/theming';
import logo from "./jota-logo-dark.svg";

export default create({
  base: 'light',
  brandTitle: 'Jota',
  brandUrl: '/',
  enableShortcuts: false,
  brandImage: logo,
  appBg: '#1474FF',
});