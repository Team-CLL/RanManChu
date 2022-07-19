import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../actions/user_action';

function Signup() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');

    const date = new Date();
    const curYear = date.getFullYear();
    const [dayList, setDayList] = useState([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
    ]);

    let lastDay = 31;

    const onEmailHandler = (e) => {
        setEmail(e.target.value);
    };

    const onNameHandler = (e) => {
        setName(e.target.value);
    };

    const onPasswordHandler = (e) => {
        setPassword(e.target.vaule);
    };

    const onConfirmPasswordHandler = (e) => {
        setConfirmPassword(e.target.value);
    }

    const onYearHandler = (e) => {
        setYear(e.target.value);
        console.log(year);
    };

    const onMonthHandler = (e) => {
        handleChangeDay(e);
        setMonth(e.target.value);
    };

    const onDayHandler = (e) => {
        setDay(e.target.value);
    };

    const onSubmitHandler = (e) => {
        // 태그의 기본 기능으로 리프레쉬 되는 것을 방지.
        e.preventDefault();

        if (password !== confirmPassword) {
            return alert('비밀번호 확인이 일치하지 않습니다.');
        }

        let body = {
            email: email,
            name: name,
            password: password
        };

        // action 을 dispatch 해준다.
        dispatchEvent(registerUser(body)).then((response) => {
            if (response.payload.success) {
                navigate("/");
            }
            else {
                alert('회원가입에 실패했습니다.');
            }
        });
    };

    const appendYearList = () => {
        const result = [];

        result.push(<option key={0} value="" disabled selected>년</option>);
        for (let i = 1900; i <= curYear; i++) {
            result.push(<option key={i}>{i}</option>);
        }

        return result;
    }

    const appendMonthList = () => {
        const result = [];

        result.push(<option key={0} value="" disabled selected>월</option>);
        for (let i = 1; i <= 12; i++) {
            result.push(<option key={i}>{i}</option>);
        }

        return result;
    }

    const appendDayList = useCallback(() => {
        const result = [];

        result.push(<option key={0} value="" disabled selected>일</option>);
        for (let i = 0; i < dayList.length; i++) {
            result.push(<option key={i + 1}>{dayList[i]}</option>);
        }

        return result;
    }, [dayList]);

    const replaceDayList = () => {
        const newDayList = [];

        for (let i = 1; i <= lastDay; i++) {
            newDayList.push(i);
        }

        setDayList(newDayList);
    }

    const handleChangeDay = (e) => {
        switch (e.target.value) {
            case '2':
                lastDay = 29;
                break;
            case '4':
            case '6':
            case '9':
            case '11':
                lastDay = 30;
                break;
            default:
                lastDay = 31;
                break;
        }

        replaceDayList();
    }

    return (
        <div className="background">
            <div className="signupBox">
                <div className="signupSubject">계정 만들기</div>
                <br />
                <form>
                    <div className="inputName" align="left">이메일</div>
                    <input className="inputBox" value={email} onChange={onEmailHandler} />
                </form>
                <form>
                    <div className="inputName" align="left">사용자명</div>
                    <input className="inputBox" value={name} onChange={onNameHandler} />
                </form>
                <form>
                    <div className="inputName" align="left">비밀번호</div>
                    <input className="inputBox" value={password} onChange={onPasswordHandler} />
                </form>
                <form>
                    <div className="inputName" align="left">비밀번호 확인</div>
                    <input className="inputBox" value={confirmPassword} onChange={onConfirmPasswordHandler} />
                </form>
                <div className="inputName" align="left">생년월일</div>
                <form className="birthLayer">
                    <select className="selectBox" required value={year} onChange={onYearHandler}>
                        {appendYearList()}
                    </select>
                    <select className="selectBox" required value={month} onChange={onMonthHandler}>
                        {appendMonthList()}
                    </select>
                    <select className="selectBox" required value={day} onChange={onDayHandler}>
                        {appendDayList()}
                    </select>
                </form>
                <br />
                <button className="continueSignupButton">계속하기</button>
                <div className="alreadyHaveAccount" align="left">
                    이미 계정이 있으신가요?
                </div>
            </div>
        </div>
    );
};

export default Signup;