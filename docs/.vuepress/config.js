const categories = [
  {
    name: 'Push / Webpush', channels: [
      { slug: 'apn', name: 'APN' },
      { slug: 'onesignal', name: 'OneSignal' },
      { slug: 'pushover', name: 'Pushover' },
      { slug: 'pushbullet', name: 'PushBullet' },
      { slug: 'pusher-push-notifications', name: 'Pusher Push Notifications' },
      { slug: 'webpush', name: 'WebPush' },
      { slug: 'pushwoosh', name: 'Pushwoosh' },
      { slug: 'vwo-engage', name: 'VWO Engage' },
    ],
  },
  {
    name: 'Messenger / Chat / Social', channels: [
      { slug: 'bearychat', name: 'BearyChat' },
      { slug: 'discord', name: 'Discord' },
      { slug: 'facebook', name: 'Facebook' },
      { slug: 'facebook-poster', name: 'Facebook Page Poster' },
      { slug: 'gitter', name: 'Gitter' },
      { slug: 'twitter', name: 'Twitter' },
      { slug: 'telegram', name: 'Telegram' },
    ],
  },
  {
    name: 'Support', channels: [
      { slug: 'pagerduty', name: 'Pagerduty' },
      { slug: 'intercom', name: 'Intercom' },
    ],
  },
  {
    name: 'SMS / Voip', channels: [
      { slug: 'clickatell', name: 'Clickatell' },
      { slug: 'gammu', name: 'Gammu' },
      { slug: 'jusibe', name: 'Jusibe' },
      { slug: 'messagebird', name: 'Messagebird' },
      { slug: 'ovh-sms', name: 'OVH SMS' },
      { slug: 'plivo', name: 'Plivo' },
      { slug: 'smsc-ru', name: 'Smsc.ru' },
      { slug: 'twilio', name: 'Twilio' },
      { slug: 'authy', name: 'Authy' },
      { slug: 'cmsms', name: 'CMSMS' },
      { slug: 'sms-broadcast', name: 'SMSbroadcast' },
      { slug: '46elks', name: '46Elks' },
    ],
  },
  {
    name: 'To-do Lists', channels: [
      { slug: 'evernote', name: 'Evernote' },
      { slug: 'todoist', name: 'Todoist' },
      { slug: 'wunderlist', name: 'Wunderlist' },
      { slug: 'trello', name: 'Trello' },
    ],
  },
  {
    name: 'Misc', channels: [
      { slug: 'lob', name: 'Lob Physical Mail' },
      { slug: 'webhook', name: 'Webhook' },
    ],
  },
  {
    name: 'Deprecated', collapsable: true, channels: [
      { slug: 'hipchat', name: 'HipChat' },
      { slug: 'gcm', name: 'GCM Notifications' },
      { slug: 'maillift', name: 'MailLift' },
      { slug: 'ionic-push-notifications', name: 'Ionic Push Notifications' },
    ],
  },
]

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
    sidebar: categories.map(cat => {
      return {
        title: cat.name,
        collapsable: cat.collapsable || false,
        children: cat.channels.map(c => {
          return [`/${c.slug}/`, c.name]
        }),
      }
    }),
  },
  async additionalPages () {
    let allChannels = []

    categories.map(cat => {
      cat.channels.map(c => {
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

        global['REPO_CACHE'][channel.slug] = {
          path: `/${channel.slug}/`,
          content: res.data,
        }
      }

      return global['REPO_CACHE'][channel.slug]
    })
  },
}
