import { useState, useEffect } from 'react';
import Header from './components/Header';
import Filters from './components/Filters';
import Modal from './components/Modal';
import SpendsList from './components/SpendsList';
import { generateId } from './helpers';
import iconNewSpend from './img/nuevo-gasto.svg';


function App() {
  const [presupuesto, setPresupuesto] = useState(
    localStorage.getItem('presupuesto') ?? 0
  );
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);
  const [spends, setSpends] = useState(
    localStorage.getItem('spends') ? JSON.parse(localStorage.getItem('spends')) : []
  )

  const [editSpend, setEditSpend] = useState({})

  const [filter, setFilter] = useState('')
  const [spendsFilter, setSpendsFilter] = useState([])

  useEffect(() => {
    if (Object.keys(editSpend).length > 0) {
      setModal(true);
      setTimeout(() => {
        setAnimateModal(true)
      }, 300);
    }

  }, [editSpend])

  useEffect(() => {
    Number(localStorage.setItem('presupuesto', presupuesto ?? 0))
  }, [presupuesto])

  useEffect(() => {
    localStorage.setItem('spends', JSON.stringify(spends) ?? [])
  }, [spends])

  useEffect(()=>{
    const spendsUpdated = spends.filter(spend => spend.category === filter)
    
    setSpendsFilter(spendsUpdated)
  },[filter])

  useEffect(() => {
    const presupuestoLS = Number(localStorage.getItem('presupuesto')) ?? 0

    if (presupuestoLS > 0) {
      setIsValidPresupuesto(true)
    }
  })

  const handleNewSpend = () => {
    setEditSpend({})
    setModal(true);

    setTimeout(() => {
      setAnimateModal(true)
    }, 300);
  }

  const saveSpend = spend => {

    if (spend.id) {
      //UPDATE
      const spendsUpdated = spends.map(spendState => spendState.id === spend.id ? spend : spendState)
      setSpends(spendsUpdated)
      setEditSpend({})
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

  const deleteSpend = id => {
    const spendsUpdated = spends.filter(spend => spend.id !== id)
    setSpends(spendsUpdated)
  }

  return (
    <div className={modal ? 'fijar' : ''} >
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
        spends={spends}
        setSpends={setSpends}
      />
      {isValidPresupuesto && (
        <>
          <main>
            {spends.length && <Filters
              filter={filter}
              setFilter={setFilter}
            />}
            <SpendsList
              spends={spends}
              setEditSpend={setEditSpend}
              deleteSpend={deleteSpend}
              spendsFilter={spendsFilter}
              filter={filter}
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
        setEditSpend={setEditSpend}
      />}
    </div>
  )
}

export default App
