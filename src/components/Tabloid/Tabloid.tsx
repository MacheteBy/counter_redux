import React, { useState } from 'react';
import { Button } from '../Button/Button';
import S from './Tabloid.module.css'

type TabloidType = {
    counter: number,
    counterMax: number,
    counterMin: number,
    error: boolean,
    countAdd: () => void,
    countReset: () => void,
}


export const Tabloid = (props: TabloidType) => {

    const activeStyle = `${S.tabloidWrapper} ${props.counter === props.counterMax ? S.tabloidMaxCount : ''}`
    const activeStyleError = `${S.tabloidWrapper} ${props.error ? S.tabloidMaxCount : ''}`

    return (
        <div>
            {props.error ? <span className={activeStyleError}>Enter a correct value</span> : <span className={activeStyle}>{props.counter}</span>}
            <Button onClick={props.countAdd} name={'INC'} disabled={props.counter === props.counterMax} />
            <Button onClick={props.countReset} name={'RESET'} disabled={props.counter === props.counterMin} />
        </div>


    );
};
