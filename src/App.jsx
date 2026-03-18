import { Routes, Route, Outlet } from 'react-router-dom';

import Login from './pages/Login';
import Signup from './pages/Signup';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';

function App() {
  return (
    <ErrorBoundary>
      <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />


        <Route path="/freelancer-onboarding" element={<FreelancerOnboarding />} />


        {/* Fallback Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;