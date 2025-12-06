import React from 'react';

const StudentPortal: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-black text-gray-900">Bon retour, Élodie!</h1>
        <p className="text-gray-500 mt-1">Voici un résumé de votre progression académique et des événements à venir.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
            
            {/* Profile Summary */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                <div className="px-6 py-4 border-b border-gray-200 font-bold text-lg">Résumé du Profil</div>
                <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div>
                        <p className="text-gray-500">Programme d'études</p>
                        <p className="font-semibold text-gray-900">Informatique</p>
                    </div>
                    <div>
                        <p className="text-gray-500">Conseiller Pédagogique</p>
                        <p className="font-semibold text-gray-900">Dr. Alain Nogue</p>
                    </div>
                    <div>
                        <p className="text-gray-500">Niveau Actuel</p>
                        <p className="font-semibold text-gray-900">Année 3 / Licence 3</p>
                    </div>
                    <div>
                        <p className="text-gray-500">Statut</p>
                        <p className="font-semibold text-green-600">Actif</p>
                    </div>
                </div>
            </div>

            {/* Grades */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                <div className="px-6 py-4 border-b border-gray-200 font-bold text-lg flex justify-between items-center">
                    Notes Récentes
                    <button className="text-primary text-sm font-medium hover:underline">Voir tout</button>
                </div>
                <div className="p-4">
                    <table className="w-full text-sm">
                        <thead className="text-xs text-gray-500 uppercase">
                            <tr>
                                <th className="text-left px-4 py-2">Cours</th>
                                <th className="text-left px-4 py-2">Évaluation</th>
                                <th className="text-right px-4 py-2">Note</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            <tr>
                                <td className="px-4 py-3 font-medium">Algorithmes Avancés</td>
                                <td className="px-4 py-3 text-gray-500">Examen Final</td>
                                <td className="px-4 py-3 text-right font-bold">16.5/20</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3 font-medium">Bases de Données</td>
                                <td className="px-4 py-3 text-gray-500">Projet Semestriel</td>
                                <td className="px-4 py-3 text-right font-bold">18/20</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3 font-medium">Réseaux Informatiques</td>
                                <td className="px-4 py-3 text-gray-500">Contrôle Continu 2</td>
                                <td className="px-4 py-3 text-right font-bold">14/20</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Bulletins */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                <div className="px-6 py-4 border-b border-gray-200 font-bold text-lg">Bulletins de Notes</div>
                <div className="divide-y divide-gray-100">
                    <div className="px-6 py-4 flex justify-between items-center hover:bg-gray-50">
                        <div>
                            <p className="font-medium text-sm">Bulletin Semestre 1 - 2023-2024</p>
                            <p className="text-xs text-gray-400">Disponible en PDF</p>
                        </div>
                        <button className="text-primary text-sm font-medium flex items-center gap-1 hover:underline">
                            <span className="material-symbols-outlined text-[18px]">download</span> Télécharger
                        </button>
                    </div>
                    <div className="px-6 py-4 flex justify-between items-center hover:bg-gray-50">
                        <div>
                            <p className="font-medium text-sm">Bulletin Semestre 2 - 2022-2023</p>
                            <p className="text-xs text-gray-400">Disponible en PDF</p>
                        </div>
                        <button className="text-primary text-sm font-medium flex items-center gap-1 hover:underline">
                            <span className="material-symbols-outlined text-[18px]">download</span> Télécharger
                        </button>
                    </div>
                </div>
            </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
            {/* Financial */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="font-bold text-lg mb-4">Résumé Financier</h2>
                <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                        <span className="text-gray-500">Solde Total</span>
                        <span className="font-bold">1,250,000 F CFA</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-500">Montant Payé</span>
                        <span className="font-medium text-green-600">750,000 F CFA</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                    <div className="flex justify-between items-center bg-red-50 p-3 rounded-lg border border-red-100 mt-2">
                         <span className="text-red-700 font-medium">Solde Restant</span>
                         <span className="font-bold text-red-800 text-lg">500,000 F CFA</span>
                    </div>
                    <p className="text-xs text-center text-gray-400 mt-2">Prochaine échéance: 31 Mars 2024</p>
                    <button className="w-full bg-primary text-white py-2 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-primary-dark transition-colors">
                        <span className="material-symbols-outlined text-[18px]">credit_card</span> Payer maintenant
                    </button>
                </div>
            </div>

            {/* Today's Schedule */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                <div className="px-6 py-4 border-b border-gray-200 font-bold text-lg">Emploi du temps (Aujourd'hui)</div>
                <div className="divide-y divide-gray-100 p-2">
                    <div className="p-3 hover:bg-gray-50 rounded-lg flex gap-4">
                        <div className="text-center w-12 flex-shrink-0">
                            <p className="font-bold text-primary">08:00</p>
                            <p className="text-xs text-gray-400">- 10:00</p>
                        </div>
                        <div className="border-l-2 border-primary pl-3">
                            <p className="font-semibold text-sm">Systèmes d'exploitation</p>
                            <p className="text-xs text-gray-500 mt-0.5 flex items-center gap-1">
                                <span className="material-symbols-outlined text-[14px]">location_on</span> Salle B102
                            </p>
                        </div>
                    </div>
                    <div className="p-3 hover:bg-gray-50 rounded-lg flex gap-4">
                        <div className="text-center w-12 flex-shrink-0">
                            <p className="font-bold text-accent">13:30</p>
                            <p className="text-xs text-gray-400">- 15:30</p>
                        </div>
                        <div className="border-l-2 border-accent pl-3">
                            <p className="font-semibold text-sm">Anglais des affaires</p>
                            <p className="text-xs text-gray-500 mt-0.5 flex items-center gap-1">
                                <span className="material-symbols-outlined text-[14px]">location_on</span> Amphi 300
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default StudentPortal;