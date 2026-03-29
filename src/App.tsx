import { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';
import './App.css';

interface Message {
  id: number;
  content: string;
  created_at: string;
}

export default function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');

  const [isSending, setIsSending] = useState(false);

  // 1. Üzenetek betöltése
  const fetchMessages = async () => {
    const { data, error } = await supabase
      .from('messages')
      .select('*')
      .order('created_at', { ascending: false }); // Fordított időrend

    if (error) console.error('Hiba:', error);
    else setMessages(data || []);
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  // 2. Mentés
  const handleSave = async () => {
    // Ha üres vagy éppen küldés alatt áll, ne csináljon semmit
    if (!newMessage.trim() || isSending) return;

    setIsSending(true); // Küldés indul

    try {
      const { error } = await supabase
        .from('messages')
        .insert([{ content: newMessage }]);

      if (error) {
        alert("Hiba történt a mentés közben!");
      } else {
        setNewMessage('');
        await fetchMessages(); // Megvárjuk, amíg a lista frissül
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSending(false); // Küldés befejeződött (sikeresen vagy hibával)
    }
  };

  // 3. Törlés
  const handleDelete = async (id: number) => {
    const { error } = await supabase.from('messages').delete().eq('id', id);
    if (error) alert("Hiba a törlésnél!");
    else fetchMessages();
  };

  // Dátum formázó helper
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('hu-HU', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="app-container">
      {/* Üzenetek zónája */}
      <main className="message-list">
        {messages.map((msg) => (
          <div key={msg.id} className="message-card">
            <div className="message-content">
              <span className="timestamp">{formatDate(msg.created_at)}</span>
              <span>{msg.content}</span>
            </div>
            <button className="delete-btn" onClick={() => handleDelete(msg.id)}>
              Törlés
            </button>
          </div>
        ))}
      </main>

      {/* Footer zóna */}
      <footer className="input-footer">
        <input
          className="message-input"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder={isSending ? "Küldés folyamatban..." : "Írj egy üzenetet..."}
          onKeyDown={(e) => e.key === 'Enter' && handleSave()}
          disabled={isSending} // Letiltjuk az írást küldés alatt
        />
        <button
          className="save-btn"
          onClick={handleSave}
          disabled={isSending || !newMessage.trim()} // Letiltjuk a gombot
        >
          {isSending ? 'Mentés...' : 'Küldés'}
        </button>
      </footer>
    </div>
  );
}