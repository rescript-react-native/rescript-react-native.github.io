---
id: text
title: Text
wip: true
---

## Example

```res
open ReactNative                                                                                                          

let styles = {                                                                                                            
  open Style                                                                                                              
  StyleSheet.create({                                                                                                     
    "title": textStyle(~fontSize=24., ~fontWeight=#_600, ()),                                                             
  })                                                                                                                      
}                                                                                                                         

<Text style={styles["title"]}> {"Hello World"->React.string} </Text>                                                  
```
