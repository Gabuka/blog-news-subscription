import React from 'react';
import NewsCard from '../../../shared/components/NewsCard';
import { news } from '../data/newsData';

type Props = { isPremium: boolean };

const NewsList: React.FC<Props> = ({ isPremium }) => {
  const visibleNews = isPremium ? news.slice(0, 5) : news.slice(0, 3);
  return (
    <div>
      {visibleNews.map(item => (
        <NewsCard key={item.id} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default NewsList;