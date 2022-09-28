import './App.css'
import Container from './components/Container'
import AppProvider from './hooks';


function App() {
  return (
    <AppProvider>
      <Container/>
    </AppProvider>
  )
}

export default App;
