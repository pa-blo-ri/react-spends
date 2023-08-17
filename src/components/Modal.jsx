import { useState, useEffect } from 'react'
import Message from './Message.jsx'
import BtnCloseModal from '../img/cerrar.svg'

const Modal = ({ 
  setModal, 
  animateModal, 
  setAnimateModal, 
  saveSpend, 
  editSpend,
  setEditSpend
}) => {

  const [message, setMessage] = useState('');

  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [id, setId] = useState('');

  useEffect(() => {
    setName(editSpend.name)
    setAmount(editSpend.amount)
    setCategory(editSpend.category)
    setId(editSpend.id)
    setDate(editSpend.date)
  }, [])
  

  const hideModal = () => {
    setAnimateModal(false);
    setEditSpend({})
    setTimeout(() => {
      setModal(false);
    }, 300);
  }

  const handleSubmit = e => {
    e.preventDefault();

    if ([name, amount, category].includes('')) {
      setMessage('*All fields must have data');
      setTimeout(() => {
        setMessage('')
      }, 5000);
      return
    }
    saveSpend({name, amount, category, id, date});
  }

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img
          src={BtnCloseModal}
          alt="Close modal button"
          onClick={hideModal} />
      </div>
      <form action="" className={`formulario ${animateModal ? 'animar' : ''} `} onSubmit={handleSubmit}>
        <legend>{editSpend.name ? 'Edit spend' : 'New spend'}</legend>

        <div className='campo'>
          <label htmlFor='nombre'>Name</label>
          <input
            id="nombre"
            type="text"
            placeholder='Add spend name'
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div className='campo'>
          <label htmlFor='cantidad'>Amount</label>
          <input
            id="cantidad"
            type="number"
            placeholder='Add spend amount'
            value={amount}
            onChange={e => setAmount(Number(e.target.value))}
          />
        </div>

        <div className='campo'>
          <label htmlFor='categoria'>Category</label>
          <select
            id="categoria"
            value={category}
            onChange={e => setCategory(e.target.value)}
          >
            <option value="">-- Select category --</option>
            <option value="saving">Saving</option>
            <option value="food">Food</option>
            <option value="house">House</option>
            <option value="freeTime">Free time</option>
            <option value="health">Health</option>
            <option value="subscriptions">Subscriptions</option>
            <option value="mix">Mix</option>
          </select>
          <input type="submit" value={editSpend.name ? 'Save' : 'Add'} />
        </div>

        {message && <Message type='error'>{message}</Message>}

      </form>
    </div>
  )
}

export default Modal
