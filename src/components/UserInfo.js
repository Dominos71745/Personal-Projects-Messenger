import "./UserInfo.css";
import info from "./images/info.png";
import profilePicture from "./images/profile-picture.png";

const UserInfo = () => {
  return (
    <div className="user-bg">
      <img src={profilePicture} alt="profilePicture" />
      <p>John</p>
      <button>
        <img src={info} alt="info" />
      </button>
    </div>
  );
};

export default UserInfo;
