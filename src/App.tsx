import React, { ChangeEvent, useEffect, useState } from 'react';
import './App.css';
import { Tabloid } from './components/Tabloid/Tabloid';
import { TabloidSetting } from './components/TabloidSetting/TabloidSetting';



function App() {

  const [counter, setCounter] = useState(0)
  const [counterMin, setCounterMin] = useState(0)
  const [counterMax, setCounterMax] = useState(0)
  const [error, setError] = useState(false)

  useEffect(() => {
    let valueMin = localStorage.getItem('min')
    let valueMax = localStorage.getItem('max')

    if (valueMin) {
      let newMin = JSON.parse(valueMin)
      setCounterMin(newMin)
      setCounter(newMin)
    }

    if (valueMax) {
      let newMax = JSON.parse(valueMax)
      setCounterMax(newMax)
    }

  }, [])

  const countAdd = () => {
    setCounter(counter + 1)
  }

  const countReset = () => {
    setCounter(counterMin)
  }

  const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const valueMax = +e.currentTarget.value
    const searchErrorMax = valueMax < 0 || valueMax <= counterMin
    setCounterMax(+e.currentTarget.value)
    if(searchErrorMax){
      setError(true)
    } else {
      setError(false)
    }
  }

  const onChangeStartHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const valueMin = +e.currentTarget.value
    const searchErrorMin = valueMin < 0 || valueMin > counterMax
    setCounterMin(+e.currentTarget.value)
    if(searchErrorMin){
      setError(true)
    } else {
      setError(false)
    }
  }

  const setCount = () => {
    if (counterMin) {
      localStorage.setItem('min', JSON.stringify(counterMin))
      setCounterMin(counterMin)
    }
    if (counterMax) {
      localStorage.setItem('max', JSON.stringify(counterMax))
      setCounterMax(counterMax)
    }
    setCounter(counterMin)
  }

  return (
    <div className="App">
      <div className='wrapper'>
        <div className='border'>
          <TabloidSetting
            counterMax={counterMax}
            counterMin={counterMin}
            error={error}
            onChangeMaxHandler={onChangeMaxHandler}
            onChangeStartHandler={onChangeStartHandler}
            setCount={setCount}
          />
        </div>
        <div className='border'>
          <Tabloid
            counter={counter}
            counterMax={counterMax}
            counterMin={counterMin}
            error={error}
            countAdd={countAdd}
            countReset={countReset} />
        </div>
      </div>
    </div>

  );
}

export default App;



