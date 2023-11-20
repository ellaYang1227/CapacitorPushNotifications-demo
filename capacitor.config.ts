import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.CapacitorPushNotifications.app',
  appName: 'CapacitorPushNotifications-demo',
  webDir: 'dist/capacitor-push-notifications-demo',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    // 推播通知設定
    PushNotifications: {
      presentationOptions: ["badge", "sound", "alert"],
    },
  }
};

export default config;
