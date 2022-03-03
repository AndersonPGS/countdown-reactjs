import { useEffect, useState } from 'react'
import './App.css'
import notificationSound from '../src/notification.mp3'

const COUNTDOWN_INICIAL_TIME_IN_SECONDS = 25 // 25 minutes

function App() {

  const [secondsAmount, setSecondsAmount] = useState(COUNTDOWN_INICIAL_TIME_IN_SECONDS);

  const [isPaused, setIsPaused] = useState(false);
  const [isEnded, setIsEnded] = useState(false);

  useEffect(() => {
    if (secondsAmount <= 0 && !isEnded) {
      new Audio(notificationSound).play();
      setIsEnded(true);
      alert("Finalizado.");
      return;
    }

    if (!isPaused) {
      setTimeout(() => {
        setSecondsAmount(state => state - 1);
        setIsEnded(false);
      }, 1000);
    }
  }, [secondsAmount, isPaused]);

  const minutes = Math.floor(secondsAmount / 60);
  const seconds = secondsAmount % 60;

  return (
    <div className="App">
      <div className="blob">
        <svg viewBox="0 0 800 500" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
          <g transform="translate(163.37721252441406, -4.155426025390625)">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgb(255, 95, 109)"></stop>
                <stop offset="100%" stopColor="rgb(255, 195, 113)"></stop>
              </linearGradient>
            </defs>
            <path fill="url(#gradient)">
              <animate attributeName="d"
                dur={50}
                repeatCount="indefinite"

                values="M420.5,308.5Q432,367,377,387.5Q322,408,273,420.5Q224,433,176,412Q128,391,123,340Q118,289,75.5,237.5Q33,186,63.5,128Q94,70,161.5,87Q229,104,272,106Q315,108,357.5,131Q400,154,404.5,202Q409,250,420.5,308.5Z;
                M421,303Q415,356,360,363.5Q305,371,264.5,401.5Q224,432,161.5,428Q99,424,58,371Q17,318,23.5,251.5Q30,185,65.5,131.5Q101,78,161.5,68Q222,58,263.5,93.5Q305,129,346.5,145Q388,161,407.5,205.5Q427,250,421,303Z;
                M428.5,307Q428,364,383.5,404.5Q339,445,283,429Q227,413,187.5,390Q148,367,84,342.5Q20,318,63.5,263Q107,208,107,146.5Q107,85,164,65.5Q221,46,263.5,87Q306,128,367.5,131.5Q429,135,429,192.5Q429,250,428.5,307Z;
                M439.5,292Q380,334,350,368.5Q320,403,269.5,435.5Q219,468,192.5,407.5Q166,347,90,333Q14,319,14.5,250Q15,181,79.5,154.5Q144,128,179.5,67Q215,6,278.5,27Q342,48,365.5,104.5Q389,161,444,205.5Q499,250,439.5,292Z;
                M392,298.5Q401,347,362,378.5Q323,410,275,409.5Q227,409,168.5,410.5Q110,412,68.5,364Q27,316,20.5,248.5Q14,181,64,137Q114,93,167,66Q220,39,285.5,34Q351,29,401,75Q451,121,417,185.5Q383,250,392,298.5Z;
                M466,312Q444,374,381.5,388Q319,402,268.5,435.5Q218,469,164,440Q110,411,110.5,351Q111,291,77,240Q43,189,76.5,138.5Q110,88,162.5,46.5Q215,5,273.5,37.5Q332,70,395,93.5Q458,117,473,183.5Q488,250,466,312Z;
                M420.5,308.5Q432,367,377,387.5Q322,408,273,420.5Q224,433,176,412Q128,391,123,340Q118,289,75.5,237.5Q33,186,63.5,128Q94,70,161.5,87Q229,104,272,106Q315,108,357.5,131Q400,154,404.5,202Q409,250,420.5,308.5Z"
              >
              </animate>
            </path>
          </g>
        </svg>
      </div>
      <div className="blob blur">
        <svg viewBox="0 0 800 500" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
          <g transform="translate(163.37721252441406, -4.155426025390625)">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgb(255, 95, 109)"></stop>
                <stop offset="100%" stopColor="rgb(255, 195, 113)"></stop>
              </linearGradient>
            </defs>
            <path fill="url(#gradient)">
              <animate attributeName="d"
                dur={50}
                repeatCount="indefinite"

                values="M420.5,308.5Q432,367,377,387.5Q322,408,273,420.5Q224,433,176,412Q128,391,123,340Q118,289,75.5,237.5Q33,186,63.5,128Q94,70,161.5,87Q229,104,272,106Q315,108,357.5,131Q400,154,404.5,202Q409,250,420.5,308.5Z;
                M421,303Q415,356,360,363.5Q305,371,264.5,401.5Q224,432,161.5,428Q99,424,58,371Q17,318,23.5,251.5Q30,185,65.5,131.5Q101,78,161.5,68Q222,58,263.5,93.5Q305,129,346.5,145Q388,161,407.5,205.5Q427,250,421,303Z;
                M428.5,307Q428,364,383.5,404.5Q339,445,283,429Q227,413,187.5,390Q148,367,84,342.5Q20,318,63.5,263Q107,208,107,146.5Q107,85,164,65.5Q221,46,263.5,87Q306,128,367.5,131.5Q429,135,429,192.5Q429,250,428.5,307Z;
                M439.5,292Q380,334,350,368.5Q320,403,269.5,435.5Q219,468,192.5,407.5Q166,347,90,333Q14,319,14.5,250Q15,181,79.5,154.5Q144,128,179.5,67Q215,6,278.5,27Q342,48,365.5,104.5Q389,161,444,205.5Q499,250,439.5,292Z;
                M392,298.5Q401,347,362,378.5Q323,410,275,409.5Q227,409,168.5,410.5Q110,412,68.5,364Q27,316,20.5,248.5Q14,181,64,137Q114,93,167,66Q220,39,285.5,34Q351,29,401,75Q451,121,417,185.5Q383,250,392,298.5Z;
                M466,312Q444,374,381.5,388Q319,402,268.5,435.5Q218,469,164,440Q110,411,110.5,351Q111,291,77,240Q43,189,76.5,138.5Q110,88,162.5,46.5Q215,5,273.5,37.5Q332,70,395,93.5Q458,117,473,183.5Q488,250,466,312Z;
                M420.5,308.5Q432,367,377,387.5Q322,408,273,420.5Q224,433,176,412Q128,391,123,340Q118,289,75.5,237.5Q33,186,63.5,128Q94,70,161.5,87Q229,104,272,106Q315,108,357.5,131Q400,154,404.5,202Q409,250,420.5,308.5Z"
              >
              </animate>
            </path>
          </g>
        </svg>
      </div>
      <div className="blob1">
        <svg viewBox="0 0 800 500" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
          <g transform="translate(163.37721252441406, -4.155426025390625)">
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgb(238, 205, 163)"></stop>
                <stop offset="100%" stopColor="rgb(239, 98, 159)"></stop>
              </linearGradient>
            </defs>
            <path fill="url(#gradient1)">
              <animate attributeName="d"
                dur={50}
                repeatCount="indefinite"

                values="M420.5,308.5Q432,367,377,387.5Q322,408,273,420.5Q224,433,176,412Q128,391,123,340Q118,289,75.5,237.5Q33,186,63.5,128Q94,70,161.5,87Q229,104,272,106Q315,108,357.5,131Q400,154,404.5,202Q409,250,420.5,308.5Z;
                M439.5,292Q380,334,350,368.5Q320,403,269.5,435.5Q219,468,192.5,407.5Q166,347,90,333Q14,319,14.5,250Q15,181,79.5,154.5Q144,128,179.5,67Q215,6,278.5,27Q342,48,365.5,104.5Q389,161,444,205.5Q499,250,439.5,292Z;
                M428.5,307Q428,364,383.5,404.5Q339,445,283,429Q227,413,187.5,390Q148,367,84,342.5Q20,318,63.5,263Q107,208,107,146.5Q107,85,164,65.5Q221,46,263.5,87Q306,128,367.5,131.5Q429,135,429,192.5Q429,250,428.5,307Z;
                M421,303Q415,356,360,363.5Q305,371,264.5,401.5Q224,432,161.5,428Q99,424,58,371Q17,318,23.5,251.5Q30,185,65.5,131.5Q101,78,161.5,68Q222,58,263.5,93.5Q305,129,346.5,145Q388,161,407.5,205.5Q427,250,421,303Z;
                M392,298.5Q401,347,362,378.5Q323,410,275,409.5Q227,409,168.5,410.5Q110,412,68.5,364Q27,316,20.5,248.5Q14,181,64,137Q114,93,167,66Q220,39,285.5,34Q351,29,401,75Q451,121,417,185.5Q383,250,392,298.5Z;
                M466,312Q444,374,381.5,388Q319,402,268.5,435.5Q218,469,164,440Q110,411,110.5,351Q111,291,77,240Q43,189,76.5,138.5Q110,88,162.5,46.5Q215,5,273.5,37.5Q332,70,395,93.5Q458,117,473,183.5Q488,250,466,312Z;
                M420.5,308.5Q432,367,377,387.5Q322,408,273,420.5Q224,433,176,412Q128,391,123,340Q118,289,75.5,237.5Q33,186,63.5,128Q94,70,161.5,87Q229,104,272,106Q315,108,357.5,131Q400,154,404.5,202Q409,250,420.5,308.5Z"
              >
              </animate>
            </path>
          </g>
        </svg>
      </div>
      <div className="blob1 blur">
        <svg viewBox="0 0 800 500" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
          <g transform="translate(163.37721252441406, -4.155426025390625)">
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgb(238, 205, 163)"></stop>
                <stop offset="100%" stopColor="rgb(239, 98, 159)"></stop>
              </linearGradient>
            </defs>
            <path fill="url(#gradient1)">
              <animate attributeName="d"
                dur={50}
                repeatCount="indefinite"

                values="M420.5,308.5Q432,367,377,387.5Q322,408,273,420.5Q224,433,176,412Q128,391,123,340Q118,289,75.5,237.5Q33,186,63.5,128Q94,70,161.5,87Q229,104,272,106Q315,108,357.5,131Q400,154,404.5,202Q409,250,420.5,308.5Z;
                M439.5,292Q380,334,350,368.5Q320,403,269.5,435.5Q219,468,192.5,407.5Q166,347,90,333Q14,319,14.5,250Q15,181,79.5,154.5Q144,128,179.5,67Q215,6,278.5,27Q342,48,365.5,104.5Q389,161,444,205.5Q499,250,439.5,292Z;
                M428.5,307Q428,364,383.5,404.5Q339,445,283,429Q227,413,187.5,390Q148,367,84,342.5Q20,318,63.5,263Q107,208,107,146.5Q107,85,164,65.5Q221,46,263.5,87Q306,128,367.5,131.5Q429,135,429,192.5Q429,250,428.5,307Z;
                M421,303Q415,356,360,363.5Q305,371,264.5,401.5Q224,432,161.5,428Q99,424,58,371Q17,318,23.5,251.5Q30,185,65.5,131.5Q101,78,161.5,68Q222,58,263.5,93.5Q305,129,346.5,145Q388,161,407.5,205.5Q427,250,421,303Z;
                M392,298.5Q401,347,362,378.5Q323,410,275,409.5Q227,409,168.5,410.5Q110,412,68.5,364Q27,316,20.5,248.5Q14,181,64,137Q114,93,167,66Q220,39,285.5,34Q351,29,401,75Q451,121,417,185.5Q383,250,392,298.5Z;
                M466,312Q444,374,381.5,388Q319,402,268.5,435.5Q218,469,164,440Q110,411,110.5,351Q111,291,77,240Q43,189,76.5,138.5Q110,88,162.5,46.5Q215,5,273.5,37.5Q332,70,395,93.5Q458,117,473,183.5Q488,250,466,312Z;
                M420.5,308.5Q432,367,377,387.5Q322,408,273,420.5Q224,433,176,412Q128,391,123,340Q118,289,75.5,237.5Q33,186,63.5,128Q94,70,161.5,87Q229,104,272,106Q315,108,357.5,131Q400,154,404.5,202Q409,250,420.5,308.5Z"
              >
              </animate>
            </path>
          </g>
        </svg>
      </div>
      <div className="main">
        <div className="countdown">
          <span id="minutes">{String(minutes).padStart(2, "0")}</span>
          <span>:</span>
          <span id="seconds">{String(seconds).padStart(2, "0")}</span>
        </div>
        <div className="buttons">
          {isPaused && !isEnded && <button onClick={() => setIsPaused(false)}>Continuar</button>}
          {!isPaused && !isEnded && <button onClick={() => setIsPaused(true)}>Pausar</button>}
          {isEnded && <button onClick={() => setSecondsAmount(COUNTDOWN_INICIAL_TIME_IN_SECONDS)}>Começar</button>}
        </div>
      </div>
      <a href="https://github.com/AndersonPGS">AndersonPGS</a>
    </div>
  )
}

export default App
