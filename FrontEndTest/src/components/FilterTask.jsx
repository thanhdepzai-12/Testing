import { Select } from 'antd'
import React, { useEffect, useState } from 'react'
import { HanldeGetTask } from '../utils/apiServices';
import { useModal } from '../Context/ModalContext';

const FilterTask = () => {
    const {dataTask,setDataTask} = useModal();
    const [filterTask,setFilterTask]= useState('')
    const handleChange = (value) => {
        if(value){
            setFilterTask(value)
        }
      };
      useEffect(()=>{
        let fetchTask = async()=>{
        const res = await HanldeGetTask(filterTask);
        if(res){
            setDataTask(res);
        }
    }
    fetchTask();
    },[filterTask,setDataTask])

  return (

    <div>
         <Select
      defaultValue="All"
      className='w-100'
      style={{
        height:"37.6px"
      }}
      onChange={handleChange}
      options={[
        {
          value: 'completed',
          label: 'Completed',
        },
        {
          value: 'incomplete',
          label: 'Incomplete',
        },
        {
          value: 'All',
          label: 'All',
        },

      ]}
    />
    </div>
  )
}

export default FilterTask