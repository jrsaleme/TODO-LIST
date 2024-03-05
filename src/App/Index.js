import React, { useState, useSyncExternalStore } from 'react';
import { AppUi } from './AppUi.js';
import { TodoProvider } from '../TodoContext/Index.js';


function App() {

  return (
    <TodoProvider>
      <AppUi />
    </TodoProvider>
  );
      }

export default App;
