# BeerSupplyApp

Instructions for setting up and running the project.

## Step 1: Install Dependencies
```bash
# Install dependencies with npm
npm install

# Install CocoaPods dependencies
cd ios
pod install
```

## Step 2: Start  Metro Bundler
In a separate terminal, run:

```bash
# using npm
npm start
```

## Step 3: Run on Simulator/Emulator
You should now be able to run the app on the iOS simulator or Android emulator by typing **i** or **a** respectively.

![alt text](image.png)

Alternatively, you can also run the app directly from Xcode or Android Studio.

## Considerations

``react-native-reanimated`` should be considered for animations to prevent performance issues and leverage worklets to offload the JavaScript thread. In the current project, due to the simplicity of the animations (and the lack of animation requirements), its use was not considered to avoid installing unnecessary libraries and dependencies. However, this decision may result in slightly more verbose code in some places compared to what could be achieved with ``react-native-reanimated``.

Similarly, localized strings were also not used, but this should also be taken into consideration to avoid code repetition, typing errors, hardcoding, and to enhance code clarity, adaptability, extensibility, and maintainability of the project.