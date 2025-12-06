import React from 'react';
import { Outlet, NavLink, useLocation, useNavigate } from 'react-router-dom';

interface LayoutProps {
  role: 'admin' | 'teacher' | 'student';
}

const Layout: React.FC<LayoutProps> = ({ role }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const getMenuItems = () => {
    switch (role) {
      case 'admin':
        return [
          { icon: 'dashboard', label: 'Tableau de bord', path: '/admin/dashboard' },
          { icon: 'group', label: 'Étudiants', path: '/admin/students' },
          { icon: 'manage_accounts', label: 'Utilisateurs', path: '/admin/users' },
          { icon: 'campaign', label: 'Annonces', path: '/admin/announcements' },
          { icon: 'chat_bubble', label: 'Chat', path: '/admin/chat' },
          { icon: 'settings', label: 'Paramètres', path: '/admin/settings' },
        ];
      case 'teacher':
        return [
          { icon: 'dashboard', label: 'Tableau de bord', path: '/teacher/dashboard' },
          { icon: 'calendar_month', label: 'Emploi du temps', path: '/teacher/timetable' },
          { icon: 'chat_bubble', label: 'Chat', path: '/teacher/chat' },
        ];
      case 'student':
        return [
          { icon: 'dashboard', label: 'Tableau de bord', path: '/student/dashboard' },
          { icon: 'calendar_month', label: 'Emploi du temps', path: '/student/timetable' },
          { icon: 'campaign', label: 'Annonces', path: '/student/announcements' },
          { icon: 'chat_bubble', label: 'Feedback', path: '/student/feedback' },
          { icon: 'forum', label: 'Chat', path: '/student/chat' },
        ];
      default:
        return [];
    }
  };

  const getTitle = () => {
    const path = location.pathname.split('/').pop();
    switch(path) {
        case 'dashboard': return 'Tableau de Bord';
        case 'students': return 'Gestion des Étudiants';
        case 'users': return 'Gestion des Utilisateurs';
        case 'settings': return 'Paramètres Système';
        case 'chat': return 'Messages';
        case 'announcements': return "Tableau d'Annonces";
        case 'timetable': return 'Emploi du temps';
        case 'feedback': return 'Portail de Feedback';
        default: return 'IUC Portal';
    }
  };

  return (
    <div className="flex h-screen bg-bg-light overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col flex-shrink-0 z-20">
        <div className="p-6 flex items-center gap-3 border-b border-gray-100">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">
                IUC
            </div>
          <div>
            <h1 className="text-lg font-bold text-gray-800">IUC Portal</h1>
            <p className="text-xs text-gray-500 capitalize">{role}</p>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          {getMenuItems().map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-primary/10 text-primary font-medium'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`
              }
            >
              <span className={`material-symbols-outlined ${location.pathname === item.path ? 'fill' : ''}`}>
                {item.icon}
              </span>
              <span className="text-sm">{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-100">
          <button 
            onClick={() => navigate('/login')}
            className="flex items-center gap-3 px-3 py-2.5 w-full rounded-lg text-gray-600 hover:bg-red-50 hover:text-red-600 transition-colors"
          >
            <span className="material-symbols-outlined">logout</span>
            <span className="text-sm font-medium">Déconnexion</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header */}
        <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-8 flex-shrink-0 z-10">
          <h2 className="text-xl font-bold text-gray-800">{getTitle()}</h2>
          
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
                <span className="material-symbols-outlined absolute left-3 top-2.5 text-gray-400 text-[20px]">search</span>
                <input 
                    type="text" 
                    placeholder="Rechercher..." 
                    className="pl-10 pr-4 py-2 bg-gray-100 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary/50 w-64"
                />
            </div>
            <button className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-full">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full border border-white"></span>
            </button>
            <div className="w-9 h-9 rounded-full bg-gray-200 bg-[url('https://i.pravatar.cc/150?img=12')] bg-cover bg-center border border-gray-200"></div>
          </div>
        </header>

        {/* Page Scroll Area */}
        <main className="flex-1 overflow-y-auto p-8">
            <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;