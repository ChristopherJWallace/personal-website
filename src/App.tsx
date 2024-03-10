import './App.css'
import { HashRouter as Router, Routes, Route} from 'react-router-dom'

// Pages
import { Layout } from './Layout'
// import { Home } from './pages/home'
import { About } from './pages/About/about'
// import { Page2 } from './pages/page2'
// import { Page3 } from './pages/page3'


function App() {
  
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<About />}/>
          {/* <Route path="/" element={<Home />}/>
          <Route path="/About" element={<About />}/>
          <Route path="/Page2" element={<Page2 />}/>
          <Route path="/Page3" element={<Page3 />}/> */}
        </Route>
      </Routes>
    </Router>
  )
}

export default App
