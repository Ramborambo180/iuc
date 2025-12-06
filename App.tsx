import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './screens/Login';
import Chat from './screens/Chat';
import Announcements from './screens/Announcements';
import TeacherDashboard from './screens/TeacherDashboard';
import Feedback from './screens/Feedback';
import StudentList from './screens/StudentList';
import Timetable from './screens/Timetable';
import StudentPortal from './screens/StudentPortal';
import UserManagement from './screens/UserManagement';
import Settings from './screens/Settings';
import AdminDashboard from './screens/AdminDashboard';
import Layout from './components/Layout';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        {/* Admin Routes */}
        <Route path="/admin" element={<Layout role="admin" />}>
          <Route index element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="students" element={<StudentList />} />
          <Route path="users" element={<UserManagement />} />
          <Route path="settings" element={<Settings />} />
          <Route path="chat" element={<Chat />} />
          <Route path="announcements" element={<Announcements />} />
        </Route>

        {/* Teacher Routes */}
        <Route path="/teacher" element={<Layout role="teacher" />}>
          <Route index element={<Navigate to="/teacher/dashboard" replace />} />
          <Route path="dashboard" element={<TeacherDashboard />} />
          <Route path="timetable" element={<Timetable />} />
          <Route path="chat" element={<Chat />} />
        </Route>

        {/* Student Routes */}
        <Route path="/student" element={<Layout role="student" />}>
          <Route index element={<Navigate to="/student/dashboard" replace />} />
          <Route path="dashboard" element={<StudentPortal />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="timetable" element={<Timetable />} />
          <Route path="chat" element={<Chat />} />
          <Route path="announcements" element={<Announcements />} />
        </Route>

        {/* Default Redirect */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </HashRouter>
  );
};

export default App;