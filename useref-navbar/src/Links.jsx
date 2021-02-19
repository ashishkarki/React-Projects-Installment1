import React from 'react'

const Links = ({ links }) => {
    return (
        <div className="links-container show-container">
            <ul className="links">
                { links.map((link) => {
                    const { id, url, text } = link
                    return (
                        <li key={ id }>
                            <a href={ url }>{ text }</a>
                        </li>
                    )
                }) }
            </ul>
        </div>
    )
}

export default Links