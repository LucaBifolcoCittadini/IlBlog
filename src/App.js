import 'bootstrap/dist/js/bootstrap';

import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <footer>
        <Footer />
      </footer>
        
    </div>
  );
}

export default App;
