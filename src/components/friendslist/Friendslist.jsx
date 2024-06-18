import FriendslistItem from "../friendslistItem/friendslistItem";
import css from "../friendslist/FriendsList.module.css"

export default function FriendsList({ friends }) {
  return (
    <div className={css.friendsList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendslistItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </div>
  );
}