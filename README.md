# Laravel Notification Channels Website

Our site is built with [Vuepress](https://vuepress.vuejs.org/). 


## Building

```bash
yarn dev # Run developmnent server
yarn built # Build the static site
```

## Adding new Channels

Open `channels.js` and add your channel to the correct category. The slug should be set as the github repository name.

This will add the channel to the sidebar, and pull in the `README.md` from the repository during the build. 

```js
...

name: 'Support', channels: [
      { slug: 'pagerduty', name: 'Pagerduty' },
      { slug: 'intercom', name: 'Intercom' },
      { slug: 'new-channel', name: 'My New Channel' },
    ],

...
```


## Deploying
This website is deployed automatically using [Netlify](https://app.netlify.com).
   
Branch previews are build for each PR.

## Contribution

Contributions are welcome. Feel free to create an Issue or PR.
