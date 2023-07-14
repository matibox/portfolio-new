import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import image from '@astrojs/image';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
  ],
});
