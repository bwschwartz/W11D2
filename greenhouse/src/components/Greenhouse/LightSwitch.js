import './LightSwitch.css';

import {useTheme} from '../../context/ThemeContext'

function LightSwitch() {
  const {setThemeName} = useTheme();

  const handleSwitch = (e) => {
    setThemeName(e.target.className==="on" ? "day" : "night")
  }

  return (
    <div className="light-switch day">
      <div
        className="on"
        onClick={handleSwitch}
      >DAY</div>
      <div
        className="off"
        onClick={handleSwitch}
      >NIGHT</div>
    </div>
  );
}

export default LightSwitch;