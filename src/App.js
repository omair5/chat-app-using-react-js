import './App.css';
import Login from './Components/Login'
import Chats from './Components/Chats'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/chats' component={Chats} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
