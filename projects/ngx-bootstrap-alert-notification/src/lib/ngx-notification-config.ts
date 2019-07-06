import { Injectable, InjectionToken, TemplateRef } from '@angular/core';

export class NotificationData {
  type: NotificationType;
  title?: string;
  icon?: string;
  message?: string;
  template?: TemplateRef<any>;
  templateContext?: {};
}

export class NotificationAlertContainerStyles {
  display: string;
  margin: string;
  position: string;
  transition: string;
  zIndex: string;
  top?: string;
  left?: string;
  bottom?: string;
  right?: string;
}

export type NotificationType = 'warning' | 'success' | 'primary' | 'info' | 'danger';

export interface NgxNotificationConfig {
  position?: 'topLeft' | 'topCenter' | 'topRight' | 'bottomLeft' | 'bottomCenter' | 'bottomRight' | any;
  animation?: boolean;
  timeOut?: number;
  dismissible?: boolean;
  unique?: boolean;
}

@Injectable()
export class DefaultNotificationConfig implements NgxNotificationConfig {
  animation = true;
  dismissible = true;
  position = 'topLeft';
  timeOut = 5;
  unique = false;
}

export const defaultNotificationCofigValues = {
  position: 'topRight',
  animation: true,
  timeOut: 5,
  dismissible: true
};

export const NOTIFICATION_CONFIG_TOKEN = new InjectionToken('notification-config');
