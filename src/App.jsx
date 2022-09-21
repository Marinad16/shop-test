import './app.css';
import Header from './components/header/Header'
import Menu from './components/menu/Menu'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <div className="wrapper">
        <Menu />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
