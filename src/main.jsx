import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Stats } from '@react-three/drei'
import { Leva } from 'leva'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading</div>}>
      <App />
      <Stats />
      <Leva collapsed />
    </Suspense>
  </React.StrictMode>,
)
