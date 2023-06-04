import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useParams, Link } from "react-router-dom";
import LoadingDotsIcon from "./LoadingDotsIcon";

function ProfileFollowers() {
  const { username } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const ourRequest = new AbortController();
    async function fetchPosts() {
      try {
        const response = await Axios.get(`/profile/${username}/followers`, { signal: ourRequest.signal });
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
        posts.map((follower, index) => {
          return (
            <Link key={index} to={`/profile/${follower.username}`} className="list-group-item list-group-item-action">
              <img className="avatar-tiny" src={follower.avatar} /> {follower.username}
            </Link>
          );
        })}
      {posts.length == 0 && <div className="list-group-item list-group-item-action">No Followers yet.</div>}
    </div>
  );
}

export default ProfileFollowers;
