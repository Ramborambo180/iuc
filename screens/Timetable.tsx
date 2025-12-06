import React from 'react';

const Timetable: React.FC = () => {
  const events = [
    { title: 'Mathématiques Appliquées', time: '8:30 - 10:00', prof: 'M. Dubois', room: 'Salle C101', day: 'Lundi 10', color: 'primary', top: '2.5rem', height: '7.5rem' },
    { title: 'Algorithmique', time: '13:00 - 14:30', prof: 'Mme. Lefevre', room: 'Salle A203', day: 'Lundi 10', color: 'green', top: '12.5rem', height: '7.5rem' },
    { title: 'Économie Générale', time: '10:00 - 12:00', prof: 'M. Martin', room: 'Amphi B', day: 'Mardi 11', color: 'orange', top: '7.5rem', height: '10rem' },
    { title: 'Mathématiques Appliquées', time: '8:00 - 9:30', prof: 'M. Dubois', room: 'Salle C101', day: 'Mercredi 12', color: 'primary', top: '0.5rem', height: '7.5rem' },
    { title: 'Examen: Droit des Affaires', time: '10:00 - 12:30', prof: 'Mme. Petit', room: 'Grand Amphi', day: 'Jeudi 13', color: 'red', top: '7.5rem', height: '12.5rem' },
    { title: 'Algorithmique (TP)', time: '12:00 - 13:30', prof: 'Mme. Lefevre', room: 'Labo Info 2', day: 'Vendredi 14', color: 'green', top: '10rem', height: '7.5rem' },
  ];

  const getColorClasses = (color: string) => {
    switch(color) {
        case 'primary': return 'bg-blue-50 border-blue-500 text-blue-900';
        case 'green': return 'bg-green-50 border-green-500 text-green-900';
        case 'orange': return 'bg-orange-50 border-orange-500 text-orange-900';
        case 'red': return 'bg-red-50 border-red-500 text-red-900';
        default: return 'bg-gray-100 border-gray-500';
    }
  };

  const getSubTextClasses = (color: string) => {
    switch(color) {
        case 'primary': return 'text-blue-700';
        case 'green': return 'text-green-700';
        case 'orange': return 'text-orange-700';
        case 'red': return 'text-red-700';
        default: return 'text-gray-600';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col h-full min-h-[800px]">
      
      {/* Controls */}
      <div className="p-4 border-b border-gray-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex gap-2">
            <button className="px-3 py-1.5 bg-gray-100 rounded text-sm text-gray-700 hover:bg-gray-200">Imprimer</button>
            <button className="px-3 py-1.5 bg-accent text-gray-900 font-bold rounded text-sm hover:opacity-90">+ Créer un événement</button>
        </div>
        <div className="flex gap-2">
            <button className="px-3 py-1.5 bg-gray-100 rounded text-sm text-gray-700">Filière</button>
            <button className="px-3 py-1.5 bg-gray-100 rounded text-sm text-gray-700">Groupe</button>
            <div className="flex bg-gray-100 rounded p-1">
                <button className="px-3 py-1 bg-white shadow-sm rounded text-xs font-bold text-gray-900">Hebdomadaire</button>
                <button className="px-3 py-1 text-xs text-gray-500">Mensuelle</button>
            </div>
        </div>
      </div>

      {/* Date Nav */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
        <div className="flex items-center gap-2">
            <button className="p-1 hover:bg-gray-200 rounded"><span className="material-symbols-outlined">chevron_left</span></button>
            <button className="p-1 hover:bg-gray-200 rounded"><span className="material-symbols-outlined">chevron_right</span></button>
            <button className="px-3 py-1 border border-gray-300 rounded text-sm font-medium bg-white">Aujourd'hui</button>
        </div>
        <h2 className="text-lg font-bold">10 - 16 Juin, 2024</h2>
      </div>

      {/* Calendar Grid */}
      <div className="flex-1 overflow-auto relative">
        <div className="grid grid-cols-[60px_repeat(5,1fr)] min-w-[800px] h-full">
            {/* Time Column */}
            <div className="border-r border-gray-200 bg-white sticky left-0 z-10">
                <div className="h-10 border-b border-gray-200 bg-gray-50"></div>
                {['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00'].map(time => (
                    <div key={time} className="h-20 text-xs text-gray-400 text-right pr-2 pt-1 border-b border-gray-100 relative">
                        <span className="-top-2 relative">{time}</span>
                    </div>
                ))}
            </div>

            {/* Days Columns */}
            {['Lundi 10', 'Mardi 11', 'Mercredi 12', 'Jeudi 13', 'Vendredi 14'].map((day, colIndex) => (
                <div key={day} className={`border-r border-gray-200 relative ${day === 'Mercredi 12' ? 'bg-yellow-50/30' : ''}`}>
                    <div className="h-10 border-b border-gray-200 bg-gray-50 flex items-center justify-center text-sm font-semibold text-gray-700">
                        {day}
                    </div>
                    {/* Grid Lines */}
                    {Array.from({length: 8}).map((_, i) => (
                         <div key={i} className="h-20 border-b border-gray-100"></div>
                    ))}
                    
                    {/* Events */}
                    {events.filter(e => e.day === day).map((event, idx) => (
                        <div 
                            key={idx}
                            className={`absolute left-1 right-1 p-2 rounded-lg border-l-4 shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer ${getColorClasses(event.color)}`}
                            style={{ top: event.top, height: event.height }}
                        >
                            <div className="font-bold text-xs leading-tight mb-1">{event.title}</div>
                            <div className={`text-[10px] font-medium ${getSubTextClasses(event.color)}`}>
                                {event.time}<br/>
                                {event.prof}<br/>
                                {event.room}
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Timetable;