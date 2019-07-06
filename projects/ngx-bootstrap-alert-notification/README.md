# Animate.css [![GitHub release](https://img.shields.io/github/release/daneden/animate.css.svg)](https://github.com/daneden/animate.css/releases) [![CDNJS](https://img.shields.io/cdnjs/v/animate.css.svg)](https://cdnjs.com/libraries/animate.css) [![Build Status](https://travis-ci.com/daneden/animate.css.svg?branch=master)](https://travis-ci.com/daneden/animate.css) [![devDependencies Status](https://david-dm.org/daneden/animate.css/dev-status.svg)](https://david-dm.org/daneden/animate.css?type=dev) [![chat](https://img.shields.io/badge/chat-gitter-green.svg)](https://gitter.im/animate-css/Lobby) [![npm version](https://badge.fury.io/js/animate.css.svg)](https://www.npmjs.com/package/animate.css)


**Every feedback is welcome!**

## Installation

Install via npm:

```bash
$ npm install @benevides.chissanga/ngx-bootstrap-alert-notification --save
```

or yarn:

```bash
$ yarn add @benevides.chissanga/ngx-bootstrap-alert-notification
```


## Usage

To use animate.css in your website, simply drop the stylesheet into your document's `<head>`, and add the class `animated` to an element, along with any of the animation names. That's it! You've got a CSS animated element. Super!

```
Import `NgxBootstrapAlertNotificationModule.forRoot()` in your main module 
```

```
In your component inject the `NgxBootstrapAlertNotificationService` and use like:

this.notificationService.show(
      {
        type: 'danger',
        message:
          'This is a notification with close button and icon and can have many lines.',
        icon: 'icon icon-bell-55',
        title: 'Danger'
      },
      {
        position: 'topRight'
      }
    );
```

### NotificationData
| Property Name     | property Type      |      
| ----------------- | ------------------ | ------------------------------------------------------ |
| `type`            | `NotificationType` | `'warning' | 'success' | 'primary' | 'info' | 'danger'`|
| `title`           | `string`           | `Title for the alert`                                  |
| `icon`            | `string`           | `Icon class name`                                      |
| `message`         | `string`           | `Message to display`                                   |
| `template`        | `TemplateRef<any>` | `Custom template`                                      |

### NotificationConfig

You can pass custom configs 

| Property Name     | property Type      |      
| ----------------- | ------------------ | ------------------------------------------------------------------------------------- |
| `position`        | `string`           | `'topLeft' | 'topCenter' | 'topRight' | 'bottomLeft' | 'bottomCenter' | 'bottomRight'`|
| `animation`       | `boolean`          | `Should be animated or not`                                                           |
| `timeOut`         | `number`           | `Delay time to auto close the alert`                                                  |
| `dismissible`     | `boolean`          | `Should auto close or not`                                                            |
| `unique`          | `boolean`          | `Dont show duplicated messages if true`                                               |
