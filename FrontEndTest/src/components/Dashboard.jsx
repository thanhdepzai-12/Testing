import React from "react";
import DashboardCard from "./DashboardCard";
import SearchBar from "./CreateTask";
import ProjectTable from "./ProjectTable";
import CreateTask from "./CreateTask";
import FilterTask from "./FilterTask";
import { useModal } from "../Context/ModalContext";

const Dashboard = () => {
  const { dataTask, completedTasks, incompleteTasks } = useModal();
  const cards = [
    { icon: "fa-archive", title: dataTask.length, description: "Total Projects" },
    { icon: "fa-th", title: completedTasks.length, description: "Completed Projects" },
    { icon: "fa-file", title: incompleteTasks.length, description: "Incomplete Tasks" },
  ];

  return (
    <div className="container my-4">
      <div className="row g-3">
        {cards.map((card, index) => (
          <DashboardCard key={index} {...card} />
        ))}
      </div>
      <div className="row my-4">
        <div className="row">
          <div className="col-8">
            <CreateTask />
          </div>
          <div className="col-4">
            <FilterTask />
          </div>
        </div>
        <div className="col-12 mt-4">
          <ProjectTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
