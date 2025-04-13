import React, { useState } from 'react';
import NewsList from './features/news/components/NewsList';
import Badge from './shared/components/Badge';
import './styles/globals.css';

const App: React.FC = () => {
  const [isPremium, setIsPremium] = useState(false);

  return (
    <div className="container">
      <header className="header">
        <h1>Blog de Notícias</h1>
        <div>
          <label className="toggle-label">
            <input
              type="checkbox"
              checked={isPremium}
              onChange={() => setIsPremium(prev => !prev)}
            />
            Modo Premium
          </label>
          <Badge isPremium={isPremium} />
        </div>
      </header>
      <NewsList isPremium={isPremium} />
    </div>
  );
};

export default App;