import React from 'react'

const Links = React.forwardRef((props, refs) => {
    const { linksContainerRef, linksRef } = refs

    console.log(`linksRef Links: ${ JSON.stringify(linksRef) }`)
    return (
        <div className='links-container' ref={ linksContainerRef }>
            <ul className="links" ref={ linksRef }>
                { props.links.map((link) => {
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
})

export default Links