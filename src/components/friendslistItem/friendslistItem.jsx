import css from "../friendslist/FriendsList.module.css"

export default function FriendListItem({ avatar, name, isOnline }) {
    return (
      <div className={css.friendsListItem}>
        <img src={avatar} alt="Avatar" width="48" />
        <p>{name}</p>
        <p className={isOnline ? "online" : "offline"}>
          {isOnline ? "Online" : "Offline"}
        </p>
      </div>
    );
  }