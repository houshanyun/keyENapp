import React from 'react';
import './Popup.scss';

function Popup({complate, popup, setPopup, startKeyOn}) {
  function resetHandle() {
    location.reload();
  }
  return (
    <>
      {
        complate &&
        <div className='complateWrapper'>
          <div className='complate'>已完成!</div>
        </div>
      }
      <div className='popup'>
        <div className='popupWrapper'>
          {
            popup ?
            <button onClick={startKeyOn}>開始</button> :
            <button onClick={resetHandle}>重新開始</button>
          }
        </div>
      </div>
    </>
  );
}

export default Popup;

