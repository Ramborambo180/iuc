import React from 'react';

const StudentList: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Toolbar */}
      <div className="p-5 border-b border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 bg-white">
        <h2 className="text-2xl font-black text-gray-900">Gestion des Étudiants</h2>
        <div className="flex flex-wrap gap-2 items-center">
            <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 font-bold rounded-lg text-sm hover:bg-gray-50">Importer CSV</button>
            <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 font-bold rounded-lg text-sm hover:bg-gray-50">Exporter CSV</button>
            <button className="px-4 py-2 bg-primary text-white font-bold rounded-lg text-sm hover:bg-primary-dark flex items-center gap-1">
                <span className="material-symbols-outlined text-[18px]">add</span>
                Ajouter un étudiant
            </button>
        </div>
      </div>
      
      {/* Filters */}
      <div className="p-4 bg-gray-50 border-b border-gray-200 flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
            <span className="material-symbols-outlined absolute left-3 top-2.5 text-gray-400">search</span>
            <input type="text" placeholder="Rechercher par nom, matricule..." className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-1 focus:ring-primary focus:border-primary outline-none" />
        </div>
        <div className="flex gap-2">
            <select className="px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm outline-none"><option>Statut</option><option>Actif</option><option>Inactif</option></select>
            <select className="px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm outline-none"><option>Filière</option><option>Génie Logiciel</option><option>Biochimie</option></select>
            <select className="px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm outline-none"><option>Niveau d'étude</option><option>Licence 3</option></select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50 text-gray-600 uppercase text-xs font-semibold">
                <tr>
                    <th className="px-6 py-4">Étudiant</th>
                    <th className="px-6 py-4">Matricule</th>
                    <th className="px-6 py-4">Filière</th>
                    <th className="px-6 py-4">Niveau</th>
                    <th className="px-6 py-4 text-center">Statut</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
                {[
                    { name: 'Jean Dupont', email: 'jean.dupont@iuc.com', mat: 'IUC24001', major: 'Génie Logiciel', level: 'Licence 3', status: 'Actif', color: 'green', img: 'https://i.pravatar.cc/150?img=11' },
                    { name: 'Marie Curie', email: 'marie.curie@iuc.com', mat: 'IUC24002', major: 'Biochimie', level: 'Master 1', status: 'Actif', color: 'green', img: 'https://i.pravatar.cc/150?img=5' },
                    { name: 'Pierre Martin', email: 'pierre.martin@iuc.com', mat: 'IUC23054', major: 'Marketing Digital', level: 'Licence 2', status: 'Inactif', color: 'red', img: 'https://i.pravatar.cc/150?img=13' },
                    { name: 'Aïcha Diallo', email: 'aicha.diallo@iuc.com', mat: 'IUC22103', major: 'Réseaux et Télécoms', level: 'Licence 3', status: 'Diplômé', color: 'yellow', img: 'https://i.pravatar.cc/150?img=24' },
                ].map((student, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                                <img src={student.img} alt={student.name} className="w-10 h-10 rounded-full object-cover" />
                                <div>
                                    <div className="font-medium text-gray-900">{student.name}</div>
                                    <div className="text-xs text-gray-500">{student.email}</div>
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">{student.mat}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{student.major}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{student.level}</td>
                        <td className="px-6 py-4 text-center">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-${student.color}-100 text-${student.color}-800`}>
                                {student.status}
                            </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                            <div className="flex items-center justify-end gap-2">
                                <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg"><span className="material-symbols-outlined text-[20px]">visibility</span></button>
                                <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg"><span className="material-symbols-outlined text-[20px]">edit</span></button>
                                <button className="p-2 text-red-500 hover:bg-red-50 rounded-lg"><span className="material-symbols-outlined text-[20px]">delete</span></button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
      
      {/* Pagination */}
      <div className="px-6 py-4 border-t border-gray-200 flex justify-between items-center">
        <p className="text-sm text-gray-500">Page <span className="font-medium">1</span> sur <span className="font-medium">10</span></p>
        <div className="flex gap-2">
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-300 text-gray-500 disabled:opacity-50" disabled><span className="material-symbols-outlined text-sm">chevron_left</span></button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50"><span className="material-symbols-outlined text-sm">chevron_right</span></button>
        </div>
      </div>
    </div>
  );
};

export default StudentList;