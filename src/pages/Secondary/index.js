import React from 'react';
import './style.css';
import Button from '../components/Button';

import history from '../../services/history';

export default function Secondary() {
  const handlePageSwitch = () => {
    history.push('/');
  };
  return (
    <div className="secondary">
      <h1>Secondary Page</h1>
      <Button onClick={handlePageSwitch} />
    </div>
  );
}
