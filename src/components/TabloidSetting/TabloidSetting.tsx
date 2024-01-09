import React, { ChangeEvent, useState } from 'react';
import { Button } from '../Button/Button';
import S from './TabloidSetting.module.css'


type TabloidSettingType = {
    counterMax: number,
    counterMin: number,
    error: boolean,
    onChangeMaxHandler: (e: ChangeEvent<HTMLInputElement>) => void,
    onChangeStartHandler: (e: ChangeEvent<HTMLInputElement>) => void,
    setCount: () => void,
}

export const TabloidSetting = (props: TabloidSettingType) => {

const styleInputMax = props.counterMax < 0 || props.counterMax < props.counterMin

const styleInputMin = props.counterMin < 0 || props.counterMin > props.counterMax

    return (
        <div className={S.tabloidWrapper}>
            <div className={S.inputWrapper}>
                <label>max value</label><input className={styleInputMax ? S.tabloidMaxCount : ''} value={props.counterMax} onChange={props.onChangeMaxHandler} type="number" />
            </div>
            <div className={S.inputWrapper}>
                <label>start value</label><input className={styleInputMin ? S.tabloidMaxCount : ''} value={props.counterMin} onChange={props.onChangeStartHandler} type="number" />
            </div>
            <Button onClick={props.setCount} name={'SET'} disabled={props.error}/>
        </div>
    );
};