import React from 'react';
import { BsPlusCircle } from 'react-icons/bs';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';

function Menu() {
  return (
    <div className='layout-menu'>
      <h1>전체 메뉴</h1>
      <div className='section-categori'>
        <ScrollMenu>
          <button className='categori-btn'>찌개</button>
          <button className='categori-btn'>밥</button>
          <button className='categori-btn'>사이드</button>
          <button className='add-categori-btn'>
            <BsPlusCircle size='30' />
          </button>
        </ScrollMenu>
      </div>
    </div>
  );
}

export default Menu;
