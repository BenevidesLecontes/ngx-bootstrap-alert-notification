import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { NgxBootstrapAlertNotificationComponent } from './ngx-bootstrap-alert-notification.component'

describe('NgxBootstrapAlertNotificationComponent', () => {
  let component: NgxBootstrapAlertNotificationComponent
  let fixture: ComponentFixture<NgxBootstrapAlertNotificationComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgxBootstrapAlertNotificationComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxBootstrapAlertNotificationComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
