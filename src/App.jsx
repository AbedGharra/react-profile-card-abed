import {profiles} from "./profiles";
import ProfileCard from "./ProfileCard";
import "./ProfileCard.css"

function App(){
  return(
    <main>
      <h1>Our Team</h1>

      <div className="profile-grid">
        {profiles.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </div>
    </main>
  )
}

export default App;