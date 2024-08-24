import { useEffect, useState } from "react";

export default function RenderWithDelay({ delay, children }) {
  const [isRendering, setRendering] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setRendering(true);
    }, delay);
  }, [delay]);

  return isRendering ? children : <></>;
}