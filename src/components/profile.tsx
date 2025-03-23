import profileImg from "../assets/profile.jpg"

export default function Profile() {
    return (
        <img src={profileImg} alt="profile picture" width={200} className="rounded-3xl"/>
    )
}