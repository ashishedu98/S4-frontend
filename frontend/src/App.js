import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/navbar/navbar.js';
import {BrowserRouter,Route} from 'react-router-dom';
import HomePage from './components/home/home.js'
import RecognitionPage from './components/Recognition/Recognition.js'
import RecordsPage from './components/Records/Records.js'
import ProfilePage from './components/Profile/Profile.js'
import CapturePage from './components/Capture/Capture.jsx'


function App() {
  return (
    <div className="App" >
      <BrowserRouter>
        <NavigationBar/>
        <Route path="/home" component={HomePage} exact />
        <Route path="/Recognition" component={RecognitionPage} exact />
        <Route path="/Records" component={RecordsPage} exact />
        <Route path="/Profile" component={ProfilePage} exact />
        <Route path="/Capture" component={CapturePage} exact />
        </BrowserRouter>
    </div>
  );
}

export default App;
