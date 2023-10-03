import React, { useRef, useState } from "react";
import Circle from "../Images/Circle.png";

const NewsLetter = () => {
  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const messageRef = useRef(null);
  const [isValid, setIsValid] = useState(true);
  const validateEmail = () => {
    const email = emailRef.current.value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailPattern.test(email) || !nameRef.current.value || !messageRef.current.value ) {
      setIsValid(false);
      alert('Enter all vaild details')
    } else {
      setIsValid(true);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    validateEmail();
  };
  return (
    <div className="newsletter">
      <div className="topnl">
        <div className="leftnl">
          <span>Newsletter</span>
          <span>
            Get news about articles and updates <br />
            in your inbox.
          </span>
        </div>
        <div className="rightnl">
          <form>
            <input type="text" ref={nameRef} placeholder="NAME" />
            <hr />
            <input type="email" ref={emailRef} placeholder="EMAIL" />
            <hr />
            <input type="text" ref={messageRef} placeholder="MESSAGE" />
            <hr />
          </form>
        </div>
      </div>
      <div className="botnl">
        <span>
          GET <br />
          IN TOUCH
        </span>
        <img src={Circle} alt="circle" id="circle" onClick={handleSubmit} />
        <span onClick={handleSubmit}>SEND</span>
      </div>
      <div className="footer">
        <span>Copyright 2022 All Right Reserved By SG</span>
      </div>
    </div>
  );
};

export default NewsLetter;
