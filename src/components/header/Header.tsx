import React from 'react';
import { ListCheck } from 'tabler-icons-react';

export const Header = () => {
    return (
        <header className='headerContainer'>
            <ListCheck
                strokeWidth={1.6}
                size={50}
                color='white'
            />
            <div className='headerTitle'>
                Todo List app
            </div>
        </header>
    )
}