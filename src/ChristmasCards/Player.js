import React, { useState, useEffect } from "react";

import useDeviceDetect from "./useDeviceDetect";

const useAudio = url => {
  
  const [audio] = useState(() => {
    const tmp_audio = new Audio(url);
    tmp_audio.load()
    return tmp_audio
  });

  const [playing, setPlaying] = useState(false);

  const { isMobile } = useDeviceDetect();
  
  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    const listener = () => setPlaying(false)
    audio.addEventListener('ended', listener);
    return () => {
      audio.removeEventListener('ended', listener);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('This will run after 3 seconds!')
      if (!isMobile) {
        toggle()
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [isMobile]);

  return [playing, toggle];
};

const Player = ({ url }) => {
  const [playing, toggle] = useAudio(url);


  return (
    <div>
      <button className="play-pause-button" onClick={toggle}>{playing ? "Pause 🔇" : "Play 🔈"}</button>
    </div>
  );
};

export default Player;


