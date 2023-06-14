import './App.css';
import { Profile } from './Profile';
import { Login } from './login';
import { ProfileDetails} from './ProfileDetails'

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" index element={<Login />} />
          <Route path="/profile" index element={<Profile />} />
          <Route path="/profile/:id" element={<ProfileDetails />} />
        </Routes>
      
      </div>
  );
}

export default App;
