import './App.css'
import SideMenu from './components/SideMenu'
import Dashboard from './pages/Dashboard'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="app-layout">
      <aside className="aside">
        <SideMenu />
      </aside>

      <main className="main">
        <Routes>
          <Route path="/Dreziny/" element={<Dashboard />} />
          <Route path="/Dreziny/contact" element={<Contact />} />
          <Route path="/Dreziny/gallery" element={<Gallery />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
