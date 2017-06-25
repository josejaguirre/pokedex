import React from 'react';


import PokedexList from '../components/PokedexList';
import PokedexDetail from '../components/PokedexDetail';

const PanelLayout = (...props) => (
  <div className="row">
    <PokedexDetail {...props} />
    <PokedexList />
  </div>
);

export default PanelLayout;
