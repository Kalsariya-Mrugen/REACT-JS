import React, { useState } from 'react';

const UserProfileCard = ({ name, age, bio, location, profilePicture }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [userBio, setUserBio] = useState(bio);
  const [editBio, setEditBio] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  const handleBioChange = (e) => {
    setUserBio(e.target.value);
  };

  const saveBio = () => {
    setEditBio(false);
  };

  const addComment = () => {
    setComments([...comments, { text: newComment, timestamp: new Date().toISOString() }]);
    setNewComment('');
  };

  const deleteComment = (index) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
  };

  return (
    <div className="user-profile-card">
      <img src={profilePicture} alt={`${name}'s profile`} className="profile-picture" />
      <h2>{name}</h2>
      <p>{age} years old</p>
      <p>Location: {location}</p>
      {editBio ? (
        <div>
          <textarea value={userBio} onChange={handleBioChange}></textarea>
          <button onClick={saveBio}>Save</button>
        </div>
      ) : (
        <p>{userBio.length > 100 ? `${userBio.slice(0, 100)}...` : userBio}</p>
      )}
      <button onClick={() => setEditBio(!editBio)}>Edit Bio</button>
      <button onClick={handleFollow}>{isFollowing ? 'Unfollow' : 'Follow'}</button>
      <div className="comments-section">
        <h3>Comments</h3>
        {comments.map((comment, index) => (
          <div key={index} className="comment">
            <p>{comment.text}</p>
            <small>{new Date(comment.timestamp).toLocaleString()}</small>
            <button onClick={() => deleteComment(index)}>Delete</button>
          </div>
        ))}
        <textarea value={newComment} onChange={(e) => setNewComment(e.target.value)}></textarea>
        <button onClick={addComment}>Add Comment</button>
      </div>
    </div>
  );
};

export default UserProfileCard;
