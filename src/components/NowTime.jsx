import React, {useEffect, useState} from "react";
import './NowTime.scss'
function NowTime() {
  const [clock, setClock] = useState()
  const zeroAdd = t => {
    if (t < 10) {t = `0${t}`}
    return t
  }
  useEffect(() => {
    const timeHandle = () => {
      const timeObj = new Date
      let hours = zeroAdd(timeObj.getHours())
      let minutes = zeroAdd(timeObj.getMinutes())
      let seconds = zeroAdd(timeObj.getSeconds())
      setClock(() => `${hours}:${minutes}:${seconds}`)
      requestAnimationFrame(timeHandle);
    }
    requestAnimationFrame(timeHandle);
  }, [clock])
  return <>
    <div className="nowTime">{clock}</div>
  </>;
}
export default NowTime;
