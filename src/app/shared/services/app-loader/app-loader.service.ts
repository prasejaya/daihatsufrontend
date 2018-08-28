import { Injectable } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { Observable } from 'rxjs';
import { AppLoaderComponent } from './app-loader.component';

@Injectable()
export class AppLoaderService {
  dialogRef: MaterialModule<AppLoaderComponent>;
  constructor(private dialog: MaterialModule) { }

  public open(title: string = 'Please wait'): Observable<boolean> {
    this.dialogRef = this.dialog.open(AppLoaderComponent, { disableClose: true, backdropClass: 'light-backdrop'});
    this.dialogRef.updateSize('200px');
    this.dialogRef.componentInstance.title = title;
    return this.dialogRef.afterClosed();
  }

  public close() {
    if(this.dialogRef)
      this.dialogRef.close();
  }
}
