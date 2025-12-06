import React from 'react';

const Feedback: React.FC = () => {
  return (
    <div className="space-y-6">
        <div>
            <h1 className="text-3xl font-black text-gray-900 mb-2">Portail de Feedback</h1>
            <p className="text-gray-500">Envoyez des retours aux enseignants ou à l'administration et suivez leur état.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <h2 className="text-xl font-bold mb-6">Nouveau Feedback</h2>
                    <form className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Destinataire</label>
                            <div className="relative">
                                <select className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-primary/50 outline-none">
                                    <option>Sélectionner un destinataire</option>
                                    <option>M. Dubois - Mathématiques</option>
                                    <option>Mme. Lefevre - Physique</option>
                                    <option>Administration</option>
                                </select>
                                <span className="material-symbols-outlined absolute right-3 top-3.5 pointer-events-none text-gray-500">expand_more</span>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Sujet</label>
                            <input type="text" placeholder="Sujet de votre message" className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Votre Message</label>
                            <textarea rows={5} placeholder="Rédigez votre message ici..." className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 outline-none resize-none"></textarea>
                        </div>
                        <button type="button" className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary-dark transition-colors flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined">send</span>
                            Envoyer le Feedback
                        </button>
                    </form>
                </div>
            </div>

            {/* History List */}
            <div className="lg:col-span-3">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 h-full">
                    <h2 className="text-xl font-bold mb-6">Historique de vos Feedbacks Envoyés</h2>
                    <div className="space-y-4">
                        {[
                            { title: 'M. Dubois : Examen de mi-semestre', date: '24 Juillet 2024', status: 'Lu', statusColor: 'bg-green-100 text-green-800' },
                            { title: 'Administration : Problème de paiement', date: '15 Juillet 2024', status: 'En traitement', statusColor: 'bg-yellow-100 text-yellow-800' },
                            { title: 'Mme. Lefevre : Questions sur le projet', date: '02 Juillet 2024', status: 'Envoyé', statusColor: 'bg-blue-100 text-blue-800' },
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center justify-between p-4 rounded-lg bg-gray-50 border border-gray-100">
                                <div>
                                    <h3 className="font-semibold text-gray-800 text-sm">{item.title}</h3>
                                    <p className="text-xs text-gray-500 mt-1">{item.date}</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${item.statusColor}`}>{item.status}</span>
                                    <button className="text-gray-400 hover:text-primary"><span className="material-symbols-outlined">visibility</span></button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Feedback;