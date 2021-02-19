import React from 'react'

const SocialLinks = ({ social }) => {
    return (
        <ul className="social-icons">
            {social.map((iconObj) => {
                const { id, url, icon } = iconObj
                return <li key={ id }>
                    <a href={ url }>{ icon }</a>
                </li>
            }) }
        </ul>
    )
}

export default SocialLinks