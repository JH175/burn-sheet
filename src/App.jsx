import './App.css';
import { useState } from 'react';
import Calculator from './components/Calculator';
import Footer from './components/Footer';
import Header from './components/Header';
import Result from './components/Result';
import toast, { Toaster } from 'react-hot-toast';
import Logic from './components/Logic';
import Tbsa from './components/Tbsa';

function App() {
  const [weight, setWeight] = useState();
  const [tbsa, setTbsa] = useState();
  const [fluidDemand, setFluidDemand] = useState(0);
  const handleCalculate = (e) => {
    e.preventDefault();
    toast.remove();
    let roundedTbsa = Math.ceil(tbsa / 10) * 10;
    setTbsa(roundedTbsa);
    let initFluidDemand = tbsa * 10;
    let totalFluidDemand = null;
    try {
      if (!weight || !tbsa) {
        throw 'Weight & TBSA Required';
      } else if (weight < 40) {
        throw 'Minimum weight = 40kg';
      } else if (weight > 80) {
        let weightOverage = (weight - 80) / 10;
        let additionalFluidDemand = weightOverage * 100;
        totalFluidDemand = initFluidDemand + additionalFluidDemand;
        setFluidDemand(totalFluidDemand);
        toast.success(<p>Initial Fluid Demand = {totalFluidDemand} mL/hr</p>);
      } else {
        setFluidDemand(initFluidDemand);
        toast.success(<p>Initial Fluid Demand = {initFluidDemand} mL/hr</p>);
      }
    } catch (error) {
      toast.error(error);
    }
  };
  const handleClear = (e) => {
    setFluidDemand(0);
    setWeight();
    setTbsa();
    toast.remove();
    toast.success('Previous Data Cleared');
  };

  return (
    <>
      <div className='appContainer'>
        <Header />
        <div className='toolsContainer'>
          <Logic />
          <Tbsa />
        </div>
        <Calculator
          weight={weight}
          tbsa={tbsa}
          weightOnChange={(e) => setWeight(e.target.value)}
          tbsaOnChange={(e) => setTbsa(e.target.value)}
          onSubmit={handleCalculate}
          onClick={handleClear}
        />

        <Result tbsa={tbsa} weight={weight} fluidDemand={fluidDemand} />
        <Footer />
      </div>

      <Toaster
        toastOptions={{
          className: 'toasterMain',
        }}
      />
    </>
  );
}

export default App;
