import ReactSlider from "react-slider";
import './Thermometer.css';
import {useClimate} from '../../context/ClimateContext'
import {useEffect} from 'react'


function Thermometer() {

  const {temperature, setTemperature, desiredTemp, setDesiredTemp} = useClimate();

  const stepTemp = () => {
    setTemperature((oldTemp) => oldTemp+(Math.sign(desiredTemp-temperature)))
  }

  const changeTemp = () => {
    const timedTemp = setTimeout(stepTemp, 500)
    return () => {
      // console.log("hi")
      return clearTimeout(timedTemp)}
  }

  useEffect(changeTemp,[desiredTemp, temperature])

  return (
    <section>
      <h2>Thermometer</h2>
      <div className="actual-temp">Actual Temperature: {temperature}°F</div>
      <ReactSlider
        value={temperature}
        onAfterChange={(val) => setDesiredTemp(val)}
        className="thermometer-slider"
        thumbClassName="thermometer-thumb"
        trackClassName="thermometer-track"
        ariaLabel={"Thermometer"}
        orientation="vertical"
        min={0}
        max={120}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        renderTrack={(props, state) => (
          <div {...props} index={state.index}></div>
        )}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Thermometer;