import { Routes, Route } from 'react-router-dom';
import Pharamacist from './layouts/pharmacist/Pharamacist.js';
import Login from './pages/publicPages/auth/Login';
import PublicHome from './components/publicHome/PublicHome.js';
import PrivateHomePage from './pages/privatePages/PrivateHomePage.js';
import Medicine from './pages/privatePages/medicine/index.js';
import Patient from './pages/privatePages/patient/index.js';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PublicHome />} />
        <Route path="/auth" element={<Login />} />
        <Route element={<Pharamacist />}>
          <Route path="/home" element={<PrivateHomePage />} />
          <Route path="/medicine-list" element={<Medicine />} />
          <Route path="/patient-list" element={<Patient />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
