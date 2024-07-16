"use client";

import { useEffect } from "react";

const AuthPage = () => {
  useEffect(() => {
    const clientId = "d7c3571a88ac4263b2ed94751b8e13c8";
    const redirectUri = "http://localhost:3000/callback";
    const scopes = "user-read-private user-read-email";
    const authUrl = `https://accounts.spotify.com/authorize?response_type=token&client_id=${clientId}&scope=${encodeURIComponent(scopes)}&redirect_uri=${encodeURIComponent(redirectUri)}`;

    window.location.href = authUrl;
  }, []);

  return <p>Redirecting to Spotify...</p>;
};

export default AuthPage;
