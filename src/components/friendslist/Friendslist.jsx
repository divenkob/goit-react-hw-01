import FriendslistItem from "../friendslistItem/friendslistItem";

export default function FriendsList({ friends }) {
  return (
    <ul>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendslistItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
}