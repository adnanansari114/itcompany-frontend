import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, useLocation, Navigate } from 'react-router-dom';

// Pages
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Service from './pages/Services/Service.jsx';
import Contact from './pages/Contact.jsx';
import AboutUs from './pages/About/AboutUs.jsx';
import WebAppDevelopment from './pages/Services/WebAppDevelopment.jsx';
import StaffAugmentation from './pages/Services/StaffAugmentation.jsx';
import MaintenanceSupport from './pages/Services/MaintenanceSupport.jsx';
import DataEngineering from './pages/Services/DataEngineering.jsx';
import CloudDevops from './pages/Services/CloudDevops.jsx';
import ArtificialIntelligence from './pages/Services/ArtificialIntelligence.jsx';
import Careers from './pages/About/Careers.jsx';
import JobApply from "./pages/About/JobApply";
import LeadershipTeam from './pages/About/LeadershipTeam.jsx';
import BlogPage from './pages/About/BlogPage.jsx';
import SubBlog from './pages/About/SubBlog.jsx';
import SubBlogTwo from './pages/About/SubBlogTwo.jsx';
import SubBlogThree from './pages/About/SubBlogThree.jsx';

// Admin Components
import AdminLogin from './admin/AdminLogin.jsx';
import AdminDashboard from './admin/AdminDashboard.jsx';
import AddJob from './admin/AddJob.jsx';
import AdminContacts from './admin/AdminContacts.jsx';
import AdminApplications from './admin/AdminApplication.jsx';
import AdminNavbar from './admin/AdminNavbar.jsx';
import AdminJobs from './admin/AdminJobs.jsx';
import EditJob from './admin/EditJob.jsx';
import AdminComments from './admin/AdminComments.jsx';
import AddBlog from './admin/AddBlog.jsx';
import EditBlog from './admin/EditBlog.jsx';

// Protected Route Component
const ProtectedAdminRoute = ({ children }) => {
  const token = localStorage.getItem('adminToken') || sessionStorage.getItem('adminToken');
  
  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

// Admin Layout
const AdminLayout = () => {
  return (
    <>
      <AdminNavbar />
      <Routes>
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/addjob" element={<AddJob />} />
        <Route path="/adminapplicaion" element={<AdminApplications />} />
        <Route path="/admincontact" element={<AdminContacts />} />
        <Route path="jobs" element={<AdminJobs />} />
        <Route path="/editjob/:id" element={<EditJob />} />
        <Route path="/comments" element={<AdminComments />} />
        <Route path="/addblog" element={<AddBlog />} />
        <Route path="/editblog" element={<EditBlog />} />
      </Routes>
    </>
  );
};

// Public Layout (Main Website)
const PublicLayout = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <Navbar isHome={isHome} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/service' element={<Service />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path="/staff-augmentation" element={<StaffAugmentation />} />
        <Route path='/webappdevelopment' element={<WebAppDevelopment />} />
        <Route path='/maintenanceSupport' element={<MaintenanceSupport />} />
        <Route path='/dataengineering' element={<DataEngineering />} />
        <Route path='/clouddevops' element={<CloudDevops />} />
        <Route path='/artificialintelligence' element={<ArtificialIntelligence />} />
        <Route path='/careers' element={<Careers />} />
        <Route path="/jobapply/:id" element={<JobApply />} />
        <Route path="/leadershipteam" element={<LeadershipTeam />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/subblog" element={<SubBlog />} />
        <Route path="/subblogtwo" element={<SubBlogTwo />} />
        <Route path="/subblogthree" element={<SubBlogThree />} />
      </Routes>
      {!location.pathname.startsWith('/admin') && <Footer />}
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/*" element={<PublicLayout />} />

        {/* Admin Login Route (Public - but redirects if already logged in) */}
        <Route 
          path="/admin/login" 
          element={
            localStorage.getItem('adminToken') || sessionStorage.getItem('adminToken')
              ? <Navigate to="/admin/dashboard" replace />
              : <AdminLogin />
          } 
        />

        {/* Protected Admin Routes */}
        <Route 
          path="/admin/*" 
          element={
            <ProtectedAdminRoute>
              <AdminLayout />
            </ProtectedAdminRoute>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;