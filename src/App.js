import './App.css';
import Login from './Components/Login'
import Chats from './Components/Chats'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './Contexts/AuthContext'
import ProtectRoutes from './Components/ProtectRoutes';

// muhammad.omair235@gmail.com

function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path='/' component={Login} />
            {/* PROTECTED ROUTES */}
            <Route exact path='/chats' >
              <ProtectRoutes Component={Chats} />
            </Route>
            {/* PROTECTED ROUTES */}
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
