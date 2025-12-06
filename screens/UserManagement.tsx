import React from 'react';

const UserManagement: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-black text-gray-900">Gestion des Utilisateurs</h1>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        {/* Toolbar */}
        <div className="p-4 border-b border-gray-200 flex flex-col md:flex-row gap-4 justify-between">
            <div className="relative flex-1 max-w-md">
                <span className="material-symbols-outlined absolute left-3 top-2.5 text-gray-400">search</span>
                <input type="text" placeholder="Rechercher par nom ou e-mail..." className="w-full pl-10 pr-4 py-2 bg-gray-50 border-none rounded-lg focus:ring-2 focus:ring-primary/50" />
            </div>
            <div className="flex gap-2">
                <button className="px-4 py-2 bg-gray-50 text-gray-700 font-medium rounded-lg flex items-center gap-2 hover:bg-gray-100">
                    Filtrer par rôle <span className="material-symbols-outlined text-[18px]">expand_more</span>
                </button>
                <button className="px-4 py-2 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">add</span> Ajouter un utilisateur
                </button>
            </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
                <thead className="bg-gray-50 text-gray-500 uppercase font-semibold text-xs">
                    <tr>
                        <th className="px-6 py-3">Nom</th>
                        <th className="px-6 py-3">E-mail</th>
                        <th className="px-6 py-3">Rôle</th>
                        <th className="px-6 py-3">Date de Création</th>
                        <th className="px-6 py-3">Statut</th>
                        <th className="px-6 py-3 text-right">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {[
                        { name: 'Jean Dupont', email: 'jean.dupont@iuc.com', role: 'Administrateur', roleColor: 'blue', date: '12/01/2023', status: 'Actif', statusColor: 'green' },
                        { name: 'Marie Curie', email: 'marie.curie@iuc.com', role: 'Enseignant', roleColor: 'purple', date: '05/09/2022', status: 'Actif', statusColor: 'green' },
                        { name: 'Pierre Martin', email: 'pierre.martin@iuc.com', role: 'Enseignant', roleColor: 'purple', date: '23/04/2021', status: 'Inactif', statusColor: 'yellow' },
                        { name: 'Sophie Leroy', email: 'sophie.leroy@iuc.com', role: 'Super Admin', roleColor: 'yellow', date: '10/03/2020', status: 'Actif', statusColor: 'green' },
                    ].map((user, idx) => (
                        <tr key={idx} className="hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4 font-medium text-gray-900">{user.name}</td>
                            <td className="px-6 py-4 text-gray-500">{user.email}</td>
                            <td className="px-6 py-4">
                                <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-${user.roleColor === 'yellow' ? 'yellow-100 text-yellow-800' : user.roleColor === 'blue' ? 'blue-100 text-blue-800' : 'purple-100 text-purple-800'}`}>
                                    {user.role}
                                </span>
                            </td>
                            <td className="px-6 py-4 text-gray-500">{user.date}</td>
                            <td className="px-6 py-4">
                                <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${user.status === 'Actif' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                    {user.status}
                                </span>
                            </td>
                            <td className="px-6 py-4 text-right">
                                <div className="flex justify-end gap-2">
                                    <button className="p-1.5 text-gray-400 hover:text-primary rounded"><span className="material-symbols-outlined text-[18px]">edit</span></button>
                                    <button className="p-1.5 text-gray-400 hover:text-red-500 rounded"><span className="material-symbols-outlined text-[18px]">delete</span></button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-200 flex justify-between items-center text-sm text-gray-500">
            <span>Affiche 1-4 sur 12 résultats</span>
            <div className="flex gap-2">
                <button className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded hover:bg-gray-50"><span className="material-symbols-outlined text-sm">chevron_left</span></button>
                <button className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded hover:bg-gray-50"><span className="material-symbols-outlined text-sm">chevron_right</span></button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;