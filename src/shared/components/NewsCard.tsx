import React from 'react';
import styles from './NewsCard.module.css';

type Props = { title: string; content: string };

const NewsCard: React.FC<Props> = ({ title, content }) => (
  <div className={styles.card}>
    <h3>{title}</h3>
    <p>{content}</p>
  </div>
);

export default NewsCard;