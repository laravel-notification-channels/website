---
home: true
heroImage: /logo.png
heroText: Laravel Notification Channels
tagline: A collection of custom notification drivers for Laravel
actionText: Browse Channels →
actionLink: /about/
---

<style>
.hero .description {
    max-width:40rem !important
}

.hero img {
    height: 10em;
}

.maintain {
    display: block;
    margin-top: 0.3em;
    color: #989898;
}
</style>

<div class="features">
  <div class="feature">
    <h2>Simplicity First</h2>
    <p>Minimal setup with quick integration helps you focus on developing your newest product.</p>
  </div>
  <div class="feature">
    <h2>{{ $themeConfig.channelCount }} ready to use channels</h2>
    <p>We've got channels for most of the popular services you use ready to go. Just pull in the channel, configure your keys & start sending notifications</p>
  </div>
  <div class="feature">
    <h2>Community Powered</h2>
    <p>Channels are built and maintained by the community. Want to add a channel you use? Make a suggestion or add your channel on <a href="https://github.com/laravel-notification-channels/channels">channels repo</a>.</p>
  </div>
</div>

<div class="footer">
    MIT Licensed | Copyright © {{ (new Date).getFullYear() }} | <a href="https://github.com/orgs/laravel-notification-channels/people">Contributors</a>
    <small class="maintain">Maintained by <a href="https://atymic.dev">atymic</a></small>
</div>
