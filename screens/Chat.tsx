import React from 'react';

const contacts = [
  { id: 1, name: 'Jean Dupont', message: "Ok, je m'en occupe...", time: '10:42', unread: 2, avatar: 'https://i.pravatar.cc/150?img=11', status: 'online' },
  { id: 2, name: 'Marie Curie', message: 'Le rapport est prêt pour relecture.', time: 'Hier', unread: 1, avatar: 'https://i.pravatar.cc/150?img=5', status: 'online' },
  { id: 3, name: 'Albert Einstein', message: 'Avez-vous reçu mon e-mail ?', time: '12/06', unread: 0, avatar: 'https://i.pravatar.cc/150?img=3', status: 'offline' },
  { id: 4, name: 'Sophie Germain', message: 'Merci ! Bonne journée.', time: '11/06', unread: 0, avatar: 'https://i.pravatar.cc/150?img=9', status: 'offline' },
];

const messages = [
  { id: 1, sender: 'other', text: "Bonjour ! Avez-vous pu jeter un œil à la proposition de budget pour le nouveau semestre ?", time: '10:40' },
  { id: 2, sender: 'me', text: "Bonjour Jean, oui je viens de le consulter. Tout me semble en ordre, juste une petite question sur la ligne \"Équipement informatique\".", time: '10:41' },
  { id: 3, sender: 'other', text: "Bien sûr, laquelle ?", time: '10:41' },
  { id: 4, sender: 'me', text: "Le montant semble un peu élevé par rapport à l'année dernière. Y a-t-il eu une mise à jour majeure du matériel ?", time: '10:42' },
];

const Chat: React.FC = () => {
  return (
    <div className="flex h-[calc(100vh-8rem)] bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Sidebar */}
      <div className="w-80 border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-2.5 text-gray-400 text-[20px]">search</span>
            <input 
              type="text" 
              placeholder="Rechercher..." 
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary/50"
            />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {contacts.map((contact) => (
            <div 
              key={contact.id} 
              className={`flex items-start gap-3 p-4 hover:bg-gray-50 cursor-pointer border-l-4 ${contact.id === 1 ? 'bg-primary/5 border-primary' : 'border-transparent'}`}
            >
              <div className="relative">
                <img src={contact.avatar} alt={contact.name} className="w-12 h-12 rounded-full object-cover" />
                <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${contact.status === 'online' ? 'bg-green-500' : 'bg-gray-400'}`}></span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-semibold text-sm truncate">{contact.name}</h3>
                  <span className="text-xs text-gray-500">{contact.time}</span>
                </div>
                <div className="flex justify-between items-center">
                    <p className={`text-xs truncate ${contact.id === 1 ? 'text-primary font-medium' : 'text-gray-500'}`}>{contact.message}</p>
                    {contact.unread > 0 && (
                        <span className="ml-2 bg-accent text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full text-gray-900">{contact.unread}</span>
                    )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col bg-gray-50">
        <div className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="relative">
                <img src={contacts[0].avatar} alt="Active User" className="w-10 h-10 rounded-full" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></span>
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Jean Dupont</h3>
              <p className="text-xs text-green-600 font-medium">En ligne</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="p-2 text-gray-400 hover:text-primary hover:bg-gray-100 rounded-full"><span className="material-symbols-outlined">phone</span></button>
            <button className="p-2 text-gray-400 hover:text-primary hover:bg-gray-100 rounded-full"><span className="material-symbols-outlined">videocam</span></button>
            <button className="p-2 text-gray-400 hover:text-primary hover:bg-gray-100 rounded-full"><span className="material-symbols-outlined">more_vert</span></button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
            <div className="text-center">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Aujourd'hui</span>
            </div>
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex items-end gap-2 max-w-[70%] ${msg.sender === 'me' ? 'flex-row-reverse' : 'flex-row'}`}>
                <img 
                    src={msg.sender === 'me' ? 'https://i.pravatar.cc/150?img=12' : contacts[0].avatar} 
                    className="w-8 h-8 rounded-full mb-1"
                    alt="avatar"
                />
                <div>
                    <div className={`p-4 rounded-2xl shadow-sm text-sm ${msg.sender === 'me' ? 'bg-primary text-white rounded-br-none' : 'bg-white text-gray-700 rounded-bl-none'}`}>
                    {msg.text}
                    </div>
                    <p className={`text-[10px] text-gray-400 mt-1 ${msg.sender === 'me' ? 'text-right' : 'text-left'}`}>{msg.time}</p>
                </div>
              </div>
            </div>
          ))}
          {/* Typing indicator */}
           <div className="flex justify-start">
              <div className="flex items-end gap-2 max-w-[70%]">
                <img src={contacts[0].avatar} className="w-8 h-8 rounded-full mb-1" alt="avatar" />
                <div className="bg-white p-4 rounded-2xl rounded-bl-none shadow-sm w-16 flex items-center justify-center gap-1">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            </div>
        </div>

        <div className="p-4 bg-white border-t border-gray-200">
          <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
            <button className="text-gray-400 hover:text-gray-600"><span className="material-symbols-outlined">sentiment_satisfied</span></button>
            <button className="text-gray-400 hover:text-gray-600"><span className="material-symbols-outlined">attach_file</span></button>
            <input type="text" placeholder="Écrivez votre message..." className="flex-1 bg-transparent border-none focus:ring-0 text-sm" />
            <button className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors">
                <span className="material-symbols-outlined text-[18px]">send</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;