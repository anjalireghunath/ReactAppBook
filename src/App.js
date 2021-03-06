import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddBook from './components/AddBook';
import ViewBook from './components/ViewBook';

function App() {
  return (
    <div>
<BrowserRouter>
<Routes>
  <Route path='/' exact element={<Login/>}/>
<Route path='/register' exact element={<Register/>}/>
<Route path='/add' exact element={<AddBook/>}/>
<Route path='/view' exact element={<ViewBook/>}/>
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
