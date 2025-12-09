# SkillSwap (MAD Assignment 01)

A **React Native mobile application** developed as part of the **Mobile Application Development (MAD)** course.  
**SkillSwap** is an interactive platform where users can **exchange skills, services, or expertise** with others.  
Users can browse available skills, offer their own skills, and connect with people for mutual skill-sharing.

---

## 🎥 App Demo Video[![YouTube](https://img.icons8.com/color/28/youtube-play.png)](https://youtube.com/shorts/UF-BAR2Vwhc?si=fqh7Uub3FmD_uTbw)  https://youtube.com/shorts/UF-BAR2Vwhc?si=fqh7Uub3FmD_uTbw

---

## 📌 Features (Example — modify if needed)

- Browse available skills posted by users  
- Post your own skills or services  
- Request or offer a skill swap  
- Modern UI with React Native components  
- Smooth navigation & fast performance  

---

## 🚀 Prerequisites

Before running the project, ensure the following are installed:

- **Node.js** (latest version recommended)  
- **npm** or **Yarn**  
- **Android Studio** (for Android development)  
- **Xcode + CocoaPods** (for iOS, macOS only)  
- Complete **React Native environment setup**  
  👉 https://reactnative.dev/docs/set-up-your-environment

---

## 📥 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/msohaaib/MAD_Assignment_01_-SillSwap-.git
cd MAD_Assignment_01_-SillSwap-
````

### 2️⃣ Install Dependencies

```bash
npm install
# or
yarn install
```

### 3️⃣ Start Metro Bundler

```bash
npx react-native start
```

---

## 📱 Run the Application

Open a **new terminal** while Metro is running.

### **Android**

```bash
npx react-native run-android
```

### **iOS**

(macOS only)

```bash
npm run ios
# or
yarn ios
```

---

## 🛠️ Troubleshooting & Common Issues

### 🔹 Emulator / Device Not Connected

Ensure your Android emulator or physical device is running.

### 🔹 iOS Pods Missing

```bash
cd ios
pod install
cd ..
```

### 🔹 Metro Cache Issues

```bash
npx react-native start --reset-cache
```

### 🔹 Android Build Errors

```bash
cd android
./gradlew clean
cd ..
```

### 🔹 Native Module Errors

Double-check versions in:

* `android/build.gradle`
* `ios/Podfile`

---

## 📂 Project Structure (Typical)

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

## 🎉 Final Words

Thanks for exploring **SkillSwap**!
Feel free to improve, customize, or extend the project further.
**Happy Coding 🚀**
