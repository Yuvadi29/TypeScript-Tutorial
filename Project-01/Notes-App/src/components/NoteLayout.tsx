import React from 'react'
import { Note } from '../App'
import { Navigate, Outlet, useParams } from 'react-router-dom'

type NoteLayoutProps = {
    notes: Note[]
}

const NoteLayout = ({ notes }: NoteLayoutProps) => {
    const { id } = useParams();
    const note = notes.find(n => n.id === id)

    if (note == null) return <Navigate to="/" replace />

    return <Outlet context={note} />
    return (
        <div>NoteLayout</div>
    )
}

export default NoteLayout;