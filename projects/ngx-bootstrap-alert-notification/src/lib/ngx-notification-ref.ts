import { OverlayRef } from '@angular/cdk/overlay';

export class NgxNotificationRef {
  constructor(private readonly overlay: OverlayRef, private nt?: any) {}

  close() {
    this.overlay.dispose();
    this.clearMessage();
  }

  isVisible() {
    return this.overlay && this.overlay.overlayElement;
  }

  getPosition() {
    return this.overlay.overlayElement.getBoundingClientRect();
  }

  clearMessage() {
    this.nt.lastMessage = null;
  }
}
