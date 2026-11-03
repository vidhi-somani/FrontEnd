
import { useState } from 'react';

function App() {

    // onClick event
    const handleClick = () => {
        alert('Button clicked!');
    };

    // onChange event
    const [name, setName] = useState('');

    const handleChange = (e) => {
        setName(e.target.value);
    };

    return (
        <div>
            <h1>React Synthetic Events</h1>

            {/* onClick */}
            <button onClick={handleClick}>
                Click Me
            </button>

            <br /><br />

            {/* onChange */}
            <input
                type="text"
                value={name}
                onChange={handleChange}
                placeholder="Enter your name"
            />

            <h3>Your Name: {name}</h3>
        </div>
    );
}

export default App;
