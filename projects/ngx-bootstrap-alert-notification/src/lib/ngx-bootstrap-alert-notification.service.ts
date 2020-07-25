import { Inject, Injectable, Injector } from '@angular/core'
import {
  DefaultNotificationConfig,
  NgxNotificationConfig,
  NotificationAlertContainerStyles,
  NotificationData,
} from './ngx-notification-config'
import { NgxNotificationRef } from './ngx-notification-ref'
import { Overlay } from '@angular/cdk/overlay'
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal'
import { NgxBootstrapAlertNotificationComponent } from './ngx-bootstrap-alert-notification.component'

const Styles: NotificationAlertContainerStyles = {
  display: 'inline-block',
  margin: '0px auto',
  position: 'fixed',
  transition: 'all 0.5s ease-in-out',
  zIndex: '1031',
}

@Injectable({
  providedIn: 'root',
})
export class NgxBootstrapAlertNotificationService {
  private lastNotification: NgxNotificationRef | undefined

  constructor(
    private overlay: Overlay,
    private parentInjector: Injector,
    @Inject(DefaultNotificationConfig)
    private notificationConfig: NgxNotificationConfig
  ) {}

  // tslint:disable-next-line:variable-name
  private _lastMessage: string | string[] | undefined

  set lastMessage(value: string | string[]) {
    this._lastMessage = value
  }

  show(data: NotificationData, config?: NgxNotificationConfig) {
    if (
      !config ||
      (config && !config.unique) ||
      (config &&
        config.unique &&
        ((Array.isArray(this._lastMessage) &&
          (this._lastMessage || []).includes(data.message as string)) ||
          this._lastMessage !== data.message))
    ) {
      this._lastMessage = data.message
      const positionStrategy = this.getPositionStrategy()
      const overlayRef = this.overlay.create({ positionStrategy })
      const notificationRef = new NgxNotificationRef(
        overlayRef,
        this.parentInjector.get(NgxBootstrapAlertNotificationService)
      )

      const injector = this.getInjector(
        data,
        notificationRef,
        this.parentInjector,
        config,
        this.createContainerStyles(config)
      )
      this.lastNotification = notificationRef
      const toastPortal = new ComponentPortal(
        NgxBootstrapAlertNotificationComponent,
        null,
        injector
      )

      overlayRef.attach(toastPortal)

      return notificationRef
    }
    return null
  }

  getPositionStrategy() {
    return this.overlay.position().global()
  }

  getInjector(
    data: NotificationData,
    notificationRef: NgxNotificationRef,
    parentInjector: Injector,
    notificationConfig?: NgxNotificationConfig,
    containerStyles?: NotificationAlertContainerStyles
  ) {
    const tokens = new WeakMap()

    tokens.set(NotificationData, data)
    tokens.set(NgxNotificationRef, notificationRef)
    if (notificationConfig) {
      notificationConfig = {
        ...this.notificationConfig,
        ...notificationConfig,
      }
      tokens.set(DefaultNotificationConfig, notificationConfig)
    }

    if (containerStyles) {
      tokens.set(NotificationAlertContainerStyles, containerStyles)
    }
    return new PortalInjector(parentInjector, tokens)
  }

  private createContainerStyles(config?: NgxNotificationConfig) {
    const styles = { ...Styles }
    let notificationContainer: HTMLDivElement | null = null

    if (this.lastNotification) {
      const element = this.lastNotification.isVisible()
      notificationContainer = element
        ? element.querySelector('.notification-container')
        : null
    }

    const conf = { ...this.notificationConfig, ...(config ?? {}) }

    if (conf.position && conf.position.includes('top')) {
      styles.top =
        notificationContainer && notificationContainer.style.top
          ? `${
              parseFloat(notificationContainer.style.top) +
              notificationContainer.clientHeight
            }px`
          : '20px'
      switch (conf.position) {
        case 'topLeft':
          styles.left = '20px'
          break
        case 'topCenter':
          styles.left = '0px'
          styles.right = '0px'
          break
        case 'topRight':
          styles.right = '20px'
          break
        default:
          break
      }
    } else {
      styles.bottom =
        notificationContainer && notificationContainer.style.bottom
          ? `${
              parseFloat(notificationContainer.style.bottom) +
              notificationContainer.clientHeight
            }px`
          : '20px'
      switch (conf.position) {
        case 'bottomLeft':
          styles.left = '20px'
          break
        case 'bottomCenter':
          styles.left = '0px'
          styles.right = '0px'
          break
        case 'bottomRight':
          styles.right = '20px'
          break
        default:
          break
      }
    }

    return styles
  }
}
