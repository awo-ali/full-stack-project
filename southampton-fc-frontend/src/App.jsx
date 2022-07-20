
import './App.scss';
import Home from './container/Home/Home';
import Navbar from './container/Navbar/Navbar';

const App = () => {
  return (
    <div className="app">
    <Navbar/>
    <Home/>
    </div>
  );
}

export default App;
