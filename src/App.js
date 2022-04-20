
import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import PostsCard from './components/posts-card/PostsCard';

function App() {
  return (
    <div className="App container">
      <header>
        <Navbar />
      </header>
        <PostsCard />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
