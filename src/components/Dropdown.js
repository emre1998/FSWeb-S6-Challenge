import {useState} from "react";

function Dropdown ({title,children}) {
    const [isOpen,setIsOpen] = useState(false);

    return ( 
        <div classname="dropDown">
            <dic classname="dropDown_title" onClick={()=> setIsOpen(!isOpen)}>{title}</dic>
            {isOpen && <div className="dropDown_detail">{children}</div>}
        </div>
    )
}

export default Dropdown;