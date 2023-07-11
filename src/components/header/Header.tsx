import { ListCheck } from 'tabler-icons-react';
import s from './Header.module.css'

export const Header = () => {
    return (
        <header className={s.headerContainer}>
            <ListCheck
                strokeWidth={1.6}
                size={50}
                color='white'
            />
            <div className={s.headerTitle}>
                Todo List app
            </div>
        </header>
    )
}