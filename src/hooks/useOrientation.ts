"use client";

import { useState, useEffect } from "react";

export function useOrientation() {
  const [orientation, setOrientation] = useState({ beta: 0, gamma: 0 });
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleOrientation = (event: DeviceOrientationEvent) => {
      // Normalize values: beta (-180 to 180), gamma (-90 to 90)
      // We'll limit them for subtle effect
      setOrientation({
        beta: event.beta || 0,
        gamma: event.gamma || 0,
      });
    };

    const initOrientation = async () => {
      if (typeof DeviceOrientationEvent !== "undefined") {
        setIsSupported(true);
        
        // Handle iOS 13+ permission request
        // Note: This usually needs to be triggered by a user gesture.
        // For subtle parallax, we'll listen if it's already granted or available.
        if (
          typeof (DeviceOrientationEvent as any).requestPermission === "function"
        ) {
          try {
            // We don't force a popup here as it requires a click,
            // but we'll register the listener in case it's already active.
            window.addEventListener("deviceorientation", handleOrientation);
          } catch (error) {
            console.error("Device orientation permission error:", error);
          }
        } else {
          window.addEventListener("deviceorientation", handleOrientation);
        }
      }
    };

    initOrientation();

    return () => {
      window.removeEventListener("deviceorientation", handleOrientation);
    };
  }, []);

  return { ...orientation, isSupported };
}
