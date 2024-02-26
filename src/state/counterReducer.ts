import React from "react"
import { useState } from "react"


export const setCountMin = 'SET-COUNTER-MIN'
export const setCountMax = 'SET-COUNTER-MAX'
export const addCounter = 'ADD-COUNT'
export const resCounter = 'RESET-COUNT'
export const errorCounter = 'ERROR-COUNT'


let initialState = {counter: 0, counterMin: 0, counterMax: 0, error: false}


export const counterReducer = (state: any = initialState, action: any) => {
    switch(action.type) {
        case setCountMin: {
            console.log('setCountMin')
            return {...state, counterMin: action.countMin}
        }
        case setCountMax: {
            console.log('setCountMax')
            return {...state, counterMax: action.countMax}
        }
        case addCounter: {
            console.log('addCounter')
            return {...state, counter: state.counter + 1}
        }
        case resCounter: {
            console.log('resCounter')
            return {...state, counter: state.counterMin}
        }
        case errorCounter: {
            console.log('resCounter')
            return {...state, error: action.error}
        }
        default:
            return state
    }
}

export let setCountMinAC = (countMin: number) => 
({type: setCountMin, countMin: countMin} as const)

export let setCountMaxAC = (countMax: number) => 
({type: setCountMax, countMax: countMax} as const)

export let addCounterAC = () => 
({type: addCounter} as const)

export let resCounterAC = () => 
({type: resCounter} as const)

export let errorCounterAC = (error: boolean) => 
({type: errorCounter, error: error} as const)