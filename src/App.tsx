import { HashRouter } from 'react-router-dom'
import Router from './Routers/Router'
import AuthRouter from './Components/AuthRouter'
import AuthProvider from '@/Components/AuthProvider'
import './App.css'
function App() {
  return (
    <AuthProvider>
      <HashRouter>
        <AuthRouter>
          <Router />
        </AuthRouter>
      </HashRouter>
    </AuthProvider>
  )
}

export default App
