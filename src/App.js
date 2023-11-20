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
import AuthContextProvider from './context/authContext/AuthContextProvider.js';
import PrivateRoute from './utils/PrivateRoute.js';
import PatientMedicineListTable from './components/patient/medicine/table/PatientMedicineListTable.js';

function App() {
  return (
    <>
      <AuthContextProvider>
        <Routes>
          {/* public pages start */}
          <Route path="/" element={<PublicHome />} />
          <Route path="/auth" element={<Login />} />
          {/* public pages end */}

          <Route element={<PrivateRoute />}>
            {/* Pharmachist layout start */}
            <Route element={<PharamacistLayout />}>
              <Route path="/pharma/home" element={<PharmachistHomePage />} />
              <Route path="/pharma/medicine-list/:id" element={<Medicine />} />
              <Route path="/pharma/patient-list/:id" element={<Patient />} />
            </Route>
            {/* Pharmachist layout end */}

            {/* Patient layout start */}
            <Route element={<PatientLayout />}>
              <Route path="/patient/home" element={<PatientHomePage />} />
              <Route
                path="/patient/medicine-list"
                element={<PatientMedicineListTable />}
              />
            </Route>
            {/* Patient layout end */}
          </Route>
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
