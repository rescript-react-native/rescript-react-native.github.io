---
id: text
title: Text
wip: false
---

## Text component

```res
open ReactNative                                                                                                          
                                                                                                        

// start component
<Text>{"Hello World"->React.string}</Text> 
// end component
```


## Text component with style

```res
open ReactNative                                                                                                          

let styles = {                                                                                                            
  open Style                                                                                                              
  StyleSheet.create({                                                                                                     
    "title": textStyle(~fontSize=24., ~fontWeight=#_600, ()),                                                             
  })                                                                                                                      
}                                                                                                                         

// start component
<Text style={styles["title"]}> {"Hello World"->React.string} </Text>                                                  
// end component
```
