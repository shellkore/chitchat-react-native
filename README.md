# chitchat-react-native

## Description

A simple chat app made over `react-native + Expo` using `Firestore` for saving all data.
Currently it has only global room. Working on more features. You can download APK from [here](https://drive.google.com/file/d/1AsN6GTd-odZZZ2fUklKBXEXzfZHxL0L3/view?usp=sharing)

## Build Your Own

  ### Clone or download as a Zip.
  `git clone <repo-name>`

  ### Install

  - Expo-Cli
  `sudo npm -g i expo-cli`

  - Install all dependencies.
  ` npm i`

  - Install [Expo App](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_IN&gl=US) on your Android Device from Play Store.
  
  - Create a new project in Firebase Console. On completing the steps, select configurations for web app. Copy the firebaseConfig snippet. It would look something like this. `var firebaseConfig = {...};`
  
  - Create a file creds.js in folder named config. ` config -> creds.json`. Paste the above firebaseConfig code snippet. Replace `var` with `export const`. Now it would look something like this. `export const firebaseConfig = {...};`

  ### Run

  - `npm start` or `expo start`

  - you will be redirected to a page. Scan QR from that page using your Expo App on Android Device.

## Run Without Building

- Download [Expo App](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_IN&gl=US)
- Scan the QR from [here](https://expo.io/@shellkore/projects/chitchat)
- Enjoy!!

## To-Do

- [ ] Make multiple rooms.
- [ ] Image Sharing.
- [ ] Make Authentication System.
- [ ] Other Media Sharing.

> Feel free to share your opinion.
