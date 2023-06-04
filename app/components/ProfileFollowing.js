import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useParams, Link } from "react-router-dom";
import LoadingDotsIcon from "./LoadingDotsIcon";

function ProfileFollowing() {
  const { username } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const ourRequest = new AbortController();
    async function fetchPosts() {
      try {
        const response = await Axios.get(`/profile/${username}/following`, { signal: ourRequest.signal });
        setPosts(response.data);
        setIsLoading(false);
      } catch (e) {
        console.log("There was a problem in posts.", e);
      }
    }
    fetchPosts();
    return () => {
      ourRequest.abort();
    };
  }, [username]);

  if (isLoading) return <LoadingDotsIcon />;

  return (
    <div className="list-group">
      {posts.length > 0 &&
        posts.map((following, index) => {
          return (
            <Link key={index} to={`/profile/${following.username}`} className="list-group-item list-group-item-action">
              <img className="avatar-tiny" src={following.avatar} /> {following.username}
            </Link>
          );
        })}
      {posts.length == 0 && <div className="list-group-item list-group-item-action">No Folllowing yet</div>}
    </div>
  );
}

export default ProfileFollowing;
