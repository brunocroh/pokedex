import 'Modules/font-awesome/css/font-awesome.min.css'

import { BrowserRouter } from 'react-router-dom'

import React from 'react'
import Routes from './routes'

export default props => (
  <div className='container'>
    <BrowserRouter>
      <div>
        <Routes />
      </div>
    </BrowserRouter>
  </div>
)
