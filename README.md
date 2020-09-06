#react-popup-utils

A react component which can be used as wrapper for any popup. 
This component easily detects mouse clicks done on its wrapped element or out side and triggers the call back.
It also triggers callback on `esc` key and on `timeout`.

##Getting Started

install the react-popup-utils via npm:
`npm i @jsmine/react-popup-utils`

import it in your file:
`import PopupUtils from '@jsmine/react-popup-utils`

wrap your popup:
`<PopupUtils closePopup={<your popup close handler>}>
    <div>popup</div>
</PopupUtils>`

##Props
| props | type | default value | description|
| --------------- | --------------- | --------------- | --------------- |
| closePopup | function | none | function passed in this prop will be called to close the popup |
| closeOnSelfClick | bool | false | if set true, popup will close even on getting clicked on wrapped element |
| closeOnClickOutSide | bool | true | if set false, popup close handler will not be called |
| closeOnEscape | bool | true | if set true, popup will close on clicking `esc` key |
| setTimeout | bool | false | if set true, popup will be closed after specified time |
| timeoutTime | number | 1500 milliseconds | it takes timeout time in millisecond |

##Keywords
react popup wrapper react-component

