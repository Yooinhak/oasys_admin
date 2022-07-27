import React from 'react';

function StoreInfo() {
  return (
    <div className='layout-info'>
      <h1>가게 이름</h1>
      <div className='section-content'>
        <div>이곳은 가게에 대한 정보입니다.</div>
        <div>
          <button>Wi-Fi</button>
          <button>화장실</button>
          <button>처음 오셨나요?</button>
        </div>
      </div>
    </div>
  );
}

export default StoreInfo;
