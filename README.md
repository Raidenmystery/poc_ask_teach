# Expo Go

Expo Go is a mobile app that allows you to test and share your Expo projects on a real device. With Expo Go, you can preview your app in development, without the need to set up any complicated toolchains or emulators. Simply scan a QR code with your device to get started.
.env

The .env file is used to store environment variables that your Expo project needs. These variables can include things like API keys, database URLs, and other sensitive information that should not be hard-coded into your app's source code.

To use environment variables in your Expo project, you can create a .env file in the root directory of your project and define your variables like this:

```bash
  BASE_URL="https://pokeapi.co/api/v2/"
  STORYBOOK_ENABLED=''
```