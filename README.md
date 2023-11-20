# CapacitorPushNotificationsDemo(使用 Angular 在 Capacitor app 提供推播通知功能(@capacitor/push-notifications 套件 + Firebase)示範)

練習在 Capacitor 的 Angular 專案上，使用 @capacitor/push-notifications 套件在 Android、iOS 平台上，實作推播通知。

[[筆記]使用 Angular 在 Capacitor app 提供推播通知功能(@capacitor/push-notifications 套件 + Firebase)-Android 版](https://perfect-submarine-445.notion.site/Angular-Capacitor-app-capacitor-push-notifications-Firebase-Android-e10d47191105460abf3fd8fb07066fce)

## 安裝

以下將會引導你如何安裝此專案到你的電腦上。

- Angular v16.0.x
- Node.js ^16.14.0 || ^18.10.0 版本

### 取得專案

```
git clone git@github.com:ellaYang1227/CapacitorPushNotifications-demo.git
```

### 移動到專案內

```
cd CapacitorPushNotifications-demo
```

### 安裝套件

```
npm install
```

### 運行專案

```
ng serve
```

### 瀏覽器開啟專案

```
http://localhost:4200/
```

## Android APP 測試

### 打開 Android Studio 測試 Android APP

```
npx cap open android
```

## iOS APP 測試
### 編譯 Angular 應用程式(輸出路徑為 dist/ 目錄中)

```
ng build --configuration=production
```

### 打開 Xcode 測試 iOS APP

```
npx cap open ios
```

### 執行 iOS APP
```
npx cap run ios
```

## 環境變數說明

```
// 開發或正式
production=
```

## Capacitor 變數說明

```
// 應用程式的唯一標識符
appId:
// 應用程式名稱
appName:
// 指定 Angular 應用程式的打包輸出目錄
webDir:
// 用於指定 Capacitor 伺服器的配置
server: {
  // for Android 的設定
  androidScheme:
}
// Capacitor 上使用的套件
plugins: {
    // 推播通知設定
    PushNotifications: {
      presentationOptions:
    }
  }
```

## 資料夾說明

- android - 放置** Capacitor 建構 Android 移動應用程式**
- iOS - 放置** Capacitor 建構 iOS 移動應用程式**
- pages - 放置**網站單元頁面**
- assets - 放置**靜態資源**
- styles - 放置**樣式變數**
- environments - 放置**環境變數**

## 專案技術

- @angular/cli v16.1.4
- Node.js v18.12.1
- Rxjs v7.8.0
- Typescript v5.1.3
- Scss
- Ionic v7.1.3
- Capacitorjs v5
- @capacitor/angular v2.0.3
- @capacitor/android v5.2.2
- @capacitor/ios v5.2.2
- @capacitor/push-notifications v5.1.0
- Firebase
