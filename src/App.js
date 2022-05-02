import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Page Container/Home/Home';
import Login from './Page Container/Login/Login';
import Registration from './Page Container/Registration/Registration';
import NotFound from './Page Container/NotFound/NotFound';

function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
