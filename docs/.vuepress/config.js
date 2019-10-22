const categories = require('../../channels')

const generatedSidebar = categories.map(cat => {
  return {
    title: cat.name,
    collapsable: cat.collapsable || false,
    children: cat.channels.map(c => {
      return [`/${c.slug}/`, c.name]
    }),
  }
})

module.exports = {
  title: 'Laravel Notification Channels',
  description: 'A collection of custom drivers for Laravel 5.5+ & 6.0+',
  dest: './dist',

  themeConfig: {
    channelCount: categories.reduce((count, cat) => count + cat.channels.length, 0),
    sidebarDepth: 1,
    nav: [
      { text: 'About / FAQ', link: '/about' },
      {
        text: 'Github',
        link: 'https://github.com/laravel-notification-channels',
      },
      {
        text: 'Packagist',
        link: 'https://packagist.org/packages/laravel-notification-channels/',
      },
    ],
    sidebar: [
      {
        title: 'Documentation',
        collapsable: false,
        children: [
          ['/about', 'About / FAQ'],
          ['/backport', 'Using on Laravel 5.1 / 5.2'],
        ]
      }
    ].concat(generatedSidebar),
  },
  async additionalPages () {
    let allChannels = []

    categories.map(cat => {
      cat.channels.map(c => {
        if (cat.name === 'Deprecated') c.deprecated = true;
        allChannels.push(c)
      })
    })

    const axios = require('axios')
    const { mapLimit } = require('async')

    return await mapLimit(allChannels, 3, async (channel) => {
      if (!global['REPO_CACHE']) global['REPO_CACHE'] = {};

      if (!global['REPO_CACHE'][channel.slug]) {
        const res = await axios.get(`https://raw.githubusercontent.com/laravel-notification-channels/${channel.slug}/master/README.md`)
        console.log(`Fetched readme for ${channel.slug}`)

        let content = res.data;

        content = `<GithubButton slug="${channel.slug}"></GithubButton>\n` + content

        if (channel.deprecated) {
          content = `::: danger
This channel is deprecated. Please the [GitHub Repo](https://github.com/laravel-notification-channels/${channel.slug}) for more information
:::\n` + content
        }

        global['REPO_CACHE'][channel.slug] = {
          path: `/${channel.slug}/`,
          content,
        }
      }

      return global['REPO_CACHE'][channel.slug]
    })
  },
  head: [
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-icon-180x180.png' }],
    ['link', { rel: 'icon" type="image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon" type="image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['style', {}, 'img + .icon.outbound {display: none;}']
  ],
  extraWatchFiles: [
    '../../channels.js'
  ],
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-150688103-1'
      }
    ]
  ]
}


