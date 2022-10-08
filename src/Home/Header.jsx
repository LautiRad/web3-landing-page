import React from 'react';

{/*
          <a>
            <span>Web3</span>
          </a>
* */}
export default function Header(props) {
  return (
    <header {...props}>
      <div className="header-content">
        <h1>

          <span>Web3 Solutions</span>
        </h1>
      </div>
    </header>
  );
}
