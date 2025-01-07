import Button from "../Elements/Button";
import CheckBox from "../Elements/CheckBox";
import LabeledInput from "../Elements/LabeledInput";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useContext } from "react";
import axios from "axios";
import CustomizedSnackbars from "../Elements/SnackBar";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { NotifContext } from "../../context/notifContext";

const FormSignIn = () => {
  const {setMsg,setOpen,setIsLoading} = useContext(NotifContext);
  const {setIsLoggedIn,setName} = useContext(AuthContext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const onFormSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://jwt-auth-eight-neon.vercel.app/login",
        {
          email: data.email,
          password: data.password,
        }
      );
      const decoded = jwtDecode(response.data.refreshToken);
      console.log(decoded);

      console.log(response);
      setIsLoading(false);
      setOpen(true);
      setMsg({severity:"success", desc : "Login Success"});

      localStorage.setItem("refreshToken",response.data.refreshToken);
      localStorage.setItem("username",decoded.name);
      setIsLoggedIn(true);
      setName(decoded.name);
      navigate("/");
    } catch (error) {
      setIsLoading(false);
      if (error.response) {
        console.log(error.response);
        setOpen(true);
        setMsg({severity:"error", desc : error.response.data.msg});
  
      }
    }
  };
  const onErrors = (errors) => console.error(errors);

  return (
    <form onSubmit={handleSubmit(onFormSubmit, onErrors)}>
      <div className="mb-6">
        <LabeledInput
          label="Email address"
          type="email"
          placeholder="hello@example.com"
          name="email"
          register={{
            ...register("email", {
              required: "Email address is required",
              pattern: {
                value:
                  /[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/,
                message: "Invalid email address format",
              },
            }),
          }}
        />
        {errors?.email && (
          <div className="text-center text-red-500">
            {errors.email.message}{" "}
          </div>
        )}
      </div>
      <div className="mb-6">
        <LabeledInput
          label="Password"
          type="password"
          placeholder="*************"
          name="password"
          register={{
            ...register("password", { required: "Password is required" }),
          }}
        />
        {errors?.password && (
          <div className="text-center text-red-500">
            {errors.password.message}{" "}
          </div>
        )}

        <Link to="/forgot-password" className="text-primary text-sm font-bold">
          Forgot Password?
        </Link>
      </div>
      <div className="mb-3">
        <CheckBox label="Keep me signed in" name="status" />
      </div>
      <Button
        variant={
          `${!isValid
            ? "bg-gray-05"
            : "bg-primary zoom-in"} w-full text-white`
        }
        type="submit"
        disabled={!isValid ? "disabled" : ""}
      >
        Login
      </Button>
    </form>
  );
};

export default FormSignIn;
