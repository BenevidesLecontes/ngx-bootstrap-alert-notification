**Every feedback is welcome!**

[Demo](https://benevideslecontes.github.io/ngx-bootstrap-alert-notification/)

## Installation

Install via npm:

```shell
$ npm install @benevideschissanga/ngx-bootstrap-alert-notification --save
```

or yarn:

```shell
$ yarn add @benevideschissanga/ngx-bootstrap-alert-notification
```

## Usage

To use ngx-bootstrap-alert-notification

In your main module, import `NgxBootstrapAlertNotificationModule.forRoot()`

In your component inject the `NgxBootstrapAlertNotificationService` and use like:

```typescript
this.notificationService.show(
  {
    type: 'danger',
    message:
      'This is a notification with close button and icon and can have many lines.',
    icon: 'icon icon-bell-55',
    title: 'Danger',
  },
  {
    position: 'topRight',
  }
)
```

### NotificationData

| Property Name | Property Type    | Property Value                                    |
| ------------- | ---------------- | ------------------------------------------------- |
| type          | NotificationType | `warning`, `success`, `primary`, `info`, `danger` |
| title         | string           | Title for the alert                               |
| icon          | string           | Icon class name                                   |
| message       | string           | Message to display                                |
| template      | TemplateRef<any> | Custom template                                   |

### NotificationConfig

You can pass custom configs

| Property Name | Property Type | Property Value                                                                  |
| ------------- | ------------- | ------------------------------------------------------------------------------- |
| position      | string        | `topLeft`, `topCenter`, `topRight`, `bottomLeft`, `bottomCenter`, `bottomRight` |
| animation     | boolean       | Should be animated or not                                                       |
| timeOut       | number        | Delay time to auto close the alert                                              |
| dismissible   | boolean       | Should auto close or not                                                        |
| unique        | boolean       | Dont show duplicated messages if true                                           |

## Versions

`0.0.3 - Angular 8`

`0.0.4 - Angular 9`
