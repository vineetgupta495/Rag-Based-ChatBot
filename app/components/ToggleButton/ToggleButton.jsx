import React, { useState } from 'react';

function ToggleButton({ inputOne = "", inputTwo = "", onChange }) {
    const [isOn, setIsOn] = useState(false);

    const handleToggle = () => {
        const newState = !isOn;
        setIsOn(newState);
        if (onChange) {
            onChange(newState ? inputOne : inputTwo);
        }
    };

    return (
        <div>
            <button onClick={handleToggle} className="backdrop-blur-2xl rounded-lg p-2" style={{boxShadow: "10px 20px 50px 10px rgba(0,0,0,0.3)"}} >
                {isOn ? inputOne : inputTwo}
            </button>
        </div>
    );
}

export default ToggleButton;
