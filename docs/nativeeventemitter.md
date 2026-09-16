---
id: nativeeventemitter
title: NativeEventEmitter
officialDoc: https://reactnative.dev/docs/native-modules-ios#sending-events-to-javascript
---

```rescript
let emitter = NativeEventEmitter.make(myNativeModule)

let sub = emitter->NativeEventEmitter.addListener("onSomething", payload => {
  Console.log(payload)
})

emitter->NativeEventEmitter.listenerCount("onSomething") // int
emitter->NativeEventEmitter.removeAllListeners("onSomething")
sub->EventSubscription.remove
```
