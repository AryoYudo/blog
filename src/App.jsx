import './App.css'
import HomePage from './pages/index'
import { GlobalContext } from './context'


function App() {
  const user = {
    username: "Aryo Yudo"
  }
  return (
      <div className='app'>
        <GlobalContext.Provider value={user}>
        <HomePage/>
        </GlobalContext.Provider>
        </div>
  )
}

export default App
