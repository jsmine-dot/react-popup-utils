/**
 * @jest-environment jsdom
 */

import React from 'react';
import PopupUtils from "../index";
import {cleanup, fireEvent, render, screen} from '@testing-library/react';

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