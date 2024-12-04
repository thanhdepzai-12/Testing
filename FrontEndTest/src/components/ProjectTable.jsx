import React, { useEffect, useState } from "react";
import { useModal } from "../Context/ModalContext";
import { Button, Pagination } from "antd";
import moment from "moment";
import { HanldePatchTask, HanldeDeleteTask } from "../utils/apiServices";
const ProjectTable = () => {
  const { dataTask, setDataTask } = useModal();
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const hanldeFinishTask = async (id) => {
    const res = await HanldePatchTask(id);
    if (res) {
      const updatedTasks = dataTask.map((task) =>
        task._id === id ? { ...task, isCompleted: true } : task
      );
      setDataTask(updatedTasks);
    }
  };
  const handleDeleteTask = async (id) => {
    try {
      const res = await HanldeDeleteTask(id);

      if (res) {
        const updatedTasks = dataTask.filter((task) => task._id !== id);

        setDataTask(updatedTasks);
      }
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const currentData = Array.isArray(dataTask)
    ? dataTask.slice((currentPage - 1) * pageSize, currentPage * pageSize)
    : [];

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-hover table-striped align-middle">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Description</th>
                <th>Due Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {dataTask &&
                dataTask.length > 0 &&
                currentData.map((project, index) => (
                  <tr key={project._id}>
                    <td>{(currentPage - 1) * pageSize + index + 1}</td>
                    <td>{project.title}</td>
                    <td className="text-truncate" style={{ maxWidth: "250px" }}>
                      {project.description}
                    </td>
                    <td>{moment(project.dueDate).format("DD-MM-YYYY")}</td>
                    <td>
                      <span
                        className={`badge ${
                          project.isCompleted === true
                            ? "bg-success"
                            : "bg-warning"
                        }`}
                      >
                        {project.isCompleted === true
                          ? "Completed"
                          : "Not Finish"}
                      </span>
                    </td>
                    <td className="d-flex gap-2 flex-column flex-md-row">
                      {project.isCompleted === true ? (
                        <Button
                          disabled={true}
                          style={{ height: "37.6px" }}
                          className="btn btn-success mb-2 mb-sm-0"
                        >
                          Finish
                        </Button>
                      ) : (
                        <button
                          onClick={() => {
                            hanldeFinishTask(project._id);
                          }}
                          className="btn btn-success mb-2 mb-sm-0"
                        >
                          Finish
                        </button>
                      )}

                      <button
                        onClick={() => {
                          handleDeleteTask(project._id);
                        }}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              {!dataTask && dataTask.length === 0 && <div></div>}
            </tbody>
          </table>
        </div>

        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={dataTask.length}
          onChange={handlePageChange}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
};

export default ProjectTable;
