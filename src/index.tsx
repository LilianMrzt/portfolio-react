import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

const root = ReactDOM.createRoot(
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    document.getElementById('root')!
)

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
