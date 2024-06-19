import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { propTypes } from 'react-bootstrap/esm/Image';

function AddCity(props) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [img, setImg] = useState('');

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
     <button
      onClick={handleShow}
      className="block mx-auto m-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
      + Add City
     </button>
     <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add City</Modal.Title>
        </Modal.Header>
        <Modal.Body>
  <form
    onSubmit={(e) => {
      e.preventDefault();
      console.log('hello from editcity');
      console.log(props.id, name, description);
      setName('');
      setDescription('');
      setImg('');
      props.newCity(name, description, img);
    }}
    id='editmodal' class="w-full max-w-xs">
    <div class="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="cityname">
        City Name
      </label>
      <input
       className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="cityname"
        placeholder="New York" 
        type="text" 
        value={name}
        onChange={(e) => { setName(e.target.value)} }
        />
    </div>
    <div class="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="img">
        Image URL
      </label>
      <input
       className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="img"
        placeholder="https://megalopolis.city/image.jpg"
        type="text" 
        value={img} 
        onChange={(e) => { setImg(e.target.value)} }
      />
    </div>
    <div class="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="description">
        Description
      </label>
      <input
       className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="description" 
        placeholder="The city that never sleeps."
        type="text" 
        value={description} 
        onChange={(e) => { setDescription(e.target.value)} }
      />
    </div>
  </form>    
        </Modal.Body>
        <Modal.Footer>
        <button className="bg-slate-400 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded" onClick={handleClose}>Close</button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" form="editmodal">Add</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddCity;