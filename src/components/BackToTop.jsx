import { useState, useEffect } from "react";
import "./BackToTop.css";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`back-to-top ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <span className="back-to-top-arrow">↑</span>
      <span className="back-to-top-text">Top</span>
    </button>
  );
}
