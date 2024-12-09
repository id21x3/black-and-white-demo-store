import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from './pages/HomePage';

const App: React.FC = () => {
    return (
        <Router>
            <HomePage />
        </Router>
    );
};

export default App;
