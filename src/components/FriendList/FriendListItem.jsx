import styles from "./Friend.css/FriendListItem.module.css";

export function FriendListItem({ name = 'user', avatar, isOnline }) {
  return (
    <li className={styles.friendItem}>
      <img className={styles.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={styles.name}>{name}</p>
      <p className={`${styles.friendStatus} ${isOnline ? styles.online : styles.offline}`}>
  {isOnline ? 'Online' : 'Offline'}
</p>

    </li>
  );
}