import React, {useState} from 'react';
import './App.scss';
import Keyboard from './components/Keyboard';
import Popup from './components/Popup';
import Text from './components/Text';

function App() {
  const [complate, setComplate] = useState(false);
  const [popup, setPopup] = useState(true);
  const [delWord, setDelWord] = useState('');
  const [keyRef, setKeyRef] = useState(null)

  const startKeyOn = () => {
    const closePopup = () => {
      if (popup) {
        setPopup(false);
      } else {
        return;
      }
    };
    keyRef.current.focus();
    closePopup();
  };

  return (
    <>
      <h1>KeyEN App</h1>
      <Text
        delWord={delWord}
        complate={setComplate}
        keyRef={keyRef}
        setDelWord={setDelWord}/>
      <Popup
        complate={complate}
        popup={popup}
        setPopup={setPopup}
        startKeyOn={startKeyOn} />
      <Keyboard setDelWord={setDelWord} setKeyRef={setKeyRef} />
    </>
  );
}
export default App;
