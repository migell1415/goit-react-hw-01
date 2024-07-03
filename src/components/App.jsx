import Profile from "./Profile/profile.jsx";
import {FriendList} from "./FriendList/friendList.jsx";
import userData from "../userData.json";
import friends from "../friends.json";

const App = () => {
  return (
      <main>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      </main>
  )
}

export default App;
