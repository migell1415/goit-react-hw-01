import Profile from "./Profile/profile.jsx";
import userData from "../userData.json";

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
      </main>
  )
}

export default App;
