import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { FcmService } from './services/fcm.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CapacitorPushNotifications-demo';

  constructor(
    private platform: Platform,
    private fcmService: FcmService
  ) {
    this.platform.ready().then(() => {
      this.fcmService.initPush();
    }).catch(e => {
      console.log('error fcm: ', e);
    });
  }
}
