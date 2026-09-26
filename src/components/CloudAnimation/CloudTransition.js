import { useState } from "react";
// import "./CloudTransition.css";

export default function CloudTransition({ children }) {
  const [isAnimating, setIsAnimating] = useState(false);

  const transitionTo = (callback) => {
    if (isAnimating) return;

    setIsAnimating(true);

    // Tunggu awan menutupi layar
    setTimeout(() => {
      callback();
    }, 500);

    // Setelah component baru dirender,
    // awan mulai keluar
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };

  return (
    <>
      {children(transitionTo, isAnimating)}
    </>
  );
}