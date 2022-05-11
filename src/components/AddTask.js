import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { Rating } from 'react-simple-star-rating'
const AddTask = ({handleadd}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [form, setForm] = useState({
      name:"",image:'',rate:null
    })
    const handlesubmit = (e) => {
      e.preventDefault();
      handleadd({...form,done:false,id: Math.random(),rate:rating})
      setForm({name:"",image:'',
    })
    handleClose() 
    }

    const handlechange = (e) => { 
      setForm({...form,[e.target.name]:e.target.value
      })
    }
    const [rating, setRating] = useState(0) // initial rating value

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)
    // other logic
  }

    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Add task
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
          
          </Modal.Header>
          <Modal.Body>
              <form onSubmit={handlesubmit}>
                  <label htmlFor="">name</label>
                  <input type="text" onChange={handlechange} value={form.name} name='name'required />
                  <label htmlFor="">image</label>
                  <input type="url" onChange={handlechange} value={form.image} name='image'required/>
                  <label htmlFor="">rate</label>
                  <Rating onClick={handleRating} ratingValue={rating} /* Available Props */ />
                  <button>submit</button>
              </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
              </Button>

          </Modal.Footer>
        </Modal>
      </>
    );
}

export default AddTask
