
import Header from './components/header/Header'
import AppRouter from './routes/AppRouter'
import {  MainContainer} from './styles/appStyles'

function App() {
  return (
    <>
      <Header/>
      <MainContainer>
        <AppRouter/>
      </MainContainer>
    </>
  )
}

export default App
