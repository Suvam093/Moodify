import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import store from './store'
import './index.css'
import App from './App.jsx'
import Layout from './Layout/Layout'
import Home from './components/Home/Home.jsx'
import {About} from './components/About/About'
import {Contact} from './components/Contact/contact'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store = {store}>
      <Router>
        {/* <Layout> */}
          <Routes>
            <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            </Route>
          </Routes>
        {/* </Layout> */}
      </Router>
    </Provider>,
  </StrictMode>
)

