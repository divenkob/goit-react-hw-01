import Profile from "../profile/Profile";
import FriendsList from "../friendslist/Friendslist";
import friends from "../friendslist/FriendsList.json";
import transactions from "../transactionHistory/TransactionsHistory.json";
import TransactionHistory from "../transactionHistory/TransactionHistory";
import userData from "../../components/profile/userData.json";

export default function App() {
  const { username, tag, location, avatar, stats } = userData;

  return (
    <>
      <Profile
        name={username}
        tag={tag}
        location={location}
        image={avatar}
        stats={stats}
      />

      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
