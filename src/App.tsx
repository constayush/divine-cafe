import { Routes, Route } from "react-router-dom"
import { ThemeProvider } from "./contexts/ThemeContext"
import { useScrollToTop } from "./hooks/useScrollToTop"
import Home from "./pages/Home"
import About from "./pages/About"
import Menu from "./pages/Menu"
import Gallery from "./pages/Gallery"
import Contact from "./pages/Contact"

function App() {
  useScrollToTop()

  return (
    <ThemeProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </ThemeProvider>
  )
}

export default App
