import profile_logo from './profile_logo.jpg';
import video_logo from './video_logo.jpg';
import calls_logo from './calls_logo.png';
import call_logo from './call_logo.png';

const Calls = () => {
    return ( 
        <div className="chats">
            <div className="status-list-fixed2">
                <img src={call_logo} alt="" />
            </div>

        <div className="chatList">
        <div className="profile">
            <img src={profile_logo} className="user-image" />
            <div className="profileName">
                <h1 className="name">
                    Hemant Mehta
                </h1>
                <p className="person-chat">Talented House Vendor</p>
            </div>
        </div>
        <p className="last-chat-time">
            <img src={video_logo} alt="" />
        </p>
    </div>

<div className="chatList">
        <div className="profile">
            <img src={profile_logo} className="user-image" />
            <div className="profileName">
                <h1 className="name">
                    Chirag Mehta
                </h1>
                <p className="person-chat">Talented House Vendor</p>
            </div>
        </div>
        <p className="last-chat-time">
            <img src={calls_logo} alt="" />
        </p>
    </div>

    </div>

     );
}
 
export default Calls;