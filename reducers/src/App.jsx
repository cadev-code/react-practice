import { act, useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const initial = 0;

  const reducer = (state, action) => {
    switch (action.type) {
      case 'increment':
        return { 
          count: state.count++,
          lastAction: action.type
        }
      case 'decrement':
        return { 
          count: state.count--,
          lastAction: action.type
        }
      case 'reset':
        return { 
          count: initial,
          lastAction: action.type
        }
    }
  }

  const [state, dispatch] = useReducer(reducer, { count: initial, lastAction: 'anything' })

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <span>Last Action: <strong>{state.lastAction}</strong></span>
      <h2>{state.count}</h2>
      <div className="card" style={{ display: 'flex', gap: '5px', justifyContent: 'center' }}>
        <button onClick={() => dispatch({type: 'decrement'})}>
          -
        </button>
        <button onClick={() => dispatch({type: 'reset'})}>
          Reset
        </button>
        <button onClick={() => dispatch({type: 'increment'})}>
          +
        </button>
      </div>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
