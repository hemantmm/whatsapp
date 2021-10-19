import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Navbar from './Navbar';
import Navbar1 from './Navbar1';
import Chats from './Chats';
import Status from './Status';
import Calls from './Calls';
import ImageComponent from './ImageComponent';

function App() {
  return (
    <Router>
      <div className="App1">
    <Navbar />
      </div>

      <div className="App2">
    <Navbar1 />
      </div>

      <div className="content">
        <Switch>

          <Route exact path='/'>
        <Chats />
        </Route>
        
          <Route path='/status'>
         <Status />
        </Route>


          <Route path='/calls'>
         <Calls />
        </Route>

        <ImageComponent />

{/* 
        <Route path='/index1'>
         <index1 />
        </Route> */}

        </Switch>
      </div>
    </Router>
  );
}

export default App;
