import classes from '../components/Result.module.css';

const Result = (props) => {
  const { tbsa, weight, fluidDemand } = props;
  return (
    <div className={classes.container}>
      <div>
        <h2>Result:</h2>
        <p>Weight: {weight ? weight : 0} kg</p>
        <p>TBSA (Rounded): {tbsa ? tbsa : 0} %</p>
        <p>Initial Fluid Demand: {fluidDemand ? fluidDemand : 0} mL/hr</p>
        <div>
          <h2>Drip Rates:</h2>
          <p>
            <span>
              10gtts: {Math.round((fluidDemand / 60) * 10)} gtts/min,{' '}
            </span>
            <span>{Math.round((fluidDemand / 3600) * 10)} gtts/sec</span>
          </p>
          <p>
            <span>
              15gtts: {Math.round((fluidDemand / 60) * 15)} gtts/min,{' '}
            </span>
            <span>{Math.round((fluidDemand / 3600) * 15)} gtts/sec</span>
          </p>
          <p>
            <span>
              20gtts: {Math.round((fluidDemand / 60) * 20)} gtts/min,{' '}
            </span>
            <span>{Math.round((fluidDemand / 3600) * 20)} gtts/sec</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Result;
