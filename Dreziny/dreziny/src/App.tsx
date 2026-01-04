import './App.css'
import SideMenu from './components/SideMenu'
import Dashboard from './pages/Dashboard'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import { Routes, Route, HashRouter } from 'react-router-dom'

function App() {
  return (
    <HashRouter>
      <div className="app-layout">
        <aside className="aside">
          <SideMenu />
        </aside>

        <main className="main">
          <Routes>
            <Route index element={<Dashboard />} />
            <Route path="contact" element={<Contact />} />
            <Route path="gallery" element={<Gallery />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  )
}

export default App
