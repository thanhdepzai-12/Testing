
import axios from "./axious.Customize";


const HandleCreateTask = (title,description,dueDate) => {
    const URL_POST_TASK = '/v1/api//tasks';
    const data = { title,description,dueDate};
    return axios.post(URL_POST_TASK, data);
};
const HanldeGetTask = (status)=> {
    const URL_GET_TASK = `/v1/api//tasks?status=${status}`;
    return axios.get(URL_GET_TASK);
}
const  HanldePatchTask = (id)=> {
    const URL_PATCH_TASK = `/v1/api//tasks/${id}`;
    return axios.patch(URL_PATCH_TASK);
}
const  HanldeDeleteTask = (id)=> {
    const URL_DELETE_TASK = `/v1/api//tasks/${id}`;
    return axios.delete(URL_DELETE_TASK);
}
export { HandleCreateTask,HanldeGetTask,HanldePatchTask,HanldeDeleteTask};