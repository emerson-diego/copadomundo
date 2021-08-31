import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
export type SnackBarType = 'error' | 'success' | 'info';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private snackBar: MatSnackBar, private zone: NgZone) {}

  public openSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 5000,
    });
  }

  show(message: string, type: SnackBarType): void {
    this.zone.run(() => {
      this.snackBar.open(message, 'x', {
        duration: 5000,
        panelClass: ['snackbar-container', type],
      });
    });
  }
}
