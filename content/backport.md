---
view::extends: _includes.base
view::yields: body
---

# Usage for Laravel 5.1 and 5.2

If, for any reason, you do not want to upgrade your Laravel version, but still want to make use of the new notification system - this package is for you.

It brings support for all **official** and **community driven** notification channels to Laravel 5.1 and Laravel 5.2.

## Installation

You can install the package via composer:

```bash
composer require laravel-notification-channels/backport
```

Next, you must load the service provider:

```php
// config/app.php
'providers' => [
    // ...
    Illuminate\Notifications\NotificationServiceProvider::class,
],
```

## Usage

Please refer to the [official Laravel Notification documentation](https://laravel.com/docs/master/notifications).
