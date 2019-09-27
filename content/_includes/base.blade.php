<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="@yield('pageDescription', $siteDescription)">

    <title>{{$siteName}} @yield('pageTitle')</title>

    <link rel="apple-touch-icon" sizes="57x57" href="/icons/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/icons/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/icons/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/icons/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/icons/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/icons/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/icons/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192" href="/icons/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/icons/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png">
    <link rel="manifest" href="/icons/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="/icons/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">

    <script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/markdown-it/7.0.0/markdown-it.min.js" ></script>

    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link href='https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,700' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="/assets/prism.css">
    <link rel="stylesheet" href="/assets/css/all.css">
</head>

<body>
<!-- Google Tag Manager -->
<noscript>
    <iframe src="//www.googletagmanager.com/ns.html?id=GTM-P62952"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>
</noscript>
<script>(function (w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({
            'gtm.start': new Date().getTime(), event: 'gtm.js'
        });
        var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
        j.async = true;
        j.src =
                '//www.googletagmanager.com/gtm.js?id=' + i + dl;
        f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-P62952');</script>
<!-- End Google Tag Manager -->

@if($currentUrlPath == '/')
    <div class="wow">
        <img src="@url('/assets/logo.png')"
             alt="Laravel Notification Channels">
        <h1>Laravel Notification Channels</h1>
        <h2>A collection of custom drivers for Laravel 5.5+ & 6.0+</h2>
        <a href="https://github.com/laravel-notification-channels">
            GitHub
        </a>
        <i>&nbsp&nbsp.&nbsp&nbsp</i>
        <a href="https://packagist.org/packages/laravel-notification-channels">
            Packagist
        </a>
    </div>
@else
    <div id="header">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <a href="@url('/')">
                        <img src="@url('/assets/logo.png')"
                             alt="Laravel Notification Channels">
                    </a>

                    <h1><a href="@url('/')">Laravel Notification Channels</a></h1>
                </div>
                <div class="col-md-6 text-right buttons">
                    <a href="https://github.com/laravel-notification-channels">
                        <span>GitHub</span>
                    </a>

                    <a href="https://packagist.org/packages/laravel-notification-channels/">
                        <span>Packagist</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
@endif

<div class="container">

    <div class="row">
        <div class="col-md-2">
            @include('_includes.sidebar')
        </div>
        <div class="col-md-10 realContent">
            @yield('body')
        </div>
    </div>
</div>

<footer>
    <div class="container">
        <div class="content">
            &copy; Copyright {{ date('Y') }} Laravel Notification Channels
        </div>
    </div>
</footer>

<script src="/assets/prism.js"></script>
</body>
</html>
