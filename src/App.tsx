import React from 'react';
import './App.css';
import { StoreProvider } from './context/store/store';
import Test from './components/Test';
import { UserProvider } from './context/user';

const App: React.FC = () => {
  return (
    <StoreProvider>
      <UserProvider>
        <Test></Test>
      </UserProvider>
    </StoreProvider>
  );
}

export default App;
