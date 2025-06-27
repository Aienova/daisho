import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import './App.scss';
import { AddItems } from './methods/AddItems';
import PageBuilder from './components/PageBuilder';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WebsiteView from './components/WebsiteView';
import { SavePageBuilder } from './methods/SavePageBuild';


function App() {
    useEffect(() => {
    AddItems();
    SavePageBuilder();
  }, []);

  return (
    <Router>
      <main>
        <Helmet></Helmet>
        <Routes>
          <Route path="/" element={<WebsiteView />} />
          <Route path="/origami/page-builder" element={<PageBuilder />} />
          {/* Ajoute d'autres routes ici si besoin */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;