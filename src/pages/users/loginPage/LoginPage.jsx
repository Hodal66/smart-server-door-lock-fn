import React from "react";
import "../user.css";
import loginPageBackGroundImage from "../../../assets/images/LoginBackgroundImage.png";
import { useFormik } from "formik";
import { basicSchema, ExistingUsers } from "./Schema";
import {useNavigate} from "react-router-dom";


function LoginPage() {

  const onSubmit = async (values, actions) => {

    console.log("The current value is :",values.email);
    console.log("The current Password is : ",values.password);
  
    if(values.email === ExistingUsers[0].email && values.password === ExistingUsers[0].password){
      localStorage.setItem("UserEmail",`${values.email}`)
      localStorage.setItem("UserPassword",`${values.password}`)
      history("/user-admin");
    }else if(values.email === ExistingUsers[1].email && values.password === ExistingUsers[1].password){
      localStorage.setItem("UserEmail",`${values.email}`)
      localStorage.setItem("UserPassword",`${values.password}`)
      history("/admin-page");
    }
    else{
      alert("You are not allowed to open the server")
      history("/");
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };
  
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });
  const history = useNavigate();


  return (
    <div className="formContainerRegister">
      <div className="user-pageContainer">
        <div className="leftImageContainer">
          <img src={loginPageBackGroundImage} alt="" />
        </div>
        <div className="RightContentContainer">
          <form className="insiderDivision" onSubmit={handleSubmit} autoComplete="off">
            <div className="inputContainer">
              <label htmlFor="Email">
                Email <span className="noEmptySpace">(*)</span>
              </label>
              <input
                value={values.email}
                onChange={handleChange}
                type="email"
                placeholder="eg: mhthodol@gmail.com "
                name="email"
                id="email"
                onBlur={handleBlur}
                className={errors.email && touched.email ? "input-error" : ""}
              />
            </div>
            {errors.email && touched.email && <p className="error">{errors.email}</p>}

            <div className="inputContainer">
              <label htmlFor="FullName">
                Password <span className="noEmptySpace">(*)</span>
              </label>
              <input
                type="password"
                placeholder="**********************"
                name="password"
                id="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.password && touched.password ? "input-error" : ""}
              />
              {errors.password && touched.password && <p className="error">{errors.password}</p>}
            </div>
            <button className="registerButton" disabled={isSubmitting} type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
