import { useState } from 'react';
import classes from '../components/Tbsa.module.css';
import { IoIosBody } from 'react-icons/io';
import { AiOutlineClose } from 'react-icons/ai';
import Draggable from 'react-draggable';

const Tbsa = () => {
  const [displayTbsa, setDisplayTbsa] = useState(false);
  const handleDisplayTbsa = () => {
    setDisplayTbsa((displayTbsa) => !displayTbsa);
  };
  return (
    <>
      <div>
        <button className={classes.tbsaButton} onClick={handleDisplayTbsa}>
          <IoIosBody size='2.5rem' />
        </button>
      </div>
      {displayTbsa && (
        <Draggable>
          <div className={classes.tbsaContainer}>
            <div className={classes.tbsaMinimizeContainer}>
              <AiOutlineClose
                size='2.5rem'
                onClick={handleDisplayTbsa}
                className={classes.icon}
              />
            </div>
            <h2>TBSA:</h2>
            <img className={classes.tbsaChart} src='/src/assets/img/tbsa.png' />
          </div>
        </Draggable>
      )}
    </>
  );
};

export default Tbsa;
