import { Route, Routes } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import HomePage from "./pages/HomePage";
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Register from './pages/Register';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashborad' element={<Dashboard />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
