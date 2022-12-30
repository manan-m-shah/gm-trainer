'use client'
import type { NextPage } from 'next'
import { useContext } from 'react'
import AppContext from '../context/AppContext'
import { ActionKind } from '../types/Context'

const Home: NextPage = () => {
    const { state, dispatch } = useContext(AppContext)
    console.log(state)
    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-2">
            <h1 className='p-10 bg-blue-200'>{state.count}</h1>
            <button onClick={() => dispatch({ type: ActionKind.COUNT, payload: 1 })}>Increment</button>
        </div>
    )
}

export default Home
