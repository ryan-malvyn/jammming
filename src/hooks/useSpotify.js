import { useEffect, useState } from "react";

const useSpotify = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("spotifyAccessToken");
      if (!token) {
        setError("No access token found");
        return;
      }

      try {
        const response = await fetch("https://api.spotify.com/v1/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setUserData(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  return { userData, error };
};

export default useSpotify;
