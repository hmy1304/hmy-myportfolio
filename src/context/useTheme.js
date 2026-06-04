import { useContext } from 'react'
import { ThemeContext } from './themeContext'

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme는 반드시 ThemeProvider 안에서 사용해야 합니다.')
  return ctx
}
