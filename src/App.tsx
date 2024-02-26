import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { Tabloid } from './components/Tabloid/Tabloid';
import { TabloidSetting } from './components/TabloidSetting/TabloidSetting';
import { addCounterAC, errorCounterAC, resCounterAC, setCountMaxAC, setCountMinAC } from './state/counterReducer';




function App() {

  let counterState = useSelector<any, any>(state => state.counter)
  let dispatch = useDispatch()

  useEffect(() => {
    let valueMin = localStorage.getItem('min')
    let valueMax = localStorage.getItem('max')

    if (valueMin) {
      let newMin = JSON.parse(valueMin)
      dispatch(setCountMinAC(newMin))
      dispatch(resCounterAC())
    }

    if (valueMax) {
      let newMax = JSON.parse(valueMax)
      dispatch(setCountMaxAC(newMax))
    }

  }, [])

  const countAdd = () => {
    dispatch(addCounterAC())
  }

  const countReset = () => {
    dispatch(resCounterAC())
  }

  const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const valueMax = +e.currentTarget.value
    const searchErrorMax = valueMax < 0 || valueMax <= counterState.counterMin
    dispatch(setCountMaxAC(+e.currentTarget.value))
    if(searchErrorMax){
      // setError(true)
      dispatch(errorCounterAC(true))
    } else {
      // setError(false)
      dispatch(errorCounterAC(false))
    }
  }

  const onChangeStartHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const valueMin = +e.currentTarget.value
    const searchErrorMin = valueMin < 0 || valueMin > counterState.counterMax
    dispatch(setCountMinAC(+e.currentTarget.value))
    if(searchErrorMin){
      // setError(true)
      dispatch(errorCounterAC(true))
    } else {
      // setError(false)
      dispatch(errorCounterAC(false))
    }
  }

  const setCount = () => {
    if (counterState.counterMin) {
      localStorage.setItem('min', JSON.stringify(counterState.counterMin))
      dispatch(setCountMinAC(counterState.counterMin))
    }
    if (counterState.counterMax) {
      localStorage.setItem('max', JSON.stringify(counterState.counterMax))
      dispatch(setCountMaxAC(counterState.counterMax))
    }
    dispatch(resCounterAC())
  }

  return (
    <div className="App">
      <div className='wrapper'>
        <div className='border'>
          <TabloidSetting
            counterMax={counterState.counterMax}
            counterMin={counterState.counterMin}
            error={counterState.error}
            onChangeMaxHandler={onChangeMaxHandler}
            onChangeStartHandler={onChangeStartHandler}
            setCount={setCount}
          />
        </div>
        <div className='border'>
          <Tabloid
            counter={counterState.counter}
            counterMax={counterState.counterMax}
            counterMin={counterState.counterMin}
            error={counterState.error}
            countAdd={countAdd}
            countReset={countReset} />
        </div>
      </div>
    </div>

  );
}

export default App;