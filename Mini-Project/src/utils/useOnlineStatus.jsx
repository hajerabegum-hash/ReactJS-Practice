import React, { useEffect, useState } from "react";


export const useOnlineStatus = () => {
  const [isOnline, setisOnline] = useState(true);

  useEffect(() => {
    window.addEventListener("Offline", () => {
      setisOnline = false;
    });
    window.addEventListener("Online", () => {
      setisOnline = true;
    });
  });
  return isOnline;
};
