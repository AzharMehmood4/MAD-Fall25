# SkillSwap App
🎥 **App Demo Video:**
[![YouTube](https://img.icons8.com/color/30/youtube-play.png)](https://youtube.com/shorts/VrH3fR0w0xc?si=zV4V9mBpAzUpLekE)
[https://youtube.com/shorts/VrH3fR0w0xc?si=zV4V9mBpAzUpLekE](https://youtube.com/shorts/VrH3fR0w0xc?si=zV4V9mBpAzUpLekE)

SkillSwap is a **React Native mobile application** built as part of the **Mobile Application Development (MAD)** course.
This app allows users to **exchange skills**, enabling them to offer their skills and request skills from others — creating a simple skill-sharing community.

---

## 🚀 Features (Short Overview)

✔ Post skills you can offer
✔ Browse skills posted by others
✔ Request or exchange skills
✔ Simple and clean UI
✔ Built entirely using React Native CLI

---

## 📦 Prerequisites

Ensure you have the following installed:

* **Node.js** (latest LTS recommended)
* **npm** or **Yarn**
* **Android Studio** (for Android build)
* **Xcode + CocoaPods** (macOS only, for iOS)
* React Native environment properly configured
  👉 Guide: [https://reactnative.dev/docs/environment-setup](https://reactnative.dev/docs/environment-setup)

---

## 📁 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/msohaaib/MAD_Assignment_01_-SillSwap-.git
cd MAD_Assignment_01_-SillSwap-
```

### 2️⃣ Install Dependencies

```bash
npm install
```

---

## ▶️ Running the App

### Start Metro Bundler

```bash
npx react-native start
```

### Run on Android

```bash
npx react-native run-android
```

### Run on iOS (macOS only)

```bash
npm run ios
# or
yarn ios
```

For first-time iOS setup:

```bash
cd ios
pod install
cd ..
```

---

## 🛠 Troubleshooting

### 🔹 Emulator not opening / device not detected

Make sure Android Emulator or iOS Simulator is running.

### 🔹 Metro bundler errors

```bash
npx react-native start --reset-cache
```

### 🔹 Android build failing

Try cleaning:

```bash
cd android
./gradlew clean
cd ..
```

### 🔹 Native module issues

Reinstall pods (iOS):

```bash
cd ios
pod install
cd ..
```



If you want, I can design a **logo**, **app banner**, or **Play Store style description** for SkillSwap too.
