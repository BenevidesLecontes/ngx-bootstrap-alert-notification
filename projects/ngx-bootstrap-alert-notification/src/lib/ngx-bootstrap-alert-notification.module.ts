import { ModuleWithProviders, NgModule } from '@angular/core'
import { NgxBootstrapAlertNotificationComponent } from './ngx-bootstrap-alert-notification.component'
import { CommonModule } from '@angular/common'
import {
  defaultNotificationCofigValues,
  DefaultNotificationConfig,
  NgxNotificationConfig,
} from './ngx-notification-config'
import { OverlayModule } from '@angular/cdk/overlay'

@NgModule({
  declarations: [NgxBootstrapAlertNotificationComponent],
  imports: [CommonModule, OverlayModule],
  entryComponents: [NgxBootstrapAlertNotificationComponent],
  exports: [NgxBootstrapAlertNotificationComponent],
})
export class NgxBootstrapAlertNotificationModule {
  public static forRoot(config?: NgxNotificationConfig): ModuleWithProviders {
    return {
      ngModule: NgxBootstrapAlertNotificationModule,
      providers: [
        {
          provide: DefaultNotificationConfig,
          useValue: config ? config : defaultNotificationCofigValues,
        },
      ],
    }
  }
}
