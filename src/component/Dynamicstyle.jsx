import { useState } from "react";

function Dynamicstyle() {
    const [inActive, setIsActive] = useState(true);
 
    const Activity = () => {
        setIsActive(!inActive);
    };
    return (
        <>
            <button className={inActive ? "btn-active" : "btn-inactive"} onClick={Activity}>
                {inActive ? "Active" : "DeActive"}
            </button>
        </>
    );
}

export default Dynamicstyle;
 