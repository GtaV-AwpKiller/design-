import React, { useEffect, useState } from "react";

function Lol() {
    const [data, setData] = useState(null);
    const [toggle, setToggle] = useState(false);
    const [value, setValue] = useState();

    const click = () => setToggle((prev) => !prev);
    useEffect(() => {
        setTimeout(() => {
            setData({});
        }, 100);
    }, []);
    return (
        <div>
            <h1 data-testid="value-elem">{value}</h1>
            {toggle === true && <div data-testid="toggle-elem"> toggle</div>}
            {data && <div>data</div>}
            <h1>lol</h1>
            <button data-testid="toggle-btn" onClick={click}>
                lol
            </button>
            <input
                onChange={(e) => setValue(e.target.value)}
                type="text"
                placeholder="inp val"
            />
        </div>
    );
}

export default Lol;
