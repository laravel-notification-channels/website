module.exports = [
  {
    name: 'Push / Webpush', channels: [
      {
        slug: 'apn', name: 'Apple Push (APN)',
        maintainers: ['barryvdh', 'dwightwatson'],
      },
      {
        slug: 'fcm', name: 'Firebase Cloud Messaging (FCM)',
        maintainers: ['chrisbjr'],
      },
      {
        slug: 'onesignal', name: 'OneSignal',
        maintainers: ['LKaemmerling', 'Lloople'],
      },
      {
        slug: 'pushover', name: 'Pushover',
        maintainers: ['casperboone'],
      },
      {
        slug: 'pushbullet', name: 'PushBullet',
        maintainers: ['atymic', 'alexsoft'],
      },
      {
        slug: 'pusher-push-notifications', name: 'Pusher Push Notifications',
        maintainers: ['atymic'],
      },
      {
        slug: 'webpush', name: 'WebPush',
        maintainers: ['cretueusebiu'],
      },
      {
        slug: 'pushwoosh', name: 'Pushwoosh',
        maintainers: ['axlon'],
      },
      {
        slug: 'vwo-engage', name: 'VWO Engage',
        maintainers: ['billmn'],
      },
    ],
  },
  {
    name: 'Messenger / Chat / Social', channels: [
      {
        slug: 'discord', name: 'Discord',
        maintainers: ['codyphobe', 'arcdigital'],
      },
      {
        slug: 'workplace', name: 'Facebook Workplace',
        maintainers: ['ghunti'],
      },
      {
        slug: 'microsoft-teams', name: 'Microsoft Teams',
        maintainers: ['Tob0t'],
      },
      {
        slug: 'google-chat', name: 'Google Chat',
        maintainers: ['frankieeedeee'],
      },
      {
        slug: 'gitter', name: 'Gitter',
        maintainers: ['jhaoda'],
      },
      {
        slug: 'twitter', name: 'Twitter',
        maintainers: ['christophrumpel'],
      },
      {
        slug: 'telegram', name: 'Telegram',
        maintainers: ['irazasyed'],
      },
      {
        slug: 'bearychat', name: 'BearyChat',
        maintainers: ['ElfSundae'],
      },
      {
        slug: 'facebook', name: 'Facebook',
        maintainers: ['irazasyed'],
      },
      {
        slug: 'facebook-poster', name: 'Facebook Page Poster',
        maintainers: ['dwightwatson'],
      },
      {
        slug: 'rocket-chat', name: 'Rocket Chat',
        maintainers: ['antonkomarev', 'FunfareNico'],
      },
    ],
  },
  {
    name: 'Support', channels: [
      {
        slug: 'pagerduty', name: 'Pagerduty',
        maintainers: ['atymic'],
      },
      {
        slug: 'intercom', name: 'Intercom',
        maintainers: ['ftw-soft'],
      },
    ],
  },
  {
    name: 'SMS / Voip', channels: [
      {
        slug: 'touch-sms', name: 'TouchSMS',
        maintainers: ['atymic'],
      },
      {
        slug: 'clickatell', name: 'Clickatell',
        maintainers: ['etiennemarais'],
      },
      {
        slug: 'jusibe', name: 'Jusibe',
        maintainers: ['atymic', 'unicodeveloper'],
      },
      {
        slug: 'messagebird', name: 'Messagebird',
        maintainers: ['petericebear'],
      },
      {
        slug: 'plivo', name: 'Plivo',
        maintainers: ['koomai'],
      },
      {
        slug: 'smsc-ru', name: 'Smsc.ru',
        maintainers: ['jhaoda'],
      },
      {
        slug: 'twilio', name: 'Twilio',
        maintainers: ['gregoriohc', 'fwartner'],
      },
      {
        slug: 'authy', name: 'Authy',
        maintainers: ['Omranic'],
      },
      {
        slug: 'cmsms', name: 'CMSMS',
        maintainers: ['mbardelmeijer'],
      },
      {
        slug: '46elks', name: '46Elks',
        maintainers: ['larsemil'],
      },
      {
        slug: 'sipgate', name: 'Sipgate',
        maintainers: ['simonkub'],
      },
      {
        slug: 'all-my-sms', name: 'AllMySms',
        maintainers: ['mikaelpopowicz'],
      },
      {
        slug: 'smspoh', name: 'Smspoh',
        maintainers: ['tintnaingwinn'],
      },
      {
        slug: 'turbosms', name: 'TurboSMS',
        maintainers: ['gvital3230'],
      },
      {
        slug: 'vodafone', name: 'Vodafone',
        maintainers: ['Human018'],
      },
      {
        slug: 'africastalking', name: 'AfricasTalking',
        maintainers: ["ossycodes"]
      },
      {
        slug: 'sms77', name: 'SMS77',
        maintainers: ["mxschll"]
      },
      {
        slug: 'smsapi', name: 'SMSAPI',
        maintainers: ["atymic"]
      },
      {
        slug: 'sms-broadcast', name: 'SMSbroadcast',
        maintainers: ['atymic'],
      },
    ],
  },
  {
    name: 'To-do Lists', channels: [
      {
        slug: 'trello', name: 'Trello',
        maintainers: ['atymic'],
      },
    ],
  },
  {
    name: 'Misc', channels: [
      {
        slug: 'lob', name: 'Lob Physical Mail',
        maintainers: ['atymic'],
      },
      {
        slug: 'interfax', name: 'InterFAX',
        maintainers: ['ivinteractive'],
      },
      {
        slug: 'aws-sns', name: 'AWS SNS',
        maintainers: ['claudsonm'],
      },
      {
        slug: 'webhook', name: 'Webhook',
        maintainers: ['atymic'],
      },
    ],
  },
  {
    name: 'Deprecated', collapsable: true, channels: [
      { slug: 'hipchat', name: 'HipChat' },
      { slug: 'gcm', name: 'GCM Notifications' },
      { slug: 'maillift', name: 'MailLift' },
      { slug: 'ionic-push-notifications', name: 'Ionic Push Notifications' },
      { slug: 'gammu', name: 'Gammu' },
      { slug: 'evernote', name: 'Evernote' },
      { slug: 'todoist', name: 'Todoist' },
      { slug: 'wunderlist', name: 'Wunderlist' },
    ],
  },
]
