import { TestBed } from '@angular/core/testing'

import { NgxBootstrapAlertNotificationService } from './ngx-bootstrap-alert-notification.service'

describe('NgxBootstrapAlertNotificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}))

  it('should be created', () => {
    const service: NgxBootstrapAlertNotificationService = TestBed.get(
      NgxBootstrapAlertNotificationService
    )
    expect(service).toBeTruthy()
  })
})
