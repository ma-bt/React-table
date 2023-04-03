import React from 'react';
import { Suspense } from 'react';
import { Spinner } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './routes';

import './App.css';

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        {routes.map((d) => {
          return <Route path={d.path} element={d.element} />
        })}

      </Routes>


    </Suspense>
  );
}

export default App;
