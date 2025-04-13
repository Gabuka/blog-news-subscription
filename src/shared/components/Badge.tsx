import React from 'react';
import styles from './Badge.module.css';

type Props = { isPremium: boolean };

const Badge: React.FC<Props> = ({ isPremium }) => (
  <span className={isPremium ? styles.premium : styles.free}>
    {isPremium ? 'Premium' : 'Free'}
  </span>
);

export default Badge;