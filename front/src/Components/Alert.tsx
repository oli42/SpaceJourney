import React, { useState } from 'react';
import '../Style/style.scss';
import { Howl } from "howler";
import emergency from '../Sound/emergency.mp3';

function Alert(props: any) {

  const [alertGif] = useState("alertGif")

    const playMp3 = (src: any) => {
        const mySound = new Howl({
          src, 
          html5: true,
        });
        mySound.play()
      };

  return (
    <div className="alert2">
      <button onClick={()=>{playMp3(emergency); props.changeGif(alertGif)}}>ALERT</button>
    </div>
  )
}

export default Alert
