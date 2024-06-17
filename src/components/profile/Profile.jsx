export default function Profile({
    name,
    tag,
    location,
    image,
    stats: { followers, views, likes },
  }) {
    return (
      <div className="profile">
        <div className="description">
          <img className="description-avatar" src={image} alt="User avatar" />
          <p>{name}</p>
          <p>@{tag}</p>
          <p>{location}</p>
        </div>
  
        <ul className="stats">
          <li className="stats-folowers">
            <span>Followers</span>
            <span>{followers}</span>
          </li>
          <li className="stats-views">
            <span>Views</span>
            <span>{views}</span>
          </li>
          <li className="stats-likes">
            <span>Likes</span>
            <span>{likes}</span>
          </li>
        </ul>
      </div>
    );
  }