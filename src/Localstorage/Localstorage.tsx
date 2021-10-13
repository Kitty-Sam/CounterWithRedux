import React, {useState} from 'react';
import style from './Localstorage.module.css'
import {Button} from "../Button/Button";

export type TypeLocalstorage = {
    title?: string


}

export const Localstorage = (props: TypeLocalstorage) => {

    let [scoreLocal, setLocal] = useState<number>(0)

    const setToLocalHandler = () => {
        localStorage.setItem("counterValue", JSON.stringify(scoreLocal))
    }

     const getFromLocalHandler = () => {
       let scoreAsString = localStorage.getItem("counterValue")
         if (scoreAsString){
             let NewValue = JSON.parse(scoreAsString)
             setLocal(NewValue)
         }
        }



    const incHandler = () => {
        setLocal(scoreLocal + 1)
    }


    return (
        <div>
            <div className={style.localstorage}>
                <div className={style.localinp}>
                    <div className={style.inp}>{"max value:    "}
                    <div className={style.inp}>{"start value:   "}
                    <input style={{marginLeft: "75px"}} value={scoreLocal}/></div>
                </div>
                <div className={style.locbtn}>
                    <Button title="set" onClick={setToLocalHandler}/>
                    <Button title="get" onClick={getFromLocalHandler}/>
                    <Button title="inc" onClick={incHandler} disabled={scoreLocal>5}/>
                </div>
                </div>
            </div>
        </div>)
}