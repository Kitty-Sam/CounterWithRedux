import React, {ChangeEvent, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./store/store";
import {incScoreAC, inputMaxScoreAC, inputStartScoreAC, resetScoreAC} from "./store/counter-reducer";
import s from "./App.module.css"




export const App = () => {
    const dispatch = useDispatch()

    const scoreNumber = useSelector<AppStateType,number>( state => state.counter.scoreNumber);
    const InputMax = useSelector<AppStateType,number>(state => state.counter.InputMax)
    const InputStart = useSelector<AppStateType,number>(state => state.counter.InputStart)


    const incHandler = () => {
        dispatch(incScoreAC())
    }
    const resetHandler = () => {
        dispatch(resetScoreAC())
    }


   const inputMaxHandler = (e:any) => {
        let InputMax = +e.currentTarget.value
        dispatch (inputMaxScoreAC(InputMax))
            }


   const  inputStartHandler = (e: any) => {
       let InputStart = +e.currentTarget.value
       dispatch (inputStartScoreAC(InputStart))
   }



    return (

        <div className={s.app}>
              <div className={s.firstBlock}>
                  <div>
                     <input type={"number"} value={InputMax} onChange={inputMaxHandler}/>{"  max value"}
                     <input type={"number"} value={InputStart} onChange={inputStartHandler}/>{"  start value"}
                  </div>
              </div>


            <div className={s.secondBlock}>
                <div>{scoreNumber}</div>
                <button style= {{margin: "20px"}} onClick={incHandler} disabled={scoreNumber === InputMax}> {"inc"} </button>
                <button onClick={resetHandler}> {"reset"} </button>
            </div>
        </div>
    )}


