import React from "react";
import "../user.css";
import { useFormik } from "formik";
import { basicSchemaRegister } from "../loginPage/Schema";
import loginPageBackGroundImage from "../../../assets/images/LoginBackgroundImage.png";
const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

function RegisterPage() {
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
      fullName:"",
      email: "",
      password: "",
    },
    validationSchema: basicSchemaRegister,
    onSubmit,
  });

  return (
    <div className="formContainerRegister">
      <div className="user-pageContainer">
        <div className="leftImageContainer">
          <img src={loginPageBackGroundImage} alt="" />
        </div>
        <div className="RightContentContainer">
          <form className="insiderDivision" onSubmit={handleSubmit} autoComplete="off">
            <div className="inputContainer">
              <label htmlFor="FullName">
                Full Name <span className="noEmptySpace">(*)</span>
              </label>
              <input
                value={values.fullName}
                onChange={handleChange}
                type="text"
                placeholder="eg: MUHETO Hodal "
                name="fullName"
                id="fullName"
                onBlur={handleBlur}
                className={errors.fullName && touched.fullName ? "input-error" : ""}
              />
               {errors.fullName && touched.fullName && <p className="error">{errors.fullName}</p>}
            </div>

            <div className="inputContainer">
              <label htmlFor="FullName">
                Email <span className="noEmptySpace">(*)</span>
              </label>
              <input
                type="email"
                placeholder="eg: mhthodol@gmail.com "
                name="fullName"
                id="fullName"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.email && touched.email ? "input-error" : ""}
              />
               {errors.email && touched.email && <p className="error">{errors.email}</p>}
            </div>

            <div className="inputContainer">
              <label htmlFor="FullName">
                Password <span className="noEmptySpace">(*)</span>
              </label>
              <input
                type="password"
                placeholder="**********************"
                name="fullName"
                id="fullName"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.password && touched.password ? "input-error" : ""}
              />
               {errors.password && touched.password && <p className="error">{errors.password}</p>}
            </div>
            <button className="registerButton" disabled={isSubmitting} type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
