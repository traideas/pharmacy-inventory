import { Routes, Route } from 'react-router-dom';

//layouts
import PharamacistLayout from './layouts/pharmacist/PharamacistLayout';
import PatientLayout from './layouts/patient/PatientLayout.js';

//public pages
import Login from './pages/publicPages/auth/Login';
import PublicHome from './components/publicHome/PublicHome.js';

//pharmachist private pages
import PharmachistHomePage from './pages/privatePages/pharmachist/PharmachistHomePage.js';
import Medicine from './pages/privatePages/pharmachist/medicine/index.js';
import Patient from './pages/privatePages/pharmachist/patient/index.js';

//patient private pages
import PatientHomePage from './pages/privatePages/patient/PatientHomePage.js';

function App() {
  return (
    <>
      <Routes>
        {/* public pages start */}
        <Route path="/" element={<PublicHome />} />
        <Route path="/auth" element={<Login />} />
        {/* public pages end */}

        {/* Pharmachist layout start */}
        <Route element={<PharamacistLayout />}>
          <Route path="/pharma/home" element={<PharmachistHomePage />} />
          <Route path="/pharma/medicine-list" element={<Medicine />} />
          <Route path="/pharma/patient-list" element={<Patient />} />
        </Route>
        {/* Pharmachist layout end */}

        {/* Patient layout start */}
        <Route element={<PatientLayout />}>
          <Route path="/patient/home" element={<PatientHomePage />} />
        </Route>
        {/* Patient layout end */}
      </Routes>
    </>
  );
}

export default App;
