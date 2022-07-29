import React from 'react';
import { BsPlusCircle } from 'react-icons/bs';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';

function CategoriByMenu() {
  return (
    <div className='categori'>
      <div className='item'>
        <div className='item-img'>
          <button />
        </div>
        <div className='item-info-box'>
          <h3>메뉴 이름</h3>
          <div>메뉴 설명</div>
          <div>가격</div>
        </div>
      </div>
      <div className='item'>
        <div className='item-img'>
          <button />
        </div>
        <div className='item-info-box'>
          <h3>메뉴 이름</h3>
          <div>메뉴 설명</div>
          <div>가격</div>
        </div>
      </div>
    </div>
  );
}

function Menu() {
  return (
    <div className='layout-menu'>
      <div className='section-categori'>
        <h1>전체 메뉴</h1>
        <ScrollMenu>
          <button className='categori-btn'>찌개</button>
          <button className='categori-btn'>밥</button>
          <button className='categori-btn'>사이드</button>
          <button className='add-categori-btn'>
            <BsPlusCircle size='30' />
          </button>
        </ScrollMenu>
      </div>
      <div className='section-menu-info'>
        <CategoriByMenu />
        <CategoriByMenu />
      </div>
    </div>
  );
}

export default Menu;
