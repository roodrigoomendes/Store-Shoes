import Advertising from './components/Advertising'
import Contents from './components/Contents'
import Endpage from './components/Endpage'
import NameLogo from './components/NameLogo'
import Promotion from './components/Promotion'
import './index.css'

function App() {
  return (

    <>
      <header>
        <Promotion />
        <NameLogo />
      </header>
      <main>
        <Advertising />
        <Contents />
      </main>
      <footer>
        <Endpage />
      </footer>
    </>

  )
}

export default App
