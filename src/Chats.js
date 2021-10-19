import profile_logo from './profile_logo.jpg';
import apple from './apple.jpg';
import message from './message.jpg';
import ImageComponent from './ImageComponent';
import { useHistory } from 'react-router';
import calls_logo from './calls_logo.png'

const Chats = () => {
const history=useHistory();
    
  const handleChange3=()=>
  {
    fetch('http://localhost:3000/index',{
      method:'NEXT'
    }).then(()=>{
      history.push('/index');
    })
  }

//   const handleChange=()=>
//   {
//     fetch('http://localhost:3000/index',{
//       method:'NEXT'
//     }).then(()=>{
//       history.push('/index');
//     })
//   }

    return ( 
    <div className="chat-container">
        <div class="contact-list">
            <img src={message} alt="" />
             </div>
        <div className="chatList">
            <div className="profile"  >
                <img src={apple} alt="" className="user-image"  />
                <ImageComponent />
                <div className="profileName" onClick={handleChange3} >
                    <h1 className="name">
                    Manoj Mehta
                </h1>
                    <p className="person-chat">Talented Business Man</p>
                </div>
            </div>
            <p className="last-chat-time">12:00pm</p>
        </div>

        <div className="chatList">
            <div className="profile" >
                <img src={apple} className="user-image" />
                <ImageComponent />
                <div className="profileName" onClick={handleChange3}>
                    <h1 className="name">
                        Sangeetha Mehta
                    </h1>
                    <p className="person-chat">Talented House Vendor</p>
                </div>
            </div>
            <p className="last-chat-time">2:50pm</p>
        </div>

        <div className="chatList">
            <div className="profile" >
                <img src={apple} alt="" className="user-image" />
                <ImageComponent />
                <div className="profileName" onClick={handleChange3}>
                    <h1 className="name">
                    Chirag Mehta
                </h1>
                    <p className="person-chat">Talented Business Man</p>
                </div>
            </div>
            <p className="last-chat-time">12:00pm</p>
        </div>

        <div className="chatList">
            <div className="profile" >
                <img src={apple} className="user-image" />
                <ImageComponent />
                <div className="profileName" onClick={handleChange3}>
                    <h1 className="name">
                        Hemant Mehta
                    </h1>
                    <p className="person-chat">Talented House Vendor</p>
                </div>
            </div>
            <p className="last-chat-time">2:50pm</p>
        </div>

        <div className="chatList">
            <div className="profile" >
                <img src={apple} alt="" className="user-image" />
                <ImageComponent />
                <div className="profileName" onClick={handleChange3}>
                    <h1 className="name">
                    Manoj Mehta
                </h1>
                    <p className="person-chat">Talented Business Man</p>
                </div>
            </div>
            <p className="last-chat-time">12:00pm</p>
        </div>

        <div className="chatList">
            <div className="profile" >
                <img src={apple} className="user-image" />
                <ImageComponent />
                <div className="profileName" onClick={handleChange3}>
                    <h1 className="name">
                        Sangeetha Mehta
                    </h1>
                    <p className="person-chat">Talented House Vendor</p>
                </div>
            </div>
            <p className="last-chat-time">2:50pm</p>
        </div>

        <div className="chatList">
            <div className="profile" >
                <img src={apple} alt="" className="user-image" />
                <ImageComponent />
                <div className="profileName" onClick={handleChange3}>
                    <h1 className="name">
                    Chirag Mehta
                </h1>
                    <p className="person-chat">Talented Business Man</p>
                </div>
            </div>
            <p className="last-chat-time">12:00pm</p>
        </div>

        <div className="chatList">
            <div className="profile" >
                <img src={apple} className="user-image" />
                <ImageComponent />
                <div className="profileName" onClick={handleChange3}>
                    <h1 className="name">
                        Hemant Mehta
                    </h1>
                    <p className="person-chat">Talented House Vendor</p>
                </div>
            </div>
            <p className="last-chat-time">2:50pm</p>
        </div>

    </div>
       
     );
}
 
export default Chats;
