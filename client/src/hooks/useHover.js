// Credit to https://usehooks.com/
import { useRef, useState, useEffect } from "react";

export const useHover = () => {
  // set hover state to false and create setter for it
  const [hover, setHover] = useState(false);
  // initializes current ref though to access it, you have to access the current property of it. 
  const ref = useRef(null);

  // on hover, set hover to true, otherwise, set to false
  const handleMouseOver = () => setHover(true);
  const handleMouseOut = () => setHover(false);

  useEffect( 
    () => {
      // grab current ref of what is hovered
      const currentRef = ref.current;
      if (currentRef) {
        currentRef.addEventListener('mouseover', handleMouseOver);
        currentRef.addEventListener('mouseout', handleMouseOut);

        return () => {
          // when hook is unmounted, remove listeners
          currentRef.removeEventListener('mouseover', handleMouseOver);
          currentRef.removeEventListener('mouseout', handleMouseOut);
        };
      }
    },
    [ref.current] // Recall only if ref changes, otherwise, listeners are added and removed every time there is a hover
  );
  return [ref, hover];
}