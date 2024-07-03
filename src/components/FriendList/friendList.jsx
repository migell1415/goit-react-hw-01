import { FriendListItem } from './FriendListItem';
import friends from '/src/friends.json';
import styles from "./Friend.css/FriendList.module.css";

export function FriendList() {
  return (
    <div className={styles.friendContainer}>
    <ul className = {styles.friendList} >
      {friends.map((friend) => {
        return (
          <FriendListItem
            key={friend.id}
            name={friend.name}
            avatar={friend.avatar}
            isOnline={friend.isOnline}
          />
        );
      })}
    </ul>
    </div>
  );
}