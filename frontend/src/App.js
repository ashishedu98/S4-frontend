import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/navbar/navbar.js';
import {BrowserRouter,Route} from 'react-router-dom';
import HomePage from './components/home/home.js'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar/>
        <Route path="/home" component={HomePage} exact />
        </BrowserRouter>
    </div>
  );
}

export default App;
