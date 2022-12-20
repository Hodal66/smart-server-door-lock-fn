import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const basicSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Required"),
 
});

export const basicSchemaRegister = yup.object().shape({
  fullName:yup.string().min(3,"Name Must greeter than 3").max(30,"Your names is too much").required("Names Required"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Required"),
 
});
export const ExistingUsers =[{
  email:"mhthodol@gmail.com",
  password:"Mhthodol@2022%"
},
{
  email:"claude@gmail.com",
  password:"Claude@2022%"
},
{
  email:"Admin@gmail.com",
  password:"Admin@2022%"
}
]


