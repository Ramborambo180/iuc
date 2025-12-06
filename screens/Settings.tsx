import React from 'react';

const Settings: React.FC = () => {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-black text-gray-900">Paramètres Système</h1>
      
      {/* Language Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-bold text-gray-900">Langue et Région</h2>
            <p className="text-gray-500 text-sm mt-1">Choisissez la langue d'affichage de l'application.</p>
        </div>
        <div className="p-6">
            <div className="max-w-xs">
                <label className="block text-sm font-medium text-gray-700 mb-2">Langue</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-primary/50 outline-none">
                    <option>Français</option>
                    <option>English</option>
                </select>
            </div>
        </div>
        <div className="p-4 bg-gray-50 border-t border-gray-200 flex justify-end">
            <button className="bg-primary text-white font-medium px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors">
                Sauvegarder les modifications
            </button>
        </div>
      </div>

      {/* Roles Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
            <div>
                <h2 className="text-lg font-bold text-gray-900">Gestion des Rôles et Permissions</h2>
                <p className="text-gray-500 text-sm mt-1">Gérez les rôles des utilisateurs et leurs permissions associées.</p>
            </div>
            <button className="bg-primary text-white font-medium px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">add</span> Ajouter un nouveau rôle
            </button>
        </div>
        <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
                <thead className="bg-gray-50 text-gray-500 uppercase font-semibold text-xs">
                    <tr>
                        <th className="px-6 py-3">Nom du Rôle</th>
                        <th className="px-6 py-3">Description</th>
                        <th className="px-6 py-3 text-center">Nombre d'utilisateurs</th>
                        <th className="px-6 py-3 text-right">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {[
                        { name: 'Administrateur', desc: 'Accès complet à toutes les fonctionnalités.', count: 3 },
                        { name: 'Enseignant', desc: 'Gérer les cours, les notes et les présences.', count: 24 },
                        { name: 'Étudiant', desc: 'Consulter les notes, les cours et les notifications.', count: 452 },
                    ].map((role, idx) => (
                        <tr key={idx} className="hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4 font-medium text-gray-900">{role.name}</td>
                            <td className="px-6 py-4 text-gray-500">{role.desc}</td>
                            <td className="px-6 py-4 text-center">{role.count}</td>
                            <td className="px-6 py-4 text-right">
                                <div className="flex justify-end gap-2">
                                    <button className="text-primary hover:bg-primary/10 p-1.5 rounded"><span className="material-symbols-outlined text-[20px]">edit</span></button>
                                    <button className="text-red-500 hover:bg-red-50 p-1.5 rounded"><span className="material-symbols-outlined text-[20px]">delete</span></button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </div>
    </div>
  );
};

export default Settings;