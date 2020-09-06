import React, {Component} from "react";
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom'
export default class PopupUtils extends Component{
    constructor(){
        super()
        this.closePopup = this.closePopup.bind(this);
        this.keyDownClosePopup = this.keyDownClosePopup.bind(this);
    }
    componentDidMount() {
        this.component = ReactDOM.findDOMNode(this);
        this.copyStatus = this.props.copyStatus
        if(this.props.closeOnClickOutSide){
            document.addEventListener("click",this.clickHandler = function(event){this.closePopup(event)}.bind(this));
        }
        if(this.props.closeOnEscape){
            document.addEventListener("keydown",this.keydownhandler = function(event){this.keyDownClosePopup(event)}.bind(this));
        }
        if(this.props.setTimeout){
            if(this.timeout){
                clearTimeout(this.timeout)
            }
            this.timeout = setTimeout(function() {this.props.closePopup()}.bind(this),this.props.timeoutTime)
        }
    }
    //information-- remove these listners on unmounting
    componentWillUnmount() {
        if(this.props.closeOnClickOutSide){
            document.removeEventListener("click",this.clickHandler);
        }
        if(this.props.closeOnEscape){
            document.removeEventListener("keydown",this.keydownhandler);
        }
        clearTimeout(this.timeout)
    }
    //information-- close on esc key down
    keyDownClosePopup(event){
        if(event.keyCode === 27){
            this.props.closePopup();
        }
    }
    //information-- close if clicked outside
    closePopup(event){
        if(this.props.closeOnSelfClick){
            this.props.closePopup();
            return
        }
        let bound =  ReactDOM.findDOMNode(this).getBoundingClientRect();
        if(!(event.clientX >= bound.left && event.clientX <= bound.right && event.clientY >= bound.top && event.clientY <= bound.bottom)){
            this.props.closePopup();
        }
    }
    render() {return this.props.children}
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