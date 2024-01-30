import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/layout/navbar/NavigationBar';
import Content from './components/layout/content/Content';
import Footer from './components/layout/footer/Footer';


function App() {
  return (
    <div className="App">
      <header className="App-header">    
        <NavigationBar/>
      </header>
        <Content/>
    </div>
  );
}

export default App;
