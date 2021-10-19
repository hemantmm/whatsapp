import pencil_logo from './pencil_logo.png';
import Camera1_logo from './Camera1_logo.webp';
import profile_logo from './profile_logo.jpg';

const Status = () => {
    return ( 
        <div className="status-container">
            <div className="status-list-fixed">
                <img src={pencil_logo} alt="" />
            </div>

            <div className="status-list-fixed1">
                <img src={Camera1_logo} alt="" />
            </div>

            <div class="person-profile person-profile-status">  
                    <img src={profile_logo} alt="" class="user-img" />
                    <div class="person-name">
                      <h2 class="persion-name-heading">  My status </h2>
                      <p class="person-chat">Tap to see add status upadte</p>
                   </div>
                </div>
                <h2 class="recent-update">Recent updates
                </h2>

                <div class="chat-list">
                                <div class="person-profile">
                                    <img src={profile_logo} alt="" class="user-img user-img-status" />
                                    <div class="person-name">
                                            <h3 class="persion-name-heading">
                                                    Hemant Mehta
                                            </h3>
                                            <p class="person-chat">42 minutes ago</p>
                                    </div>
                                </div>
                 </div>
               

        </div>
     );
}
 
export default Status;