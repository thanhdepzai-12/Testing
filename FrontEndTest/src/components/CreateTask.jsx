import React from 'react'
import { useModal } from '../Context/ModalContext';

const CreateTask = () => {
    const { showModal } = useModal();
  return (
    <div>
        <button onClick={showModal} className='w-100 btn btn-warning'>
            Create Task
        </button>
    </div>
  ) 
}

export default CreateTask