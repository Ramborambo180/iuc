import React from 'react';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Fév', value: 600 },
  { name: 'Mar', value: 200 },
  { name: 'Avr', value: 700 },
  { name: 'Mai', value: 100 },
  { name: 'Juin', value: 800 },
];

const pieData = [
  { name: 'Payé', value: 65, color: '#00539C' },
  { name: 'En attente', value: 20, color: '#FFD700' },
  { name: 'En retard', value: 15, color: '#DC2626' },
];

const AdminDashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
            { label: 'Étudiants Inscrits', value: '1,234' },
            { label: 'Paiements en Attente', value: '56' },
            { label: 'Enseignants Actifs', value: '78' },
            { label: 'Frais de scolarité (mois)', value: '€85,900' },
        ].map((kpi, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <p className="text-gray-500 font-medium mb-1">{kpi.label}</p>
                <p className="text-3xl font-bold text-gray-900">{kpi.value}</p>
            </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <button className="bg-primary text-white font-bold py-2.5 px-4 rounded-lg flex items-center gap-2 hover:bg-primary-dark">
            <span className="material-symbols-outlined text-[20px]">add</span> Ajouter un étudiant
        </button>
        <button className="bg-white border border-gray-300 text-gray-700 font-bold py-2.5 px-4 rounded-lg flex items-center gap-2 hover:bg-gray-50">
            <span className="material-symbols-outlined text-[20px]">edit_note</span> Créer une annonce
        </button>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Line Chart */}
        <div className="lg:col-span-3 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h3 className="font-bold text-lg text-gray-900">Nouvelles Inscriptions</h3>
                    <p className="text-xs text-gray-500">6 derniers mois</p>
                </div>
                <div className="text-green-600 font-bold flex items-center text-sm">
                    <span className="material-symbols-outlined text-[18px]">trending_up</span> +12%
                </div>
            </div>
            <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <XAxis dataKey="name" axisLine={false} tickLine={false} stroke="#9CA3AF" fontSize={12} dy={10} />
                        <Tooltip />
                        <Line type="monotone" dataKey="value" stroke="#00539C" strokeWidth={3} dot={false} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>

        {/* Pie Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col items-center justify-center">
            <div className="w-full text-left mb-4">
                 <h3 className="font-bold text-lg text-gray-900">Statut des Paiements</h3>
                 <p className="text-xs text-gray-500">Ce trimestre</p>
            </div>
            <div className="h-48 w-48 relative">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={pieData}
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={0}
                            dataKey="value"
                            startAngle={90}
                            endAngle={-270}
                        >
                            {pieData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-bold text-gray-900">942</span>
                    <span className="text-xs text-gray-500">Total paiements</span>
                </div>
            </div>
            <div className="flex gap-4 mt-6">
                {pieData.map((entry, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }}></div>
                        <span className="text-xs font-medium text-gray-600">{entry.name} ({entry.value}%)</span>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
            <h3 className="font-bold text-lg text-gray-900">Activité Récente</h3>
        </div>
        <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
                <thead className="bg-gray-50 text-gray-500">
                    <tr>
                        <th className="p-4 font-semibold">Utilisateur</th>
                        <th className="p-4 font-semibold">Action</th>
                        <th className="p-4 font-semibold">Date</th>
                        <th className="p-4 font-semibold">Statut</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    <tr>
                        <td className="p-4 font-medium">Jean Dupont (Admin)</td>
                        <td className="p-4 text-gray-600">A publié une nouvelle annonce: "Examens finaux"</td>
                        <td className="p-4 text-gray-500">Il y a 2 heures</td>
                        <td className="p-4"><span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">Annonce</span></td>
                    </tr>
                    <tr>
                        <td className="p-4 font-medium">Marie Curie (Étudiante)</td>
                        <td className="p-4 text-gray-600">A soumis un feedback sur le cours de Physique</td>
                        <td className="p-4 text-gray-500">Il y a 5 heures</td>
                        <td className="p-4"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-semibold">Feedback</span></td>
                    </tr>
                    <tr>
                        <td className="p-4 font-medium">Système</td>
                        <td className="p-4 text-gray-600">Paiement de €2500 reçu de Marc Lavoine</td>
                        <td className="p-4 text-gray-500">Il y a 1 jour</td>
                        <td className="p-4"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">Paiement</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;