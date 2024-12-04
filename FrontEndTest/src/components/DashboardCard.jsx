import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faArchive, faTh, faFile } from '@fortawesome/free-solid-svg-icons'; // Import các icon cần sử dụng

const DashboardCard = ({ icon, title, description }) => {
  // Chọn icon dựa trên giá trị truyền vào
  let iconComponent;
  switch(icon) {
    case 'fa-archive':
      iconComponent = faArchive;
      break;
    case 'fa-th':
      iconComponent = faTh;
      break;
    case 'fa-file':
      iconComponent = faFile;
      break;
    default:
      iconComponent = faArchive; // Mặc định là fa-archive nếu không có icon hợp lệ
  }

  return (
    <div className="col-xl-3 col-md-6">
      <div className="card text-center shadow-sm">
        <div className="card-body">
          <div className="d-flex justify-content-center align-items-center">
            <FontAwesomeIcon icon={iconComponent} className="text-primary display-6" />
          </div>
          <h5 className="mt-3">{title}</h5>
          <p className="text-muted">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
