import React, { forwardRef, Fragment, useEffect, useImperativeHandle, useState } from 'react';
import IconMusic from '../../assets/images/music-icon.png';
import IconMusicStop from '../../assets/images/music-stop-icon.png';
import WeddingMusic from "../../assets/music/leberch-wedding-piano-595793.mp3";

import { styMusicFloating } from './styles';

const FloatingMusic = forwardRef((props, ref) => {
  const [play, setPlay] = useState(true);

  const toggleMusic = () => {
    const myAudio = document.getElementById('myAudio');
    /**
     * This function built-in with html5 function
     * doc: https://www.w3schools.com/tags/ref_av_dom.asp
     */
    if (play) {
      myAudio.pause();
    } else {
      myAudio.play();
    }

    setPlay(!play);
  };

  const playAudio = () => {
    const myAudio = document.getElementById('myAudio');

    myAudio.play();
  }

  useImperativeHandle(ref, () => ({
    playAudio
  }));

  return (
    <Fragment>
      <div css={styMusicFloating} >
        <audio id="myAudio" loop className="hide">
          <source src={WeddingMusic} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>

        <div onClick={toggleMusic}>
          <img
            src={play ? IconMusic : IconMusicStop}
            className="icon-music"
            alt="icon-music"
            title={`${play ? 'Matikan Musik' : 'Putar Musik'}`}
            style={{width: 50}}
          />
        </div>
      </div>
    </Fragment>
  );
})

export default FloatingMusic;
