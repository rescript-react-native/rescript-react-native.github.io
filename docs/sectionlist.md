---
id: sectionlist
title: SectionList
officialDoc: https://reactnative.dev/docs/sectionlist
---

```rescript
type item = {id: string, title: string}
type section = {title: string, data: array<item>}

let sections = [
  {title: "A", data: [{id: "1", title: "Apple"}]},
  {title: "B", data: [{id: "2", title: "Banana"}]},
]

<SectionList
  sections
  keyExtractor={(item, _index) => item.id}
  renderItem={({item}) => <Text> {item.title->React.string} </Text>}
  renderSectionHeader={({section}) =>
    <Text> {section.title->React.string} </Text>}
/>
```
