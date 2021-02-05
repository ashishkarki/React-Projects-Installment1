import React from 'react';

const List = ({friends, deleteFren}) => {
    return (
        <>
            {friends.map(friend => {
                const {id, name, age, image} = friend

                return <article key={id} className="friend">
                    <img src={image} alt={name} />
                    <div>
                        <h4>{name}</h4>
                        <p>{age} years</p>
                        <button className="btn-small" onClick={() => deleteFren(id)}>
                            Delete
                        </button>
                    </div>

                </article>
            })}
        </>
    );
};

export default List;