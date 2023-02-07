import { defineClientConfig } from "@vuepress/client";
import { hasGlobalComponent } from "C:/Users/hao/Documents/Coding_prj/blog/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.172_e7jwb2ulu5orbkux7obq5onfau/node_modules/vuepress-plugin-components/lib/client/shared.js";
import { h } from "vue";

import { useStyleTag } from "C:/Users/hao/Documents/Coding_prj/blog/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.172_e7jwb2ulu5orbkux7obq5onfau/node_modules/vuepress-plugin-components/lib/client/vueuse.js";
import Badge from "C:/Users/hao/Documents/Coding_prj/blog/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.172_e7jwb2ulu5orbkux7obq5onfau/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import FontIcon from "C:/Users/hao/Documents/Coding_prj/blog/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.172_e7jwb2ulu5orbkux7obq5onfau/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import BackToTop from "C:/Users/hao/Documents/Coding_prj/blog/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.172_e7jwb2ulu5orbkux7obq5onfau/node_modules/vuepress-plugin-components/lib/client/components/BackToTop.js";


import "C:/Users/hao/Documents/Coding_prj/blog/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.172_e7jwb2ulu5orbkux7obq5onfau/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    
  },
  setup: () => {
      useStyleTag(`\
      @import url("//at.alicdn.com/t/c/font_2410206_5vb9zlyghj.css");
      `);
  },
  rootComponents: [
    () => h(BackToTop, { threshold: 300 }),
    
  ],
});
