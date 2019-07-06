import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgxBootstrapAlertNotificationModule} from '@benevideschissanga/ngx-bootstrap-alert-notification';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxBootstrapAlertNotificationModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
