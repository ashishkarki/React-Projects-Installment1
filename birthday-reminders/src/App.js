import React, {useState} from 'react';
import data from './data';
import List from './List';

function App() {
    const [friends, setFriends] = useState(data)

    const clearAll = () => {
        return setFriends([])
    }

    const rePopulate = () => setFriends(data)

    const deleteFriend = (id) => setFriends(() => {
        return friends.filter(friend => friend.id !== id)
    })

    return <main>
        <section className="container">
            <h3>{friends.length} birthdays today</h3>

            <List friends={friends} deleteFren={(id) => deleteFriend(id)}/>

            <button
                onClick={() => clearAll()}
                className="clear-all"
                disabled={!friends || friends.length === 0}>
                Clear All
            </button>

            <button
                onClick={() => rePopulate()}
                className="re-populate"
                disabled={friends && friends.length}>
                Re-Populate
            </button>
        </section>
    </main>;
}

export default App;