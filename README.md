# 一些运行命令

### 打包前生成bundle.js（全react）


```
react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/
```


### 打包前生成bundle.js(嵌入)


```
react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output app/src/main/assets/index.android.bundle --assets-dest app/src/main/res/
```


### 发布前生成bundle.js（嵌入）

```
react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output bundles/index.android.bundle --assets-dest ./bundles
```


### 发布（嵌入）

```
code-push release testApp2 ./bundles/ 1.0 --deploymentName Staging --description "版本1"
```


### 发布版本

```
code-push release-react TestApp android -d Production
```


### 生成安装包

```
gradlew assemblerelease
```


### 清空发布的版本

```
code-push deployment clear TestApp Staging
```

### 部署

```
code-push deployment add TestApp
```


### 重命名

```
code-push deployment rename TestApp
```


### 删除部署

```
code-push deployment rm TestApp
```


### 列出应用的部署情况

```
code-push deployment ls TestApp
```


### 查看部署的key

```
code-push deployment ls TestApp -k
```


### 查看历史版本(Production 或者 Staging)

```
code-push deployment history TestApp Staging
```


### 回滚

```
code-push rollback appName Production
```


### 调试

```
react-native run-android
```


### 正式

```
react-native run-android --variant release
```



#嵌入code-push的一些配置

```
xmlns:tools="http://schemas.android.com/tools"

<uses-sdk tools:overrideLibrary="com.facebook.react"/>

<activity
    android:name=".ReactActivity"
    android:label="@string/app_name"
    android:configChanges="keyboard|keyboardHidden|orientation|screenSize">
    <intent-filter>
        <action android:name="android.intent.action.MAIN" />
        <category android:name="android.intent.category.LAUNCHER" />
    </intent-filter>
</activity>
<activity android:name="com.facebook.react.devsupport.DevSettingsActivity" />

defaultConfig {
    applicationId "com.baiyang.store"
    minSdkVersion 14
    targetSdkVersion 23
    versionCode 29
    versionName "2.1.2"
    multiDexEnabled true
    ndk {
      abiFilters "armeabi-v7a"
    }
}

dependencies {
    compile "com.facebook.react:react-native:+" // From node_modules.
}


maven {
      // All of React Native (JS, Android binaries) is installed from npm
    url "$rootDir/node_modules/react-native/android"
}


# 禁止混淆react
-keep public class com.facebook.react.** {
    public protected *;
}

compile ("com.facebook.react:react-native:+"){
    exclude group: 'com.facebook.fresco', module: 'fresco'
    exclude group: 'com.facebook.fresco', module: 'imagepipeline-okhttp'
    exclude group: 'com.facebook.fresco', module: 'imagepipeline'
}
```

## 参考指南
1. [react native codepush热更新解决成功更新](http://www.jianshu.com/p/fa362da953c7)
2. [RN热更新——codepush](http://www.jianshu.com/p/9b39710ebb4e)
3. [React Native热更新部署/热更新-CodePush最新集成总结](http://www.jianshu.com/p/9e3b4a133bcc)