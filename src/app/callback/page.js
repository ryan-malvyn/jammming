"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const CallbackPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.substring(1);
      const params = new URLSearchParams(hash);
      const accessToken = params.get("access_token");

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

  return <p>Processing token...</p>;
};

export default CallbackPage;
