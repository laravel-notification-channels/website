module.exports = [
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
      { slug: 'sipgate', name: 'Sipgate' },
    ],
  },
  {
    name: 'To-do Lists', channels: [
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
      { slug: 'gammu', name: 'Gammu' },
      { slug: 'evernote', name: 'Evernote' },
      { slug: 'todoist', name: 'Todoist' },
      { slug: 'wunderlist', name: 'Wunderlist' },
    ],
  },
]
