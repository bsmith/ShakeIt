# Setting up React Native

## Install a Java 11 SDK

```
brew tap homebrew/cask-versions
brew install --cask zulu11
```

## Install Android Studio

Visit [https://developer.android.com/studio] and install Android Studio Electric Eel.

Once android studio is installed, you need to use 'More items' on the Welcome screen.

First visit the "SDK Manager".

Install "Android 12 (S)" under "SDK Platforms" (tick it, then press Apply).
	"Show Package Details", make sure SDK 31 and "Google APIs" are selected.
	(This is a slow multi-gigabyte download!)
  
Next visit the "Device Manager". Create device: Pick a phone "Pixel 6". Next > choose Release S, API level 31.
Wait for import to finish.  Then exit Android Studio.
	
```
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools
```
Add to .zshrc, then source .zshrc 

## Setup a new React Native project

```
npx react-native init AwesomeProject --skip-install 
cd AwesomeProject
npm install
```

git is not initialised, so you'd need to do this yourself.

# Run your program

To run your program:

```
npx react-native run-android
```

This opens two windows: the Android Phone emulator, and a control terminal for the React Native.  This is slow the first time you do it.
To exit: Use 'Control-C' in the control terminal, followed by Enter, followed by closing the window.
Select the Android emulator, and use the 'Quit' menu item to exit it.
