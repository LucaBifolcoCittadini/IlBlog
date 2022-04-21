
import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import PostsCard from './components/posts-card/PostsCard';
import CategoriesList from './components/categories-list/CategoriesList';

function App() {
  return (
    <div>
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
