import { useEffect, useRef } from "react";

declare global {
  interface Window {
    VANTA: any;
  }
}

const Trunk: React.FC = () => {
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scriptP5 = document.createElement("script");
    scriptP5.src =
      "https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.min.js";
    scriptP5.async = true;
    document.body.appendChild(scriptP5);

    const scriptVanta = document.createElement("script");
    scriptVanta.src =
      "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
    scriptVanta.async = true;
    document.body.appendChild(scriptVanta);

    scriptVanta.onload = () => {
      const scriptTrunk = document.createElement("script");
      scriptTrunk.src =
        "https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.24/vanta.trunk.min.js";
      scriptTrunk.async = true;
      document.body.appendChild(scriptTrunk);

      scriptTrunk.onload = () => {
        // @ts-ignore (since VANTA is not typed)
        if (window.VANTA && vantaRef.current) {
          window.VANTA.TRUNK({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: window.innerHeight,
            minWidth: window.innerWidth,
            scale: 1.0,
            scaleMobile: 1.0,
          });
        }
      };
    };

    return () => {
      document.body.removeChild(scriptP5);
      document.body.removeChild(scriptVanta);
    };
  }, []);

  return (
    <div ref={vantaRef} className="absolute top-0 left-0 w-full h-full -z-0" />
  );
};

export default Trunk;
