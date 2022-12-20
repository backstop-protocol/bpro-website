import '@picocss/pico'
import './App.css'
import Header from './sections/Header'
import First from './sections/First'
import Pythia from './sections/Pythia'
import Backstop from './sections/Backstop'
import RiskDao from './sections/RiskDao'
import BackedBy from './sections/BackedBy'
import Footer from './sections/Footer'

function App() {
  return (
    <div className="App">
        <main className="container">
          <Header/>
          <First/>
          <Pythia/>
          <Backstop/>
          <RiskDao/>
          <BackedBy/>
        </main>
        <Footer/>
    </div>
  );
}

export default App;
