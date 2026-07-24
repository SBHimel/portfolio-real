import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useGsap = (callback: () => void, dependencies: any[] = []) => {
  useLayoutEffect(() => {
    const ctx = gsap.context(callback);
    return () => ctx.revert();
  }, dependencies);
};
