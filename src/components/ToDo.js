import React from 'react'
import {Card, Button} from 'react-bootstrap'
import { Rating } from 'react-simple-star-rating'

const ToDo = ({el,handledelete}) => {
  return (
    <div>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={el.image} />
  <Card.Body>
    <Card.Title>{el.name}</Card.Title>
    <Card.Text><Rating  ratingValue={el.rate} readonly={true} /* Available Props */ /></Card.Text>
    <Button variant="primary">Edit</Button>
    <Button variant="primary"onClick={()=>handledelete(el.id)}>Delete</Button>
  </Card.Body>
  </Card>
    </div>
  )
}

export default ToDo