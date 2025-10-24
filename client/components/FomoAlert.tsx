import React, { useState, useEffect } from "react";
import gsap from "gsap";

const FomoAlert: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!isVisible) return;

    const timeline = gsap.timeline();

    // Animate in
    timeline.to(".fomo-alert", {
      duration: 0.5,
      y: 0,
      opacity: 1,
      ease: "power2.out",
    });

    // Hide after 15 seconds
    timeline.to(
      ".fomo-alert",
      {
        duration: 0.5,
        y: -100,
        opacity: 0,
        ease: "power2.in",
      },
      "+=15"
    );

    // Re-show after 10 seconds total
    const hideTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 10000);

    return () => clearTimeout(hideTimeout);
  }, [isVisible]);

  return (
    <div
      className="fomo-alert fixed top-20 left-0 right-0 z-40 bg-gradient-to-r from-orange-500 to-red-500 text-white text-center py-3 px-4"
      style={{
        transform: "translateY(-100px)",
        opacity: 0,
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
        <span className="text-lg font-bold">🚀 Only 5 pilot slots left this month!</span>
        <button
          onClick={() => setIsVisible(false)}
          className="ml-4 font-semibold hover:bg-white/20 px-3 py-1 rounded-lg transition-colors"
        >
          Reserve Now
        </button>
      </div>
    </div>
  );
};

export default FomoAlert;
