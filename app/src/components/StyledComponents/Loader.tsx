import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="container_wait">
      <section className="dots-container">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </section>
    </div>
  );
};

export default Loader;
