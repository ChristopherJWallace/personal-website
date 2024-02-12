import './App.css'
import { HashRouter as Router, Routes, Route} from 'react-router-dom'

// Pages
import { Layout } from './Layout'
import { Home } from './pages/home'
import { Page1 } from './pages/page1'
import { Page2 } from './pages/page2'
import { Page3 } from './pages/page3'
import { Extra } from './pages/extra'
import { ShopAppDemo } from './pages/shopAppDemo'


function App() {

  // Store state
  {
    count : {value : 0}
    isLoggedIn : {value: false}
  }
  // Action
  const increment = {type: "INCREMENT", payload: 10}
  // Reducers
  


  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}/>
          <Route path="/Page1" element={<Page1 />}/>
          <Route path="/Page2" element={<Page2 />}/>
          <Route path="/Page3" element={<Page3 />}/>
          <Route path="/extra" element={<Extra />}/>
          {/* <Route path="/ShopAppDemo" element={<ShopAppDemo />}/> */}
        </Route>
      </Routes>
    </Router>
  )
}

export default App
