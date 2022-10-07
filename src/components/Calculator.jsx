import classes from '../components/Calculator.module.css';

const Calculator = (props) => {
  const { onSubmit, onClick, weightOnChange, tbsaOnChange } = props;
  return (
    <div className={classes.container}>
      <form onSubmit={onSubmit}>
        <div>
          <div className={classes.inputContainer}>
            <label>Patient's Weight (kg)</label>
            <input
              id='weightInput'
              value={props.weight}
              onChange={weightOnChange}
              type='number'
            />
          </div>
          <div className={classes.inputContainer}>
            <label>Total Body Surface Area (%)</label>
            <input
              id='tbsaInput'
              value={props.tbsa}
              onChange={tbsaOnChange}
              type='number'
            />
          </div>
        </div>
        <div className={classes.btnContainer}>
          <button className={classes.calcBtn}>=</button>
          <button type='reset' onClick={onClick} className={classes.clearBtn}>
            AC
          </button>
        </div>
      </form>
    </div>
  );
};

export default Calculator;
