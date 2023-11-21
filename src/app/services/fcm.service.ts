import { Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { ActionPerformed, PushNotifications, PushNotificationSchema, Token } from '@capacitor/push-notifications';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FcmService {

  constructor(
    private router: Router
  ) { }

  // 初始化推送
  initPush() {
    if (Capacitor.getPlatform() !== 'web') {
      this.registerNotifications();
    }
  }

  // 註冊通知
  private async registerNotifications() {
    try {
      // 新增事件監聽器，處理推送通知事件
      await this.addListeners();
      // 檢查接收推播通知權限
      let permStatus = await PushNotifications.checkPermissions();
      // 接收通知的權限狀態；表示是否允許接收推送通知
      const { receive } = permStatus;

      // 如果權限狀態為 prompt 表示用戶尚未作出選擇 則請求權限
      if (receive === 'prompt') {
        permStatus = await PushNotifications.requestPermissions();
      }

      // 如果最終權限為被 granted 表示被用戶授予 反之則為未授予權限拋出錯誤
      if (receive !== 'granted') {
        throw new Error('用戶拒絕權限!');
      }

      // 註冊應用程式以接收推播通知
      await PushNotifications.register();
    } catch (e) {
      console.log(e);
    }
  }

  // 取得已送達通知
  async getDeliveredNotifications() {
    const notificationList = await PushNotifications.getDeliveredNotifications();
    console.log('取得已送達通知', notificationList);
  }

  // 新增事件監聽器
  addListeners() {
    // 當推播通知註冊順利完成時呼叫。提供推播通知令牌
    PushNotifications.addListener(
      'registration',
      async (token: Token) => {
        console.log('登記 My token: ', JSON.stringify(token));
      }
    );

    // 當推播通知註冊完成但出現問題時呼叫。提供註冊問題的錯誤
    PushNotifications.addListener('registrationError', (error: any) => {
      console.error('註冊完成 Error: ' + JSON.stringify(error));
    });

    // 當設備收到推播通知時呼叫
    PushNotifications.addListener(
      'pushNotificationReceived',
      async (notification: PushNotificationSchema) => {
        // notification 接收到的推送通知的詳細信息，例如標題、內容和自訂數據
        console.log('收到推播通知: ' + JSON.stringify(notification));
        const { data } = notification;
        if (data?.redirect) this.router.navigateByUrl(data.redirect)
      }
    );

    // 對推播通知進行操作時呼叫
    PushNotifications.addListener(
      'pushNotificationActionPerformed',
      async (notification: ActionPerformed) => {
        // notification 用戶操作相關的推送通知的詳細信息
        const { data } = notification.notification;
        console.log('對推播通知進行操作: ' + JSON.stringify(notification.notification));
        console.log('推播數據: ', JSON.stringify(data));
        if (data?.redirect) this.router.navigateByUrl(data.redirect)
      }
    );
  }

  // 重置 Badge 計數
  resetBadgeCount() {
    PushNotifications.removeAllDeliveredNotifications();
  }
}
