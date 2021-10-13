import { useState, useLayoutEffect, useRef } from "react"

function useHover() {

    const[isHovered, setIsHovered] = useState(false);

    const ref = useRef(null);

    function enter() {
        setIsHovered(true);
    }

    function leave() {
        setIsHovered(false); 
    }
    // useLayout effect has to be used because if just useEffect() is used, then ref.current is undefined... due to some bugs in React 17
    useLayoutEffect(() => {
        ref.current.addEventListener("mouseenter", enter);        
        ref.current.addEventListener("mouseleave", leave);
        // Return a function as a cleanup function whenever the componenet will unmount
        return () => {
            ref.current.removeEventListener("mouseenter", enter);        
            ref.current.removeEventListener("mouseleave", leave);
        }
    },[])


    return [isHovered, ref]

}

export default useHover