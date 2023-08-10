import { useState, useEffect } from 'react';
import Header from './components/Header';
import Modal from './components/Modal';
import SpendsList from './components/SpendsList';
import { generateId } from './helpers';
import iconNewSpend from './img/nuevo-gasto.svg';


function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);
  const [spends, setSpends] = useState([])

  const [editSpend, setEditSpend] = useState({})

  useEffect(() => {
    if (Object.keys(editSpend).length > 0) {
      setModal(true);
      setTimeout(() => {
        setAnimateModal(true)
      }, 300);
    }

  }, [editSpend])


  const handleNewSpend = () => {
    setEditSpend({})
    setModal(true);

    setTimeout(() => {
      setAnimateModal(true)
    }, 300);
  }

  const saveSpend = spend => {
    console.log(spend)
    if (spend.id) {
      //UPDATE
      const spendsUpdated = spends.map(spendState => spendState.id === spend.id ? spend : spendState)
      setSpends(spendsUpdated)
    } else {
      //NEW SPEND
      spend.id = generateId();
      spend.date = Date.now();
      setSpends([...spends, spend]);
    }


    setAnimateModal(false);
    setTimeout(() => {
      setModal(false);
    }, 300);
  }

  return (
    <div className={modal ? 'fijar' : ''} >
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
        spends={spends}
      />
      {isValidPresupuesto && (
        <>
          <main>
            <SpendsList
              spends={spends}
              setEditSpend={setEditSpend}
            />
          </main>
          <div className='nuevo-gasto'>
            <img
              src={iconNewSpend}
              alt="New spend icon"
              onClick={handleNewSpend}
            />
          </div>
        </>
      )}
      {modal && <Modal
        setModal={setModal}
        animateModal={animateModal}
        setAnimateModal={setAnimateModal}
        saveSpend={saveSpend}
        editSpend={editSpend}
      />}
    </div>
  )
}

export default App
