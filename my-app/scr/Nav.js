import React, { useState } from 'react';
import { Modal, ModalBody, ModalHeader, Input, ModalFooter } from 'reactstrap';
import './Main.css';
// import Icon from 'react-native-vector-icons/FontAwesome';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-wvfXpDd3pqb5xjX7F7Ku5RZfu8kHJjZPBUdmlb2s/A7aCC6lAJoW0GpXOi8DPOeEWOd1txD8hJDmM07XVq0v1A==" crossorigin="anonymous" referrerpolicy="no-referrer" />

// ... (imports and existing code)

function MainComponent() {
    const [modal, setModal] = useState(false);
    const [taskDetails, setTaskDetails] = useState({
      name: '',
      startDate: '',
      endDate: '',
      status: '',
    });
  
    const handleInputChange = (e) => {
      // ... (existing code)
    };
  
    const handleAddTask = () => {
      // ... (existing code)
    };
  
    return (
      <>
        <div className="container-fluid">
          <div className="row">
            {/* Left Navigation */}
            <nav className="col-md-2 col-lg-2 d-md-block bg-light sidebar">
              <div className="sidebar-sticky">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link task-boards" href="#">
                      <i className="fas fa-columns mr-2"></i> Task Boards
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link freelance-project" href="#">
                      <i className="fas fa-briefcase mr-2"></i> Freelance Project
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link freelance-project" href="#">
                      <i className="fas fa-briefcase mr-2"></i> SBI Outsource
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link freelance-project" href="#">
                      <i className="fas fa-briefcase mr-2"></i> HPCL Project 1
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link freelance-project" href="#">
                      <i className="fas fa-briefcase mr-2"></i> Freelance Project
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link add-project" href="#">
                      + Add new project
                    </a>
                  </li>
                  {/* Add more nav items as needed */}
                </ul>
              </div>
            </nav>
  
            {/* Main Content */}
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4 main-content">
              {/* Your existing MainComponent content */}
              {/* ... */}
            </main>
          </div>
        </div>
  
        <Modal size="lg" isOpen={modal} toggle={() => setModal(!modal)} id="form-id">
          {/* Your existing modal content */}
          {/* ... */}
        </Modal>
      </>
    );
  }
  
  export default MainComponent;