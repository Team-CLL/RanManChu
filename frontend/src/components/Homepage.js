import { useNavigate, Link } from 'react-router-dom';

function Homepage() {
    const navigate = useNavigate();
    const handleClickSignupButton = () => {
        navigate("/signup", { replace: true });
    }

    return (
        <div>
            <div className="background">
                <div className="loginBox">
                    <div className="greeting">환영합니다!</div>
                    <br />
                    <form>
                        <div className="inputName" align="left">이메일</div>
                        <input className="inputBox" />
                    </form>
                    <form>
                        <div className="inputName" align="left">비밀번호</div>
                        <input className="inputBox" />
                        <div className="forgotPassword" align="left">Forgot your password?</div>
                    </form>
                    <form>
                        <button className="loginButton">로그인</button>
                    </form>
                    <div className="subGreeting" align="left">계정이 없으신가요?</div>
                    <form className="signupButtonBox">
                        <button className="signupButton" onClick={handleClickSignupButton}>회원 가입</button>
                        <button className="signupButton">게스트로 시작</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Homepage;