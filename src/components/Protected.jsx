import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../redux/actions/auth";

const Protected = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoggedIn, token } = useSelector((state) => state.auth);
  useEffect(() => {
    if (!token && !isLoggedIn) {
      navigate("/");
      return;
    }
    dispatch(getMe());
  }, [isLoggedIn, token, navigate]);

  return children;
};

export default Protected;
