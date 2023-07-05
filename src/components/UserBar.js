import "./UserBar.css";
import info from "./images/info.png";
import profilePicture from "./images/profile-picture.png";
import flag from "./images/flag.png";

const UserBar = () => {
  return (
    <div className="user">
      <img className="profile" src={profilePicture} alt="profilePicture" />
      <p>John</p>
      <img className="flag" src={flag} alt="profilePicture" />
      <button>
        <img src={info} alt="info" />
      </button>
    </div>
  );
};

export default UserBar;
