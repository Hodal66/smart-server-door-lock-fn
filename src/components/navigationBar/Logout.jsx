// import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
// import React from 'react'
// const handleChange=()=>{

// }
// function Logout() {
//     const emailLocalStorage = localStorage.getItem("UserEmail");
//   return (
//     <div>
//     <Select
//       labelId="demo-simple-select-label"
//       id="demo-simple-select"
//       value="logout"
//       label="{emailLocalStorage}"
//       style={{width:200}}
//     >
//       <MenuItem value={10} defaultChecked>Logoutqqq</MenuItem>
//       <MenuItem value={10} >Logout</MenuItem>
//     </Select>
//  </div>
//   )
// }

// export default Logout

import { FormControl, MenuItem, Select } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';

function Logout() {
    const age = "muheto"
    const emailLocalStorage = localStorage.getItem("UserEmail");
    const history =  useNavigate();
    console.log("Local storage value is", emailLocalStorage);
    const handleLogout=()=>{
        localStorage.clear();
        history("/")
       
    }
  return (

    <div>
        {emailLocalStorage&&<FormControl fullWidth>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={age}
    label="age"
    // onChange={handleChange}
  >
    <MenuItem value={age} onClick={handleLogout}>logout</MenuItem>
    <MenuItem value={age} defaultValue>{emailLocalStorage}</MenuItem>
  </Select>
</FormControl>}
      
    </div>
  )
}

export default Logout
