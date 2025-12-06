import React from 'react';

const TeacherDashboard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left Column (2/3) */}
      <div className="lg:col-span-2 space-y-8">
        
        {/* Classes Section */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4">Mes Classes pour le semestre actuel</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: 'Algèbre Linéaire - L1', code: 'ALG101', students: 45, img: 'https://picsum.photos/seed/math/300/150' },
              { name: 'Prog. Orientée Objet - L2', code: 'POO201', students: 38, img: 'https://picsum.photos/seed/code/300/150' },
              { name: 'Bases de Données - L3', code: 'BDD301', students: 32, img: 'https://picsum.photos/seed/db/300/150' },
            ].map((cls, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-32 bg-gray-200 w-full">
                    <img src={cls.img} alt={cls.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900">{cls.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">Code: {cls.code}, {cls.students} étudiants</p>
                  <button className="text-primary text-sm font-medium hover:underline flex items-center gap-1">
                    Gérer la classe <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Access */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4">Accès Rapides</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: 'edit_note', label: 'Encoder les notes' },
              { icon: 'calendar_view_day', label: "Voir l'emploi du temps" },
              { icon: 'campaign', label: 'Envoyer une annonce' },
            ].map((action, idx) => (
              <button key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center gap-3 hover:-translate-y-1 transition-transform cursor-pointer">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-2xl">{action.icon}</span>
                </div>
                <span className="font-medium text-gray-700">{action.label}</span>
              </button>
            ))}
          </div>
        </section>
      </div>

      {/* Right Column (1/3) */}
      <div className="space-y-6">
        {/* Messages */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="font-bold text-lg mb-4">Messages et Annonces</h3>
          <div className="space-y-4">
            <div className="flex gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="relative">
                 <img src="https://i.pravatar.cc/150?img=68" alt="Admin" className="w-10 h-10 rounded-full" />
                 <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full border-2 border-white"></div>
              </div>
              <div>
                <div className="flex justify-between items-baseline w-full">
                    <p className="font-semibold text-sm">Administration</p>
                    <span className="text-xs text-gray-400">Hier</span>
                </div>
                <p className="text-sm text-gray-600 line-clamp-2">Rappel: Réunion pédagogique demain à 10h...</p>
              </div>
            </div>
            <div className="flex gap-3 p-3">
              <img src="https://i.pravatar.cc/150?img=53" alt="Student" className="w-10 h-10 rounded-full" />
              <div>
                <div className="flex justify-between items-baseline w-full">
                    <p className="font-semibold text-sm">Marc L. (POO201)</p>
                    <span className="text-xs text-gray-400">14:32</span>
                </div>
                <p className="text-sm text-gray-600 line-clamp-2">Bonjour, j'ai une question sur le projet...</p>
              </div>
            </div>
            <button className="w-full text-center text-primary text-sm font-medium mt-2">Voir tous les messages</button>
          </div>
        </div>

        {/* Deadlines */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="font-bold text-lg mb-4">Échéances à venir</h3>
          <div className="space-y-3">
            {[
              { task: 'Rendu Projet BDD301', date: '25 Oct.', alert: true },
              { task: 'Examen Partiel POO201', date: '3 Nov.', alert: false },
              { task: 'Saisie notes ALG101', date: '10 Nov.', alert: false },
            ].map((item, idx) => (
              <div key={idx} className={`flex justify-between items-center p-3 rounded-lg ${item.alert ? 'bg-red-50' : 'bg-transparent'}`}>
                <div>
                  <p className="text-sm font-medium text-gray-800">{item.task}</p>
                  <p className="text-xs text-gray-500">{item.alert ? 'Date limite' : "Date de l'examen"}</p>
                </div>
                <span className={`text-sm font-bold ${item.alert ? 'text-red-600' : 'text-gray-700'}`}>{item.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;