import React from 'react';
import './Keyboard.scss';

function ComplatePopup({complate}) {
  function resetHandle() {
    location.reload();
  }
  return (
    <>
      {
        complate &&
        <div className='complateWrapper'>
          <div className='complate'>已完成!</div>
          <button onClick={resetHandle}>重新開此</button>
        </div>
      }
    </>
  );
}

export default ComplatePopup;

