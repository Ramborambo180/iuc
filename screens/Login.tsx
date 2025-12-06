import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState('admin');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (role === 'admin') navigate('/admin/dashboard');
    if (role === 'teacher') navigate('/teacher/dashboard');
    if (role === 'student') navigate('/student/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-light p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
            IUC
          </div>
          <h1 className="text-3xl font-black text-gray-900 mb-2">Bienvenue !</h1>
          <p className="text-gray-500">Connectez-vous à votre compte IUC</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Role (Demo Selection)</label>
            <select 
                value={role} 
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            >
                <option value="admin">Administrateur</option>
                <option value="teacher">Enseignant</option>
                <option value="student">Étudiant</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email / Nom d'utilisateur</label>
            <input 
              type="text" 
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
              placeholder="admin@iuc.com"
              defaultValue="admin@iuc.com"
            />
          </div>

          <div>
            <div className="flex justify-between mb-2">
                <label className="block text-sm font-medium text-gray-700">Mot de passe</label>
            </div>
            <div className="relative">
                <input 
                type="password" 
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                placeholder="••••••••"
                defaultValue="password"
                />
                <button type="button" className="absolute right-3 top-3 text-gray-400">
                    <span className="material-symbols-outlined text-[20px]">visibility</span>
                </button>
            </div>
            <div className="flex justify-end mt-2">
                 <a href="#" className="text-sm text-primary hover:underline">Mot de passe oublié ?</a>
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3.5 rounded-lg transition-colors shadow-lg shadow-primary/30"
          >
            Se Connecter
          </button>
        </form>

        <p className="text-center mt-8 text-gray-600 text-sm">
          Pas encore de compte ? <a href="#" className="text-primary font-bold hover:underline">Inscrivez-vous</a>
        </p>
      </div>
    </div>
  );
};

export default Login;