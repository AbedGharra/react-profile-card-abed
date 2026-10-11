function ProfileCard({profile}){
    return(
        <article className={profile.featured ? "card featured" :"card"}>
            <img src={profile.avatar} alt={profile.name} />

            <h2>{profile.name}</h2>

            <h3>{profile.title}</h3>

            <p>{profile.bio || "No bio provided"}</p>

        </article>
    )
}

export default ProfileCard;
