import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Moment from "react-moment";

import { IoMdThumbsUp, IoMdThumbsDown } from "react-icons/io";
import { FaTimes } from "react-icons/fa";

import { addLike, removeLike } from "../../actions/post";

const PostItem = ({
  addLike,
  removeLike,
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date },
}) => {
  return (
    <div className="post bg-white p-1 my-1">
      <div>
        <a href="profile">
          <img className="round-img" src={avatar} alt="avatar" />
          <h4>{name}</h4>
        </a>
      </div>
      <div>
        <p className="my-1">{text}</p>
        <p className="post-date">
          <Moment format="YYYY/MM/DD">{date}</Moment>
        </p>
        <button
          type="button"
          onClick={() => addLike(_id)}
          className="btn btn-light"
        >
          <span className="icon-align">
            <IoMdThumbsUp />
          </span>
          {likes.length > 0 && <span className="m-l">{likes.length}</span>}
        </button>
        <button
          type="button"
          onClick={() => removeLike(_id)}
          className="btn btn-light"
        >
          <span className="icon-align">
            <IoMdThumbsDown />
          </span>
        </button>
        <Link to={`post/${_id}`} className="btn btn-primary">
          Discussion
          {comments.length > 0 && (
            <span className="comment-count m-l">{comments.length}</span>
          )}
        </Link>
        {!auth.loading && user === auth.user._id && (
          <button type="button" className="btn btn-danger">
            <FaTimes />
          </button>
        )}
      </div>
    </div>
  );
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addLike, removeLike })(PostItem);
