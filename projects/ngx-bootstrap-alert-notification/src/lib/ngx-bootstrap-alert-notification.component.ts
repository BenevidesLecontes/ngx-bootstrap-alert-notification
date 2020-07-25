import { Component, HostListener, Inject, OnInit } from '@angular/core'
import { BehaviorSubject, defer, interval, Observable, timer } from 'rxjs'
import {
  DefaultNotificationConfig,
  NgxNotificationConfig,
  NotificationAlertContainerStyles,
  NotificationData,
} from './ngx-notification-config'
import { NgxNotificationRef } from './ngx-notification-ref'
import {
  filter,
  map,
  reduce,
  share,
  take,
  withLatestFrom,
} from 'rxjs/operators'

@Component({
  selector: 'ngx-bootstrap-alert-notification',
  template: `
    <div
      [ngStyle]="containerStyles"
      class="col-11 col-sm-4 notification-container"
    >
      <div
        *ngIf="!data.template"
        [class.alert-dismissible]="notificationConfig.dismissible"
        [class.alert-with-icon]="data.icon"
        [class.animated]="notificationConfig.animation"
        [class.show]="show"
        [ngClass]="['alert-' + data.type, animatedClass]"
        class="alert fade"
        role="alert"
      >
        <button
          (click)="close()"
          aria-label="Close"
          class="close"
          type="button"
        >
          <span aria-hidden="true">×</span>
        </button>
        <h4 *ngIf="data.title as title" class="title">{{ title }}</h4>
        <span
          *ngIf="data.icon as icon"
          [className]="icon"
          data-notify="icon"
        ></span>
        <span data-notify="message">
          {{ data.message }}
        </span>
      </div>
      <ng-container
        *ngIf="data.template as templateRef"
        [ngTemplateOutlet]="templateRef"
      ></ng-container>
    </div>
  `,
  styles: [
    `
      :host {
        z-index: 1051;
        position: fixed;
        display: block;
      }

      .title {
        margin-bottom: 0;
        color: white;
      }

      @keyframes fadeInDown {
        from {
          opacity: 0;
          transform: translate3d(0, -100%, 0);
        }

        to {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }
      }

      .fadeInDown {
        animation-name: fadeInDown;
      }

      @keyframes fadeOutUp {
        from {
          opacity: 1;
        }

        to {
          opacity: 0;
          transform: translate3d(0, -100%, 0);
        }
      }

      .fadeOutUp {
        animation-name: fadeOutUp;
      }

      .animated {
        animation-duration: 1s;
        animation-fill-mode: both;
      }
    `,
  ],
})
export class NgxBootstrapAlertNotificationComponent implements OnInit {
  show!: boolean
  animatedClass = 'fadeInDown'
  notification!: {
    obs: { stepTimer: Observable<any>; completeTimer: Observable<any> }
    paused: BehaviorSubject<boolean>
  }

  constructor(
    readonly data: NotificationData,
    readonly ref: NgxNotificationRef,
    readonly containerStyles: NotificationAlertContainerStyles,
    @Inject(DefaultNotificationConfig)
    public notificationConfig: NgxNotificationConfig
  ) {}

  ngOnInit() {
    if (this.notificationConfig.dismissible) {
      this.dismissibleTimer()
    }
    this.show = true
  }

  close() {
    if (this.notificationConfig.animation) {
      this.animatedClass = 'fadeOutUp'
      this.show = false
      timer(1000)
        .pipe(take(1))
        .subscribe((t) => this.ref.close())
    } else {
      this.show = false
      this.ref.close()
    }
  }

  @HostListener('mouseover')
  onMouseOver() {
    if (this.notificationConfig.dismissible) {
      this.notification.paused.next(true)
    }
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    if (this.notificationConfig.dismissible) {
      this.notification.paused.next(false)
    }
  }

  private dismissibleTimer() {
    const subject = new BehaviorSubject<boolean>(false)
    this.notification = {
      paused: subject,
      obs: this.getPausableTimer(
        this.notificationConfig.timeOut as number,
        subject
      ),
    }
    this.notification.obs.completeTimer
      .pipe(take(1))
      .subscribe((t) => this.close())
  }

  private getPausableTimer(
    timeout: number,
    pause: BehaviorSubject<boolean>
  ): { stepTimer: Observable<any>; completeTimer: Observable<any> } {
    const pausableTimer$ = defer(() => {
      let seconds = 1
      return interval(1000).pipe(
        withLatestFrom(pause),
        filter(([v, paused]) => !paused),
        take(timeout),
        map(() => seconds++)
      )
    }).pipe(share())

    return {
      stepTimer: pausableTimer$,
      completeTimer: pausableTimer$.pipe(reduce((x, y) => y)),
    }
  }
}
