import { useState } from 'react';
import axios from 'axios';

export default function OlamaChat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input) return;

    setMessages([...messages, { from: 'user', text: input }]);

    try {
      const response = await axios.post(
        'https://api.olama.ai/v1/completions',
        {
          model: 'olama-code',
          prompt: input,
          max_tokens: 200
        },
        {
          headers: {
            'Authorization': `Bearer ${process.env.OLAMA_API_KEY}`,
            'Content-Type': 'application/json',
          }
        }
      );

      const reply = response.data.choices[0].text;
      setMessages(prev => [...prev, { from: 'bot', text: reply }]);
      setInput('');
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { from: 'bot', text: 'Error: could not get response.' }]);
    }
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: 10, width: 300 }}>
      <div style={{ maxHeight: 200, overflowY: 'scroll' }}>
        {messages.map((m, i) => <div key={i}><b>{m.from}:</b> {m.text}</div>)}
      </div>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Ask a legal question..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}
