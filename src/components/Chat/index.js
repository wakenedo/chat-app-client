import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client'

import './style.css'

let socket;

const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const ENDPOINT = 'localhost:5000'

    useEffect(() => {
        const { name, room } = queryString.parse(location)

        socket = io(ENDPOINT)

        setName(name);
        setRoom(room);

        socket.emit('join', { name, room }, ({ error }) => {
            alert(error)
        })

        console.log(socket);
    }, [ENDPOINT, location]);

    return (
        <h1>Chat</h1>
    )
}

export default Chat