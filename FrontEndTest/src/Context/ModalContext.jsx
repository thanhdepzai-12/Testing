import { useForm } from "antd/es/form/Form";
import React, { createContext, useContext, useState } from "react";
import { HandleCreateTask } from "../utils/apiServices";
import { notification } from "antd";
import moment from "moment";
// Tạo ModalContext
const ModalContext = createContext();


export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataTask,setDataTask]= useState([]);
  const [form] = useForm(); 
  const completedTasks = dataTask.filter((task) => task.isCompleted === true);
  const incompleteTasks = dataTask.filter((task) => task.isCompleted === false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    form
    .validateFields() 
    .then(async(values) => {
        if(values){

        const {title,dueDate,description} = values
        const dueDateNew = await dueDate.toDate();
        const res = await HandleCreateTask(title,description,dueDateNew);
        if(res.EC===0){
            notification.success({
                message:"Task",
                description:"Create Task SuccessFull"
            })
        }else {
            notification.error({
                message:"Task",
            description:"Create Task fail"
            })
        }
        }
      form.resetFields();
      setIsModalOpen(false); 
    })
    .catch((info) => {
      setIsModalOpen(true);
    });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        showModal,
        handleOk,
        handleCancel,
        form,dataTask,setDataTask,
        completedTasks,incompleteTasks
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

// Tạo custom hook để dễ dàng sử dụng Context
export const useModal = () => {
  return useContext(ModalContext);
};
