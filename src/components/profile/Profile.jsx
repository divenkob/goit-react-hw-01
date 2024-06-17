export default function Profile({
    name,
    tag,
    location,
    image,
    stats: { followers, views, likes },
  }) {
    return (
      <div className="profile">
        <div className="user">
          <img className="user-avatar" src={image} alt="User avatar" />
          <p>{name}</p>
          <p>@{tag}</p>
          <p>{location}</p>
        </div>
  
        <ul className="status">
          <li className="status-folowers">
            <span>Followers</span>
            <span>{followers}</span>
          </li>
          <li className="status-views">
            <span>Views</span>
            <span>{views}</span>
          </li>
          <li className="status-likes">
            <span>Likes</span>
            <span>{likes}</span>
          </li>
        </ul>
      </div>
    );
  }