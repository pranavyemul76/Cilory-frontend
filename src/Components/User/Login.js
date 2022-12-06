import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../Style/User/Login.css";
import { UserLogin } from "../../store/Logic/User/UserSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
function Login() {
  const [UserInput, SetUserInput] = React.useState({});
  const [messeage, Setmesseage] = React.useState(null);
  const [cookies, setCookie] = useCookies(["usertoken"]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onchangehandeler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    SetUserInput({ ...UserInput, [name]: value });
  };
  const onsubmithandler = (e) => {
    e.preventDefault();
    dispatch(UserLogin({ datas: UserInput })).then((response) => {
      Setmesseage(response.payload.messege);
      if (response.payload.auth) {
        setCookie("user", response.payload.token, { path: "/" });
        navigate("/");
      }
    });
  };
  return (
    <Container className="userloginsignup">
      <Row className="justify-content-center">
        <Col lg={4}>
          <form className="signup" onSubmit={onsubmithandler}>
            <h1>Login</h1>
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
            <input type="submit" value={"Login"} />
            <h2>
              Create new ? <Link to="/user/signup">signup</Link>
            </h2>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
