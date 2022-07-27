import React from 'react';
import { BsThreeDots } from 'react-icons/bs';

function Header() {
  return (
    <div className='layout-header'>
      <div className='section-left'>
        <h1>가게 홈페이지</h1>
      </div>
      <div className='section-right'>
        <button>
          <BsThreeDots size='24' />
        </button>
      </div>
    </div>
  );
}

export default Header;
