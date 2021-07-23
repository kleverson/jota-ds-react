import jotaTheme from './jotaTheme';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: jotaTheme,
  previewTabs: {
    'storybook/docs/panel': { hidden: true },
  },
});
