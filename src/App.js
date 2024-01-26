import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './index.css'


function App() {
  return (
    <div className="App">
      <Header /> 
        <div className="links">
          <a href="https://github.com/JasonKulak">Jason's github</a>
          <a href="https://www.linkedin.com/in/jason-kulak-2330b42a4/">Jason's LinkedIn</a>
        </div>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
