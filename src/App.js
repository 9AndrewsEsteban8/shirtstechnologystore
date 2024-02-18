
import Footer from './Componets/Footer';
import Header from './Header';
import './App.css';
import Search_category from './Componets/Search_category';
import Nuestros from './Componets/Nuestros';

function App() {
  return (
    <div className="App">
      <Header/>
      <Nuestros/>
      <Search_category/>
      <Footer/>
    </div>
  );
}

export default App;
