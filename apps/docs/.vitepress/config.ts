import { defineConfig } from 'vitepress'
import { exampleName } from './meta'

export default defineConfig({
  lang: 'en-US',
  title: exampleName,
  lastUpdated: true,
  themeConfig: {
    nav: [{ text: 'Home', link: '/' }],
    sidebar: {
      '/': [
        {
          text: 'Guide',
          items: [
            {
              text: 'Getting Started',
              link: '/guide/'
            }
          ]
        }
      ]
    },
    footer: {
      message: 'TurboRepo + Vue',
      copyright: 'Copyright © 2023-PRESENT Psycarlo'
    }
  }
})
