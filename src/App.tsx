import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  Redirect
} from "react-router-dom";

import { StoreProvider } from './context/store/store';
import Test from './components/Test';
import { UserProvider, useUser } from './context/user';

function Home() {
  return <h2>Home</h2>;
}

function Admin() {
  return <h2>Admin</h2>;
}

function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

function PrivateRoute({ children, ...rest }: any) {
  const { user } = useUser();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.isConnected === true ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
      }
    />
  );
}

const App: React.FC = () => {
  return (
    <Router>
      <StoreProvider>
        <UserProvider>
          <Switch>
            <Route path="/about">
              <Test />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <PrivateRoute path="/admin">
              <Admin />
            </PrivateRoute>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </UserProvider>
      </StoreProvider>
    </Router>
  );
}

export default App;
