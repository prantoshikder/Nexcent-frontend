import { useEffect, useState } from "react";

export function useScrollDirection() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (typeof window === "undefined") return;

    // if (window.scrollY > lastScrollY && window.scrollY > 100) {
    if (window.scrollY > lastScrollY && window.scrollY > 170) {
      // scrolling down past a certain point
      setShowHeader(false);
    } else {
      // scrolling up or near the top
      setShowHeader(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY]);

  return { showHeader };
}
