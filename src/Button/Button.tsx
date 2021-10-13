import React, {useState} from 'react';
import style from './Button.module.css'

export type TypeButton = {
    title: string
    onClick?: () => void
    disabled?: boolean

}

export const Button = (props: TypeButton) => {

    return <button className={style.btn}
                   onClick={props.onClick}
                   disabled={props.disabled}>{props.title}</button>

}