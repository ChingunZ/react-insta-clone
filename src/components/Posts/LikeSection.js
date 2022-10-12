// Look at the number of likes on line 26. Right now it's hard coded to '100'.
// Use a piece of data coming in through props to display the correct number of likes.
// You will also add an onClick handler that utilizes `likePost` to increase the count of likes.
// (As a stretch goal, you might want to prevent your user from "liking" the same post more than once.)
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";

const LikeSection = (props) => {
  // 🔥 Make sure the parent of LikeSection is passing the right props!
  const { dislikePost, likePost, numberOfLikes, postId, numberOfDislikes } = props;
  return (
    <div>
      <div className="like-section" key="likes-icons-container">
        <div
          className="like-section-wrapper"
          onClick={() => {
            likePost(postId);
          }}
          style={{ cursor: "pointer" }}
        >
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div className="like-section">
          <img
            onClick={() => {
              dislikePost(postId);
            }}
            style={{ cursor: "pointer" }}
            src="https://img.icons8.com/ios/50/000000/dislike.png"
            className="dislike"
          />
        </div>
        <div className="like-section-wrapper" style={{ cursor: "pointer" }}>
          <FontAwesomeIcon icon={faComment} />
        </div>
      </div>
      <div className="like-number-section">
        <p className="like-number">{numberOfLikes} likes</p>
        <p className="dislike-number">{numberOfDislikes} dislikes</p>
      </div>
    </div>
  );
};

export default LikeSection;
