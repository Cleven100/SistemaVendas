import React from 'react'
import Link from 'next/link';

const Menu: React.FC = () => {
    return (

        <aside className='column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile'>
            <p className="menu-label is-hidden-touch">
                My Sales
            </p>
            <ul className="menu-list">
                <MenuItem href="/" label="home" />
                <MenuItem href="/signup" label="SignUp" />
                <MenuItem href="/config" label="Config" />
            </ul>
        </aside>
    )
}

interface MenuItemProps {
    href: string;
    label: string;
}

const MenuItem: React.FC<MenuItemProps> = (props: MenuItemProps) => {
    return (
        <li>
            <Link href={props.href}>
                <a>
                    <span className="icon"></span> {props.label}
                </a>
            </Link>
        </li>
    )
}



export default Menu