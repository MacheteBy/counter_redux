import React from 'react';
import S from './Button.module.css'

type ButtonPropsType = {
    name: string,
    onClick: () => void,
    disabled?: boolean
}

export const Button: React.FC<ButtonPropsType> = (props) => {
    const { name, onClick, disabled, ...restProps } = props

    const activeStyle = `${S.button} ${disabled === true ? S.buttonDisabled : ''}`

    return (
        <button className={activeStyle} onClick={onClick} disabled={disabled}>{name}</button>
    );
};
