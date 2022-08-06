import { Header } from './layouts/Header/Header'
import { Title } from './components/Title/Title'
import { SearchBar } from './components/SearchBar/SearchBar'
import { Informations } from './components/Informations/Informations'
import { Map } from './components/Map/Map'

const App = () => {
  return (
    <>
      <Header>
        <Title>IP Address Tracker</Title>
        <SearchBar />
      </Header>
      <Informations />
      <Map />
    </>
  )
}

export default App
