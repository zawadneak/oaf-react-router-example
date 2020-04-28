import React from 'react';
import './style.css';
import Button from '../components/Button';

import history from '../../services/history';

export default function Main() {
  const handlePageSwitch = () => {
    history.push('/secondary');
  };

  return (
    <div className="container">
      <h1>Main</h1>
      <Button onClick={handlePageSwitch} />
    </div>
  );
}
