import axios from "axios";
import { setIsLoggedIn, setToken, setUser } from "../reducers/auth";
import { toast } from "react-toastify";

export const login = (data, navigate) => async (dispatch) => {
  try {
    const response = await axios.post(
      `https://km4-challenge-5-api.up.railway.app/api/v1/auth/login`,
      data,
      { "Content-Type": "application/json" }
    );

    const { token } = response?.data?.data;

    dispatch(setToken(token));
    dispatch(setIsLoggedIn(true));

    //redirect to home, dont forget to useNavigate in the component
    navigate("/");
  } catch (error) {
    if (axios.isAxiosError(error?.response?.data?.message)) {
      toast.error(error?.response?.data?.message);
      return;
    }
    toast.error(error.message);
  }
};

export const register = (data, navigate) => async (dispatch) => {
  try {
    const response = await axios.post(
      `https://km4-challenge-5-api.up.railway.app/api/v1/auth/register`,
      data,
      { "Content-Type": "application/json" }
    );

    const { token } = response?.data?.data;

    dispatch(setToken(token));
    dispatch(setIsLoggedIn(true));

    // redirect to home, don't forget to useNavigate in the component
    navigate("/");
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.message);
      return;
    }

    toast.error(error.message);
  }
};

export const logout = (navigate) => async (dispatch) => {
  dispatch(setToken(null));
  dispatch(setIsLoggedIn(false));
  dispatch(setUser(null));

  if (navigate) navigate("/login")
};

export const getMe = () => async (dispatch, getState) => {
  try {
    const { token } = getState().auth;

    const response = await axios.get(
      `https://km4-challenge-5-api.up.railway.app/api/v1/auth/me`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const { data } = response?.data;
    dispatch(setUser(data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.message);
      if (error.response.status === 401) {
        dispatch(logout());
      }
      return;
    }

    toast.error(error.message);
  }
};