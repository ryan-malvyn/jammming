"use client";

import { useEffect, useState } from "react";
import useSpotify from "@/hooks/useSpotify";

const WelcomePage = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const accessToken = localStorage.getItem("spotifyAccessToken");
    if (accessToken) {
      setToken(accessToken);
    }
  }, []);

  return <div></div>;
};

export default WelcomePage;
