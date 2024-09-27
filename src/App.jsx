import React from 'react';
import MailDetails from './components/MailDetails';

function App() {
  const img = 'https://1.bp.blogspot.com/_1wGLQBW2-zI/TQw7lBIHhOI/AAAAAAAABUQ/wV2Fb-SqIqQ/s1600/boom.jpg';

  return (
    <div 
      className="App flex flex-col min-h-screen items-center" 
      style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <MailDetails />
    </div>
  );
}

export default App;
