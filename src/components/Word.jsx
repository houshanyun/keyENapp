import React, {useEffect, useState} from 'react';
import {ALPHABET} from '../constant/ALPHABET';
import './Word.scss';

function Text({delWord, complate, keyRef}) {
  const myList = Array.from(ALPHABET);
  const [miss, setMiss] = useState(0);
  const [textList, setTextList] = useState(myList);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const pattern = new RegExp(`^[^${textList.slice(0, 1)}]{1}`, 'i');

  useEffect(() => {
    if (delWord.toUpperCase() === textList[0]) {
      const newList = textList.filter((item) => item.match(pattern));
      setTextList(newList);
    } else if (textList.includes(delWord.toUpperCase())) {
      setMiss((prev) => prev + 1);
    } else {
      return;
    }
  }, [delWord]);

  useEffect(() => {
    if ((myList.length - textList.length) === 1) {
      const start = new Date();
      setStartTime(() => start.getTime());
    }
    if (textList.length === 0) {
      const end = new Date();
      setEndTime(() => end.getTime());
      keyRef.current.blur();
      complate(true)
    }
  }, [textList]);

  return (
    <>
      <div className='textWrapper'>
        <p className='textContent'>{textList}</p>
        <span className='miss'>按錯次數: {miss}</span>
        <span className='complateTime'>
          完成時間: {
            textList.length === 0 ?
            Math.floor((endTime - startTime)/1000) : 0
          }
        </span>
      </div>
    </>
  );
}

export default Text;
