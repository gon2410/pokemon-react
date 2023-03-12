import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const ComponenteA = ({name, image, base_xp, weight, height, abilities, stats, types}) => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

    return (
        <>
			<Col>
				<Card style={{ width: '13.8rem'}} className='mt-3'>
					<Card.Img variant="top" src={image}/>
					<Card.Body>
						<Card.Title className='text-capitalize'>{name}</Card.Title>
						<Card.Text>
							<ul>
								<li>Base Experience: {base_xp}</li>
								<li>Weight: {weight}</li>
								<li>Height: {height}</li>
							</ul>
						</Card.Text>
						<Button variant="primary" onClick={handleShow}>More...</Button>
					</Card.Body>
				</Card>
			</Col>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Image src={image} width={80}></Image>
					<Modal.Title className='text-capitalize ms-3'>{name}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<ul>
						<h6>Abilities</h6>
						{
							abilities.map((ability, index) => {
								return (
									<li key={index}>{ability.ability.name}</li>
								)
							})
						}
					</ul>

					<ul>
						<h6>Stats</h6>
						{
							stats.map((stat, index) => {
								return (
									<li key={index}>{stat.stat.name}: {stat.base_stat}</li>
								)
							})
						}
					</ul>

					<ul>
						<h6>Types</h6>
						{
							types.map((type, index) => {
								return (
									<li key={index}>{type.type.name}</li>
								)
							})
						}
					</ul>

				</Modal.Body>
			</Modal>
        </>
    )
}

export default ComponenteA