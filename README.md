**Every feedback is welcome!**

[Demo](https://benevideslecontes.github.io/ngx-bootstrap-alert-notification/)

## Installation

Install via npm:

```bash
$ npm install @benevideschissanga/ngx-bootstrap-alert-notification --save
```

or yarn:

```bash
$ yarn add @benevideschissanga/ngx-bootstrap-alert-notification
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
```
| Property Name     | property Type      |      
| ----------------- | ------------------ | ------------------------------------------------------ |
| `type`            | `NotificationType` | `'warning' | 'success' | 'primary' | 'info' | 'danger'`|
| `title`           | `string`           | `Title for the alert`                                  |
| `icon`            | `string`           | `Icon class name`                                      |
| `message`         | `string`           | `Message to display`                                   |
| `template`        | `TemplateRef<any>` | `Custom template`                                      |
```

### NotificationConfig

You can pass custom configs 
```
| Property Name     | property Type      |      
| ----------------- | ------------------ | ------------------------------------------------------------------------------------- |
| `position`        | `string`           | `'topLeft' | 'topCenter' | 'topRight' | 'bottomLeft' | 'bottomCenter' | 'bottomRight'`|
| `animation`       | `boolean`          | `Should be animated or not`                                                           |
| `timeOut`         | `number`           | `Delay time to auto close the alert`                                                  |
| `dismissible`     | `boolean`          | `Should auto close or not`                                                            |
| `unique`          | `boolean`          | `Dont show duplicated messages if true`                                               |
```
