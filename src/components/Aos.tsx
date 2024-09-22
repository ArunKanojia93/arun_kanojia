"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const AOSInit = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-quad",
      duration: 1000,
    });

    AOS.refresh();

    return () => {
      AOS.refreshHard();
    };
  }, []);

  return null;
};
