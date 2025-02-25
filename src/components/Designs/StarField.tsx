import { useEffect, useRef } from "react";

type StarFieldProps = {
  starCount?: number;
  speed?: number;
};

const StarField: React.FC<StarFieldProps> = ({ starCount = 50, speed = 2 }) => {
  const starFieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const starField = starFieldRef.current;
    if (!starField) return;

    // Clear existing stars
    starField.innerHTML = "";
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Create stars
    const stars: HTMLDivElement[] = [];
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div");
      star.className = `star ${getStarColor(i)} ${getStarDistance(i)}`;
      star.style.top = `${Math.random() * height}px`;
      star.style.left = `${Math.random() * width}px`;
      star.style.width = `${getStarSize(i)}px`;
      star.style.height = `${getStarSize(i)}px`;
      star.style.borderRadius = "50%";
      star.style.position = "absolute";
      star.style.boxShadow = `0 0 15px ${getStarShadow(i)}`;
      starField.appendChild(star);
      stars.push(star);
    }

    // Animation
    let animationFrameId: number;
    const animateStars = () => {
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        const currentLeft = parseInt(star.style.left, 10);
        const leftChangeAmount = speed + getStarRelativeSpeed(i);
        let newLeft = currentLeft - leftChangeAmount;
        if (newLeft < 0) newLeft += width;
        star.style.left = `${newLeft}px`;
      }
      animationFrameId = requestAnimationFrame(animateStars);
    };

    animateStars();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [starCount, speed]);

  const getStarColor = (index: number) => {
    if (index % 8 === 0) return "bg-red-500";
    if (index % 10 === 0) return "bg-yellow-400";
    if (index % 17 === 0) return "bg-blue-500";
    return "bg-white";
  };

  const getStarDistance = (index: number) => {
    if (index % 6 === 0) return "";
    if (index % 9 === 0) return "near";
    if (index % 2 === 0) return "far";
    return "";
  };

  const getStarSize = (index: number) => {
    if (index % 9 === 0) return 4;
    if (index % 2 === 0) return 1;
    return 2;
  };

  const getStarShadow = (index: number) => {
    if (index % 8 === 0) return "rgba(255, 0, 0, 0.8)";
    if (index % 10 === 0) return "rgba(191, 187, 64, 0.8)";
    if (index % 17 === 0) return "rgba(68, 68, 255, 0.8)";
    return "rgba(255, 255, 255, 0.8)";
  };

  const getStarRelativeSpeed = (index: number) => {
    if (index % 6 === 0) return 1;
    if (index % 9 === 0) return 2;
    if (index % 2 === 0) return -1;
    return 0;
  };

  return (
    <div
      ref={starFieldRef}
      className="absolute w-screen h-[100dvh] bg-black overflow-hidden -z-0"
    ></div>
  );
};

export default StarField;
