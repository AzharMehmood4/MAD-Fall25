# SillSwap (MAD Assignment 01)

A React Native app project built as part of the Mobile Application Development (MAD) assignment.  
This app (tentatively named *SillSwap*) allows users to … _(insert short description of what your app does: e.g., swap/sell items, share items, chat, browse catalog, etc.)_

---

## Prerequisites

Before you begin, make sure you have:

- Node.js (latest version)  
- npm or Yarn  
- For **iOS**: macOS + Xcode + CocoaPods  
- For **Android**: Android Studio + appropriate SDK & emulator / device  
- React Native environment setup (follow official guide)  

---

## Getting Started

### Clone the repository

```bash
git clone https://github.com/msohaaib/MAD_Assignment_01_-SillSwap-.git
cd MAD_Assignment_01_-SillSwap-
```

### Install dependencies

Using npm:

```bash
npm install
```

### Run the Metro bundler

In the project root:

```bash
npx react-native start

```

### Run on Android / iOS

Open a new terminal (while Metro is running):

**Android**

```bash
npx react-native run-android
```

**iOS**

On macOS:

```bash
npm run ios
# or
yarn ios
```

---

## Troubleshooting / Common Issues

* Make sure your emulator / device is running and connected

* For iOS, run `pod install` after adding or upgrading native modules

* Clear cache if you encounter weird bundling or module errors:

  ```bash
  npx react-native start --reset-cache
  ```

  or

  ```bash
  yarn start --reset-cache
  ```

* If Android build fails, sometimes cleaning helps:

  ```bash
  cd android
  ./gradlew clean
  cd ..
  ```

* If there are issues with native dependencies, double check versions in `android/build.gradle` and `ios/Podfile`

---

## Project Structure (example)

Here’s a rough outline of your project’s directories and files:

```
/
┣ android/
┣ ios/
┣ src/
┣ App.tsx
┣ index.js
┣ package.json
┣ tsconfig.json
┣ babel.config.js
┣ metro.config.js
┣ jest.config.js
┣ app.json
┣ …
```

---


**Enjoy and happy coding!** 🚀
