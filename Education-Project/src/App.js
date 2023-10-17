import React from 'react';
import Router from './Router';
import Header from './component/Header';

export const App = () =>(
    <React.Fragment>
        <Header />
        <Router />
    </React.Fragment>
)

export default App;