import React, { useState } from 'react';
import { Modal, ModalBody, ModalHeader, Input, ModalFooter } from 'reactstrap';
import './Main.css';
{/* <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
  integrity="sha384-oAqVnGD8XDz7JQGcfwKGevFUhBpCv8I+tq5i5zT2uAd9xlzf2Crr0dd8IMIIVdj6"
  crossorigin="anonymous"
/> */}
//import Icon from 'react-native-vector-icons/FontAwesome';


function MainComponent() {
  const [modal, setModal] = useState(false);

  const [taskDetails, setTaskDetails] = useState({
    name: '',
    startDate: '',
    endDate: '',
    status: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTaskDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleAddTask = () => {
    setModal(false); // Close the modal immediately
    console.log('Task Details:', taskDetails);
    const taskDetailsDiv = document.getElementById('taskDetails');
    if (taskDetailsDiv) {
      const newDiv = document.createElement('div');
      newDiv.innerHTML = `
        <p>Name: ${taskDetails.name}</p>
        <p>Start Date: ${taskDetails.startDate}</p>
        <p>End Date: ${taskDetails.endDate}</p>
      `;

      newDiv.style.paddingBottom = '50px';
      taskDetailsDiv.appendChild(newDiv);
    }

    setTaskDetails({
      name: '',
      startDate: '',
      endDate: '',
    });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Left Navigation */}
        <nav className="col-md-2 col-lg-2 d-md-block bg-light sidebar">
          <div className="sidebar-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link task-boards" href="#">
                <i class="fa fa-id-card-o fa-2x " aria-hidden="true"></i>Task Boards
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link freelance-project" href="#">
                 <i name="nav" size={28} color="black"/> Freelance Project
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
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4 main-content">
          {/* Your existing MainComponent content */}
          {/* ... */}
        </main>
      </div>

      <Modal size="lg" isOpen={modal} toggle={() => setModal(!modal)} id="form-id">
        {/* Your existing modal content */}
        {/* ... */}
      </Modal>
      <Modal size='lg' isOpen={modal} toggle={() => setModal(!modal)} id="form-id">
        <ModalHeader toggle={() => setModal(!modal)}>Add new task</ModalHeader>
        <ModalBody>
          <form className='no-hover'>
            <div className='row'>
              <div className='col-md-12'>
                <label htmlFor='name'>Name of the Task</label>
                <input
                 type='text'
                 className='form-control'
                 placeholder='Text'
                 name='name'
                 value={taskDetails.name}
                 onChange={handleInputChange}
                />
              </div>
            </div>
            <br />
            <div className='row'>
              <div className='col-md-6'>
                <label>Start Date:</label>
                <input
                 type="date"
                 className='form-control'
                 name='startDate'
                 value={taskDetails.startDate}
                 onChange={handleInputChange}
                />
              </div>
              <div className='col-md-6'>
                <label>End Date:</label>
                <input
                 type="date"
                 className='form-control'
                 name='endDate'
                 value={taskDetails.endDate}
                 onChange={handleInputChange}
                />
              </div>
            </div>
            <br />
            <div className='row'>
              <div className='col-md-12'>
                <label for="statusDropdown">Status</label>
                <Input
                 type="select"
                 id="statusDropdown"
                 name='status'
                 value={taskDetails.status}
                 onChange={handleInputChange}
                >
                 <option value="">To Do</option>
                 <option value="progress" disabled>Progress</option>
                 <option value="inProgress" disabled>In Progress</option>
                 <option value="completed" disabled>Completed</option>
                </Input>
              </div>
            </div>
          </form>
          <br />
          <ModalFooter className="justify-content-end">
            <button
              type="button"
              className="btn text-primary btn-block"
              onClick={() => setModal(!modal)}
            >
              Cancel
            </button>
            &nbsp; &nbsp; &nbsp;
            <button
              type="button"
              className="btn btn-block btn-primary"
              onClick={handleAddTask}
            >
              Add
            </button>
          </ModalFooter>
        </ModalBody>
      </Modal>

      <div className="container col-md-12">
        <div className="row justify-content-end">
          <div className="col-md-10">
            <div className='heading col-md-12 text-right'>My Projects</div>
            <br></br>
            <div className='row-divider'>
            <div className='row '>
              <div className='col-md-2 text-primary'>
                <span className='background1 '>To Do</span>
              </div>
              <div className='col-md-1'></div>
              <div className='col-md-2 text-danger ' >
                <span className='background2'>InProgress</span>
              </div>
              <div className='col-md-1'></div>
              <div className='col-md-2 text-primary ' >
                <span className='background3'>InReview</span>
              </div>
              <div className='col-md-1'></div>
              <div className='col-md-2 text-success'>
                <span className='background4'>Completed</span>
              </div>
              <div className='col-md-1'></div>
            </div>
</div>
            <br></br>
            <div className='container-fluid'>
              <div className='row'>
                <button
                  type="button"
                  className="btn col-md-2 btn-block btn1"
                  onClick={() => setModal(true)}
                >
                       <span className='background1'>+Add New</span>
                </button>
                <div className='col-md-1'></div>
                <button
                  type="button"
                  className="btn col-md-2 btn-block btn2"
                >
                  <span className='background2'>+Add New</span>
                </button>
                <div className='col-md-1'></div>
                <button       
                  type="button"
                  className="btn col-md-2 btn-block btn3"
                >
                         <span className='background3'>+Add New</span>
                </button>
                <div className='col-md-1'></div>
                <button
                  type="button"
                  className="btn col-md-2 btn-block btn4"
                >
                        <span className='background4'>+Add New</span>
                </button>
                <div className='col-md-1'></div>
              </div>
              <div>
                <br />
                <div id="taskDetails" className='col-md-2 '></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
