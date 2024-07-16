"use client";

import useSpotify from "../../hooks/useSpotify";

const ProfilePage = () => {
  const { userData, error } = useSpotify();

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!userData) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{userData.display_name}'s Profile</h1>
      <img src={userData.images[0].url} alt="Profile" />
    </div>
  );
};

export default ProfilePage;
