import { useState } from 'react';
import classes from '../components/Logic.module.css';
import { GiBrain } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import Draggable from 'react-draggable';

const Logic = () => {
  const [displayLogic, setDisplayLogic] = useState(false);
  const handleDisplayLogic = () => {
    setDisplayLogic((displayLogic) => !displayLogic);
  };
  return (
    <>
      <div>
        <button className={classes.logicButton} onClick={handleDisplayLogic}>
          <GiBrain size='2.5rem' />
        </button>
      </div>
      {displayLogic && (
        <Draggable>
          <div className={classes.logicContainer}>
            <div>
              <div className={classes.logicMinimizeContainer}>
                <AiOutlineClose
                  size='2.5rem'
                  onClick={handleDisplayLogic}
                  className={classes.icon}
                />
              </div>
              <GiBrain size='5rem' />
              <p>
                The "Rule of Tens" method is utilized to calculate the initial
                fluid demand for adult burn patients weighing over 40kg with
                burns involving over 20% TBSA.
              </p>
              <h2>Logic:</h2>
              <p>1. Round %TBSA to nearest 10%</p>
              <p>2. %TBSA x 10 = mL/hr</p>
              <p>Patient over 80kg?</p>
              <p>3. +100mL/hr per 10kg over 80kg</p>
              <h2>Example:</h2>
              <p>Weight: 100kg TBSA: 30%</p>
              <p>30 X 10 = 300mL/hr</p>
              <p>+ 200mL = 500mL/hr</p>
              <p></p>
            </div>
          </div>
        </Draggable>
      )}
    </>
  );
};

export default Logic;
