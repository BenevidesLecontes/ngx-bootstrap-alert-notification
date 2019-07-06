import {Component} from '@angular/core';
import {NgxBootstrapAlertNotificationService} from 'ngx-bootstrap-alert-notification';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-bootstrap-alert';

  constructor(
    private notificationService: NgxBootstrapAlertNotificationService
  ) {
  }

  open(position: string, type: any, title: string): void {
    this.notificationService.show(
      {
        type,
        message:
          'This is a notification with close button and icon and can have many lines.',
        icon: 'icon icon-bell-55',
        title
      },
      {
        position
      }
    );
  }
}
