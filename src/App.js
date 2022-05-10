import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Page Container/Home/Home';
import Login from './Page Container/Login/Login';
import Registration from './Page Container/Registration/Registration';
import NotFound from './Page Container/NotFound/NotFound';
import Gadget from './Page Container/Gadget/Gadget';
import RequireAuth from './Page Container/RequireAuth/RequireAuth';
import Gadgets from './Page Container/Gadgets/Gadgets';
import Blogs from './Page Container/Blogs/Blogs';

function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/gadgets/:id"
          element={
            <RequireAuth>
              <Gadget></Gadget>
            </RequireAuth>
          }
        />
        <Route path="/gadgets" element={<Gadgets />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
