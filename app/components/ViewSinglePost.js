import React, { useContext, useEffect, useState } from "react";
import Page from "./Page";
import { Link, useNavigate, useParams } from "react-router-dom";
import Axios from "axios";
import LoadingDotsIcon from "./LoadingDotsIcon";
import ReactMarkdown from "react-markdown";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import NotFound from "./NotFound";
import StateContext from "../StateContext";
import DispatchConetext from "../DispatchContext";

function ViewSinglePost() {
  const navigate = useNavigate();
  const appDispatch = useContext(DispatchConetext);
  const appState = useContext(StateContext);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState();

  useEffect(() => {
    const ourRequest = new AbortController();
    // const ourRequest = Axios.CancelToken().source() //CancelToken is outdated
    async function fetchPost() {
      try {
        const response = await Axios.get(`/post/${id}`, { signal: ourRequest.signal });
        setPost(response.data);
        setIsLoading(false);
      } catch (e) {
        console.log("There was an error in viewing single post");
      }
    }
    fetchPost();

    return () => {
      ourRequest.abort();
    };
  }, [id]);

  if (!isLoading && !post) {
    return <NotFound />;
  }

  if (isLoading)
    return (
      <Page title="...">
        <LoadingDotsIcon />
      </Page>
    );

  const date = new Date(post.createdDate);
  const dateFormatted = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

  function isOwner() {
    if (appState.loggedIn) {
      return appState.user.username == post.author.username;
    }
    return false;
  }

  async function deleteHandler() {
    const areYouSure = window.confirm("Are you sure you want to delete this post");
    if (areYouSure) {
      try {
        const response = await Axios.delete(`/post/${id}`, { data: { token: appState.user.token } });
        if (response.data == "Success") {
          //1. Display a falsh message
          appDispatch({ type: "flashMessages", value: "Post was successfully deleted." });
          //2. Redirect to current user's profile
          navigate(`/profile/${appState.user.username}`);
        }
      } catch (error) {
        console.log("There was a problem in deleting the post.");
      }
    }
  }

  return (
    <Page title={post.title}>
      <div className="d-flex justify-content-between">
        <h2>{post.title}</h2>
        {isOwner() && (
          <span className="pt-2">
            <Link to={`/post/${post._id}/edit`} data-tooltip-content="Edit" data-tooltip-id="edit" className="text-primary mr-2">
              <i className="fas fa-edit"></i>
            </Link>
            <ReactTooltip id="edit" className="custom-tooltip" />{" "}
            <Link onClick={deleteHandler} data-tooltip-content="Delete" data-tooltip-id="delete" className="delete-post-button text-danger">
              <i className="fas fa-trash"></i>
            </Link>
            <ReactTooltip id="delete" className="custom-tooltip" />
          </span>
        )}
      </div>

      <p className="text-muted small mb-4">
        <Link to={`/profile/${post.author.username}`}>
          <img className="avatar-tiny" src={post.author.avatar} />
        </Link>
        Posted by <Link to={`/profile/${post.author.username}`}>{post.author.username}</Link> on {dateFormatted}
      </p>

      <div className="body-content">
        <ReactMarkdown children={post.body} allowedElements={["p", "br", "strong", "em", "h1", "h2", "h3", "h4", "h5", "h6", "ul", "ol", "li"]} />
      </div>
    </Page>
  );
}

export default ViewSinglePost;
