"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const CallbackPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [token, setToken] = useState(null);
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Searching for access token
      const hash = window.location.hash.substring(1);
      const params = new URLSearchParams(hash);
      const accessToken = params.get("access_token");
      console.log(accessToken);

      // Searching for refresh token
      const hash2 = window.location.hash.substring(1);
      const params2 = new URLSearchParams(hash);
      const refreshToken = params.get("refresh_token");
      console.log(refreshToken);
      const storedToken = localStorage.getItem("refresh_token");
      console.log(storedToken);

      if (accessToken) {
        setToken(accessToken);
        localStorage.setItem("spotifyAccessToken", accessToken);

        // Redirect to a welcome or dashboard page
        router.replace("/welcome");
      } else {
        console.error("No access token found in URL");
      }
    }
  }, [router, searchParams]);
};

export default CallbackPage;
