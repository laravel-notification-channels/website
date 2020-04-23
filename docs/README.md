---
home: true
heroImage: /logo.svg
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

.sponsors {
    padding: 2.5rem;
    border-top: 1px solid #eaecef;
    text-align: center;
    color: #4e6e8e;
}

.sponsors p {
    text-align: center;
    color: #8b8b8b;
    font-size: 1em;
}

.sponsors .row {
    padding-bottom: 1em;
    display: flex;
    justify-content: center;
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
<div>
<div class="sponsors">
<p>Sponsored By</p>
  <div class="row">
      <div class="sponsor">
        <a target="_blank" href="https://www.amezmo.com"><img alt="PHP Hosting" src="../branding/amezmo.svg"></a>
      </div>
    </div>
</div>
</div>

<div class="footer">
    MIT Licensed | Copyright © {{ (new Date).getFullYear() }} | <a href="https://github.com/orgs/laravel-notification-channels/people">Contributors</a>
    <small class="maintain">Maintained by <a href="https://atymic.dev">atymic</a></small>
</div>
