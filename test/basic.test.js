/**
 * @jest-environment jsdom
 */

import React from 'react';
import PopupUtils from "../index";
import {cleanup, fireEvent, render, screen, waitFor} from '@testing-library/react';

afterAll(cleanup);

it('rendering with popuputil',()=>{
    const {queryByLabelText, getByLabelText, getByText} = render(<PopupUtils closePopup={()=>{}}><div>alpha</div></PopupUtils>);
    expect(getByText('alpha')).toBeTruthy()
})

it('closing on self click', ()=>{
    const {getByText, } = render(<PopupUtils closeOnSelfClick={true} closePopup={()=>cleanup()}><div>alpha</div></PopupUtils>);
    fireEvent.click(getByText('alpha'));
    expect(screen.queryByText('alpha')).not.toBeTruthy();
})

it('closing on outside click', ()=>{
    const {getByText, } = render(<div><div>beta</div><PopupUtils closeOnSelfClick={true} closePopup={()=>cleanup()}><div>alpha</div></PopupUtils></div>);
    fireEvent.click(getByText('beta'));
    expect(screen.queryByText('alpha')).not.toBeTruthy();
})

it('close after timeout', async ()=>{
    render(<PopupUtils setTimeout={true} closePopup={()=>cleanup()}><div>alpha</div></PopupUtils>);
    await new Promise(resolve => setTimeout(resolve,2000))
    expect(screen.queryByText('alpha')).not.toBeTruthy()
})

it('close after 100ms timeout', async ()=>{
    render(<PopupUtils timeoutTime={100} setTimeout={true} closePopup={()=>cleanup()}><div>alpha</div></PopupUtils>);
    await new Promise(resolve => setTimeout(resolve,200));
    expect(screen.queryByText('alpha')).not.toBeTruthy()
})

it('close on esc key', async ()=>{
    render(<PopupUtils closePopup={()=>cleanup()}><div>alpha</div></PopupUtils>);
    fireEvent.keyDown(screen.queryByText('alpha'),{key: "Escape",
        code: "Escape",
        keyCode: 27,
        charCode: 27})
    expect(screen.queryByText('alpha')).not.toBeTruthy()
})

it('not close on esc key', async ()=>{
    render(<PopupUtils closeOnEscape={false} closePopup={()=>cleanup()}><div>alpha</div></PopupUtils>);
    fireEvent.keyDown(screen.queryByText('alpha'),{key: "Escape",
        code: "Escape",
        keyCode: 27,
        charCode: 27})
    expect(screen.queryByText('alpha')).toBeTruthy()
})