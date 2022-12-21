import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Rating from '@mui/material/Rating';
import { useState } from 'react';
/*function that adds new movie into the movie cards list*/
function AddItem({addMovie}) {
    const [show, setShow]= useState (false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newMovie, setNewMovie] = useState({
        title : "", description: "", posterURL:'', rating:0,});

    const handleChange = (e) => {setNewMovie({...newMovie, [e.target.name]: e.target.value})};

    const handleAddMovie = ()=> {
        addMovie(newMovie);
        handleClose();
    };
    return (
        <div>
            {/*Modal form to add movie détails and save the changes*/}
            <Button variant="primary" onClick={handleShow}>
            Add Movie
            </Button>

            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Movies</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                    onChange={handleChange}
                        type="text"
                        name = "title"
                        placeholder="Enter movie's title"
                        autoFocus
                    />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                        >
                        <Form.Label>Description</Form.Label>
                        <Form.Control 
                        onChange={handleChange}
                        type="text"
                        name = "description"
                        placeholder="Enter movie's description"
                        autoFocus
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>Poster Url</Form.Label>
                        <Form.Control 
                            onChange={handleChange}
                            type="text"
                            name = "posterURL"
                            placeholder="Enter Poster Link"
                            autoFocus
                        />
                    </Form.Group>
                    
                    <Rating
                        name="simple-controlled"
                        max = {10}
                        defaultValue={0}
                        onChange={(_event, newValue) => {
                            setNewMovie({...newMovie, rating: newValue});
                        }}
                    />
                </Form>
            </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleAddMovie}>
                Save Changes
            </Button>
        </Modal.Footer>
    </Modal>
        </div>
    );
}
export default AddItem;