# react-popup-utils
---
A react component which can be used as wrapper for any popup. 
This component easily detects mouse clicks done on its wrapped element or out side and triggers the call back.
It also triggers callback on `esc` key and on `timeout`.

## Getting Started
---
install the react-popup-utils via npm:
```
npm i @jsmine/react-popup-utils
```

import it in your file:
```
import PopupUtils from '@jsmine/react-popup-utils
```

wrap your popup:
```javascript
<PopupUtils closePopup={()=>'your popup close handler'}>
    <div>popup</div>
</PopupUtils>
```

## Props
---
| props | type | default value | description|
| --------------- | --------------- | --------------- | --------------- |
| closePopup | function | none | function passed in this prop will be called on getting clicked or on other callback triggers |
| closeOnSelfClick | bool | false | if set true, popup close handler will trigger even on getting clicked on wrapped element |
| closeOnClickOutSide | bool | true | if set false, popup close handler will not trigger |
| closeOnEscape | bool | true | if set true, popup close handler will trigger on clicking `esc` key |
| setTimeout | bool | false | if set true, popup close handler will trigger after specified time |
| timeoutTime | number | 1500 milliseconds | it takes timeout time in millisecond |

## Keywords
---
react popup wrapper react-component

