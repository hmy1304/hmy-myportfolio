import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import PlaceholderPage from './pages/PlaceholderPage'
import ThemeProvider from './context/ThemeProvider'
import Layout from './components/layout/Layout'

function NotFound() {
  return (
    <PlaceholderPage
      title="Page not found"
      desc="존재하지 않는 페이지입니다."
    />
  )
}

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route element={<Layout />}>
            {/* 모든 섹션은 Home 한 페이지에서 렌더링 */}
            <Route index element={<Home />} />
            <Route path="privacy" element={<PlaceholderPage title="Privacy" />} />
            <Route path="terms"   element={<PlaceholderPage title="Terms" />} />
            <Route path="404"     element={<NotFound />} />
            <Route path="*"       element={<Navigate to="/404" replace />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
