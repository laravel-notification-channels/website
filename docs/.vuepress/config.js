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
          ['/about', 'Contributing'],
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
    ['link', { rel: 'apple-touch-icon', sizes: '57x57', href: '/icons/apple-icon-57x57.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '60x60', href: '/icons/apple-icon-60x60.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '72x72', href: '/icons/apple-icon-72x72.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '76x76', href: '/icons/apple-icon-76x76.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '114x114', href: '/icons/apple-icon-114x114.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '120x120', href: '/icons/apple-icon-120x120.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '144x144', href: '/icons/apple-icon-144x144.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '152x152', href: '/icons/apple-icon-152x152.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/icons/apple-icon-180x180.png' }],
    ['link', { rel: 'icon" type="image/png', sizes: '192x192', href: '/icons/android-icon-192x192.png' }],
    ['link', { rel: 'icon" type="image/png', sizes: '32x32', href: '/icons/favicon-32x32.png' }],
    ['link', { rel: 'icon" type="image/png', sizes: '96x96', href: '/icons/favicon-96x96.png' }],
    ['link', { rel: 'icon" type="image/png', sizes: '16x16', href: '/icons/favicon-16x16.png' }],
    ['link', { rel: 'manifest', href: '/icons/manifest.json' }],
    ['link', { rel: 'msapplication-TileColor', href: '#ffffff' }],
    ['link', { rel: 'msapplication-TileImage', href: '/icons/ms-icon-144x144.png' }],
    ['link', { rel: 'theme-color', href: '#ffffff' }],
    ['style', {}, '.hero .description {max-width:40rem !important}']
  ],
  extraWatchFiles: [
    '../../channels.js'
  ]
}
