import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Intro from "./pages/Intro"
import Skills from "./pages/Skills"
import Projects from "./pages/Projects"
import Together from "./pages/Together"
import PlaceholderPage from "./pages/PlaceholderPage"

import Layout from "./components/layout/Layout"

function NotFound() {
  return(
    <PlaceholderPage 
    title="Page not found"
    desc="존재하지 않는 페이지입니다."
    />
  )
}

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="intro" element={<Intro/>}/>
          <Route path="skills" element={<Skills/>}/>
          <Route path="projects" element={<Projects/>}/>
          <Route path="together" element={<Together/>}/>
          <Route path="primary" element={<PlaceholderPage title="Privacy"/>}/>
          <Route path="terms" element={<PlaceholderPage title="Terms"/>}/>
          <Route path="404" element={<NotFound/>}/>
          <Route path="*" element={<Navigate to="/404" replace/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
