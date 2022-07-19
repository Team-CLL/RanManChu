import { useNavigate } from 'react-router-dom';

function FriendChatting() {
    const navigate = useNavigate();

    const handleClickFriendsButton = () => {
        navigate("/userpage=friends", { replace: true });
    }

    const handleClickFriendChatButton = () => {
        navigate("/userpage=friendchat", { replace: true });
    }

    const handleClickRandomChatButton = () => {
        navigate("/userpage=randomchat", { replace: true });
    }

    return (
        <div className="background">
            <div className="UserBox">
                <div id="Left">
                    <div id="Profile">
                        Name
                    </div>
                    <form id="Menu">
                        <button onClick={handleClickFriendsButton} className="OneMenu">
                            친구
                        </button>
                        <button onClick={handleClickFriendChatButton} className="ClickedOneMenu">
                            친구 채팅
                        </button>
                        <button onClick={handleClickRandomChatButton} className="OneMenu">
                            랜덤 채팅
                        </button>
                    </form>
                </div>
                <div id="Right">
                    친구 채팅
                </div>
            </div>
        </div>
    );
}

export default FriendChatting;