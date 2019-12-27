import React from 'react';
import './App.css';
import 'antd/dist/antd.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  Redirect
} from "react-router-dom";

import { StoreProvider } from './context/store/store';
import { UserProvider, useUser } from './context/user';
import Layout from './components/Layout';
import Login from './pages/LoginPage';
import TeamPage from './pages/TeamPage';
import ListPage from './pages/ListPage';


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
          <Layout >
            <Switch>
              <PrivateRoute exact path="/">
                <TeamPage />
              </PrivateRoute>
              <PrivateRoute exact path="/team/:idTeam">
                <ListPage />
              </PrivateRoute>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="*">
                <NoMatch />
              </Route>
            </Switch>
          </Layout>
        </UserProvider>
      </StoreProvider>
    </Router>
  );
}

export default App;
