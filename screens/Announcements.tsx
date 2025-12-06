import React from 'react';

const announcements = [
  {
    id: 1,
    category: 'Académique',
    isUrgent: true,
    title: 'Rappel : Inscription aux cours pour le semestre de printemps',
    excerpt: "La date limite pour l'inscription aux cours du semestre de printemps est ce vendredi. Assurez-vous de finaliser vos choix pour éviter des frais de retard.",
    date: '18 Novembre 2023',
    author: 'Bureau du registraire',
    image: null
  },
  {
    id: 2,
    category: 'Événement',
    isUrgent: false,
    title: "Conférence sur l'Intelligence Artificielle en Éthique",
    excerpt: "Rejoignez-nous pour une conférence passionnante avec le Dr. Eva Rostova sur les implications éthiques de l'IA. Ouvert à tous les étudiants et professeurs.",
    date: '15 Novembre 2023',
    author: "Département d'Informatique",
    image: 'https://picsum.photos/seed/ai/200/200'
  },
  {
    id: 3,
    category: 'Académique',
    isUrgent: false,
    title: 'Dates importantes pour les examens de mi-semestre',
    excerpt: "Veuillez consulter le calendrier mis à jour pour les dates et heures des examens de mi-semestre pour tous les départements. La préparation est la clé du succès.",
    date: '12 Novembre 2023',
    author: 'Affaires Académiques',
    image: null
  }
];

const Announcements: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      
      {/* Header Actions */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
         <div className="relative flex-1 w-full md:w-auto">
            <span className="material-symbols-outlined absolute left-3 top-2.5 text-gray-400">search</span>
            <input 
              type="text" 
              placeholder="Rechercher une annonce..." 
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-primary/50 outline-none"
            />
         </div>
         <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0 no-scrollbar">
            <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium whitespace-nowrap">Toutes</button>
            <button className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 whitespace-nowrap">Académique</button>
            <button className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 whitespace-nowrap">Événement</button>
            <button className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 whitespace-nowrap">Urgent</button>
         </div>
         <button className="hidden md:flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg shadow-md hover:bg-primary-dark transition-colors font-medium">
            <span className="material-symbols-outlined text-[20px]">add_circle</span>
            Créer une annonce
         </button>
      </div>

      {/* Cards List */}
      <div className="space-y-6">
        {announcements.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 transition-all hover:shadow-md">
                <div className="flex flex-col md:flex-row gap-6">
                    {item.image && (
                        <div className="w-full md:w-32 h-32 flex-shrink-0">
                            <img src={item.image} alt={item.title} className="w-full h-full object-cover rounded-lg" />
                        </div>
                    )}
                    <div className="flex-1 flex flex-col">
                        <div className="flex justify-between items-start mb-2">
                            <div className="flex items-center gap-3">
                                <span className="text-primary font-semibold text-sm">{item.category}</span>
                                {item.isUrgent && (
                                    <span className="bg-accent/20 text-yellow-700 border border-yellow-200 px-2 py-0.5 rounded text-xs font-bold flex items-center gap-1">
                                        <span className="material-symbols-outlined text-[14px] fill">priority_high</span>
                                        URGENT
                                    </span>
                                )}
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{item.excerpt}</p>
                        
                        <div className="mt-auto flex justify-between items-center pt-2">
                            <p className="text-xs text-gray-400">Publié le {item.date} par {item.author}</p>
                            <button className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${item.category === 'Événement' ? 'bg-primary text-white hover:bg-primary-dark' : 'bg-primary/10 text-primary hover:bg-primary/20'}`}>
                                {item.category === 'Événement' ? "S'inscrire" : "Lire la suite"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;