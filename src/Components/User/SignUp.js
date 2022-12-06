import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../Style/User/Login.css";
import { UserSignup } from "../../store/Logic/User/UserSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Signup() {
  const [UserInput, SetUserInput] = React.useState({});
  const [messeage, Setmesseage] = React.useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onchangehandeler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    SetUserInput({ ...UserInput, [name]: value });
  };
  const onsubmithandler = (e) => {
    e.preventDefault();
    dispatch(UserSignup({ datas: UserInput })).then((response) => {
      Setmesseage(response.payload.messege);
      if (response.payload.status) {
        setTimeout(() => {
          navigate("/user/login");
        }, [2300]);
      }
    });
  };
  return (
    <Container className="userloginsignup">
      <Row className="justify-content-center">
        <Col lg={4}>
          <form className="signup" onSubmit={onsubmithandler}>
            <h1>Sign up</h1>
            {messeage && <div className="successorerror">{messeage}</div>}
            <div className="signup__field mt-4">
              <input
                className="signup__input"
                type="email"
                name="email"
                required
                value={UserInput.email || ""}
                onChange={onchangehandeler}
              />
              <label className="signup__label" htmlFor="email">
                Email
              </label>
            </div>
            <div className="signup__field">
              <input
                className="signup__input"
                type="tel"
                name="phone"
                required
                onChange={onchangehandeler}
              />
              <label className="signup__label" htmlFor="phone">
                phone
              </label>
            </div>

            <div className="signup__field">
              <input
                className="signup__input"
                type="password"
                name="password"
                required
                value={UserInput.password || ""}
                onChange={onchangehandeler}
              />
              <label className="signup__label" htmlFor="password">
                Password
              </label>
            </div>
            <input type="submit" value={"Sign up"} />
            <h2>
              Already have an account? <Link to="/user/login">login</Link>
            </h2>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default Signup;
