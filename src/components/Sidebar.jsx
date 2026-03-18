import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar({ menus }) {
    return (
        <>
            <div className="container bg-light p-0">
                <ul className="list-group">
                    <li className="list-group-item">
                        <b>Library <br />Management</b>
                    </li>
                    {
                        menus.map((item, index) => (
                            <li key={index} className="list-group-item">
                                <Link to={item.url}>
                                    {item.title}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default Sidebar