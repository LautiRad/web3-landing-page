import React from 'react';

export default function Header(props) {
  return (
    <header {...props}>
      <div className="header-content">
        <h1>
          <a>
            <span>Web3</span>
          </a>
          <span>Solutions</span>
        </h1>
      </div>
    </header>
  );
}
