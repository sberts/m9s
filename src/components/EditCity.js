import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { propTypes } from 'react-bootstrap/esm/Image';

function EditCity(props) {
  const [name, setName] = useState(props.name);
  const [description, setDescription] = useState(props.description);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
     <button onClick={handleShow} className="px-4 py-1 text-sm text-blue-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">Update</button>
     <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update City</Modal.Title>
        </Modal.Header>
        <Modal.Body>
  <form
    onSubmit={(e) => {
      handleClose();
      e.preventDefault();
      console.log(props.id, name, description);
      props.updateCity(props.id, name, description);
    }}
    id='editmodal' className="w-full max-w-xs">
    <div class="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="cityname">
        City Name
      </label>
      <input
       className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="cityname" 
        type="text" 
        value={name}
        onChange={(e) => { setName(e.target.value)} }
        />
    </div>
    <div class="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="description">
        Description
      </label>
      <input
       className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="description" 
        type="text" 
        value={description} 
        onChange={(e) => { setDescription(e.target.value)} }
      />
    </div>
  </form>    
        </Modal.Body>
        <Modal.Footer>
        <button className="bg-slate-400 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded" onClick={handleClose}>Close</button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" form="editmodal">Update</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditCity;