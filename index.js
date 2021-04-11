import React, {Component, useEffect, useRef} from "react";
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom'

export default function PopupUtils(props){
    const popupRef = useRef(null);
    const timeOut = useRef(null);
    useEffect(()=>{
        if(props.closeOnClickOutSide){
            document.addEventListener("click",closePopup);
        }
        if(props.closeOnEscape){
            document.addEventListener("keydown",keyDownClosePopup);
        }
        if(props.setTimeout){
            timeOut.current = setTimeout(props.closePopup,props.timeoutTime)
        }
        return ()=>{
            document.removeEventListener("click",closePopup);
            document.addEventListener("keydown",keyDownClosePopup);
            clearTimeout(timeOut.current);
        }
    },[props.children])
    function closePopup(event) {
        if(props.closeOnSelfClick){
            props.closePopup();
            return
        }
        let bound =  ReactDOM.findDOMNode(popupRef.current).getBoundingClientRect();
        if(!(event.clientX >= bound.left && event.clientX <= bound.right && event.clientY >= bound.top && event.clientY <= bound.bottom)){
            props.closePopup();
        }
    }
    function keyDownClosePopup(event) {
        if(event.keyCode === 27){
            this.props.closePopup();
        }
    }
    return React.createElement(Wrapper,{ref:popupRef},props.children)
}
class Wrapper extends Component {
    render() {
        return this.props.children;
    }
}

PopupUtils.propType={
    closePopup:PropTypes.func.isRequired,
    setTimeout:PropTypes.bool,
    timeoutTime:PropTypes.number,
    closeOnEscape:PropTypes.bool,
    closeOnClickOutSide:PropTypes.bool,
    closeOnSelfClick:PropTypes.bool
}
PopupUtils.defaultProps={
    setTimeout:false,
    timeoutTime:1500,
    closeOnEscape:true,
    closeOnClickOutSide:true,
    closeOnSelfClick:false
}