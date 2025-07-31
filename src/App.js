import React from 'react';
import TodoWrapper from './components/TodoWrapper';
import './App.css';

const App = () => {
  const bgStyle = {
    background: `url(${process.env.PUBLIC_URL + '/Images/bg-1.jpg'}) no-repeat center`,
    backgroundSize: 'cover',
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  return (
    <div className='App' style={bgStyle}>
      <TodoWrapper />
    </div>
  );
}

export default App;