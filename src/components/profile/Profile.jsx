import css from "../profile/Profile.module.css"

export default function Profile({
    name,
    tag,
    location,
    image,
    stats: { followers, views, likes },
  }) {
    return (
      <div className={css.profile}>
        <div className={css.user}>
          <img className={css.userAvatar} src={image} alt="User avatar" />
          <p>{name}</p>
          <p>@{tag}</p>
          <p>{location}</p>
        </div>
  
        <ul className={css.status}>
          <li className={css.statusFolowers}>
            <span>Followers</span>
            <span>{followers}</span>
          </li>
          <li className={css.statusViews}>
            <span>Views</span>
            <span>{views}</span>
          </li>
          <li className={css.statusLikes}>
            <span>Likes</span>
            <span>{likes}</span>
          </li>
        </ul>
      </div>
    );
  }