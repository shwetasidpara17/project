import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Layout from "./Layout";
import GroceryForm from './GroceryForm';
import GroceryList from './GroceryList';
import ProfitLoss from './ProfitLoss';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <BrowserRouter>
    <Routes>
     <Route path="/" element={<Layout/ >}>
     <Route path='/Grocery' element={<GroceryList />} />
     <Route path="/Grocery/add" element={<GroceryForm/>}/>
     <Route path="/Grocery/profit/loss" element={<ProfitLoss/>}/> 

     </Route>
    </Routes>
  </BrowserRouter>
</>
);