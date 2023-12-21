import React from 'react'
import { useNote } from './NoteLayout';
import { Badge, Button, Col, Row, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Note = () => {
    const note = useNote();
    return (
        <>
            <Row className='align-items-center mb-4'>
                <Col>
                    <h1>{note.title}</h1>
                    {note.tags.length > 0 && (
                        <Stack
                            gap={1}
                            direction='horizontal'
                            className='justify-content-center flex-wrap'
                        >
                            {note.tags.map(tag => (
                                <Badge className='text-truncate' key={tag.id}>{tag.label}
                                </Badge>
                            ))}
                        </Stack>
                    )}
                </Col>
                <Col xs="auto">
                    <Stack gap={2} direction='horizontal'>
                        <Link to={`/${note.id}/edit`}>
                            <Button variant="primary">Edit</Button>
                            <Button variant="outline-danger">Delete</Button>
                            <Link to="/">
                                <Button variant="outline-secondary">Back</Button>
                            </Link>
                        </Link>
                    </Stack>
                </Col>
            </Row>
        </>
    )
}

export default Note