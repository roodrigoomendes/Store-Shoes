
import Banner from './components/banner'
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
        <Banner />
      </header>
      <main>
        <Contents />
      </main>
      <footer>
<Endpage  />
      </footer>
    </>

  )
}

export default App
