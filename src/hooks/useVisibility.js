import { useState } from "react";

export function useVisibility({ initialValues = false } = {}) {
  const [isVisible, setIsVisible] = useState(initialValues);

  const handleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return {
    isVisible,
    handleVisibility,
  };
}
