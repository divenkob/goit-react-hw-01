import FriendslistItem from "../friendslistItem/friendslistItem";

export default function FriendsList({ friends }) {
  return (
    <div className="friends-list">
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