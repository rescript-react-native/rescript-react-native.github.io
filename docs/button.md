---
id: button
title: Button
---

A basic button component that should render nicely on any platform. Supports a minimal level of customization.

If this button doesn't look right for your app, you can build your own button using [TouchableOpacity](touchableopacity) or [TouchableWithoutFeedback](touchablewithoutfeedback).

```res
<Button
  onPress={onPressLearnMore}
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
```

## Example

```SnackPlayer name=Button%20Example
open ReactNative

let styles = {
  open Style
  StyleSheet.create({
    "title": textStyle(~fontSize=24., ~fontWeight=#_600, ()),
  })
}

@react.component
let app = () => {
  <SafeAreaView>
    <StatusBar />
    <ScrollView contentInsetAdjustmentBehavior=#automatic>
      <Text style={styles["title"]}> {"Button component"->React.string} </Text>
      <Button
        onPress={(_) => 
          Alert.alert(
            ~title="Button pressed",
            ~message="The button is pressed and show this alert",
            (),
          )
        }
        title="Press me"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
        />
       <Button
        title="Press me"
        color="#f194ff"
        onPress={(_) => 
          Alert.alert(
            ~title="Button pressed",
            ~message="Button with adjusted color pressed",
            (),
          )
        }
      />
    </ScrollView>
  </SafeAreaView>
}
```

---

# Reference

## Props

### <div class="label required basic">Required</div>**`onPress`**

Handler to be called when the user taps the button.

| Type                               |
| ---------------------------------- |
| function([PressEvent](pressevent)) |

---

### <div class="label required basic">Required</div>**`title`**

Text to display inside the button. On Android the given title will be converted to the uppercased form.

| Type   |
| ------ |
| string |

---

### `accessibilityLabel`

Text to display for blindness accessibility features.

| Type   |
| ------ |
| string |

---

### `color`

Color of the text (iOS), or background color of the button (Android).

| Type            | Default                                                                                                                                                                                                                                   |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [color](colors) | <ins style={{background: '#2196F3'}} className="color-box" /> `'#2196F3'` <div className="label android">Android</div><hr/><ins style={{background: '#007AFF'}} className="color-box" /> `'#007AFF'` <div className="label ios">iOS</div> |

---

### `disabled`

If `true`, disable all interactions for this component.

| Type | Default |
| ---- | ------- |
| bool | `false` |

---
### `testID`

Used to locate this view in end-to-end tests.

| Type   |
| ------ |
| string |

---

### `touchSoundDisabled` <div class="label android">Android</div>

If `true`, doesn't play system sound on touch.

| Type    | Default |
| ------- | ------- |
| boolean | `false` |
