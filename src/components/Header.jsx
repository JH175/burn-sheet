import classes from '../components/Header.module.css';

const Header = () => {
  return (
    <div className={classes.header}>
      <h1 className={classes.headerText}>Burn_sheet.</h1>
      <p>Fluid Demand for Adult Burn Patients</p>
      <p>"Rule of Tens Method"</p>
    </div>
  );
};

export default Header;
