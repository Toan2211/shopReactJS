// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import { OutlinedInput, TextField } from '@mui/material';
// import {Controller} from 'react-hook-form';
// import IconButton from '@mui/material/IconButton';
// import Input from '@mui/material/Input';
// import InputLabel from '@mui/material/InputLabel';
// import InputAdornment from '@mui/material/InputAdornment';
// import FormControl from '@mui/material/FormContrtyol';
// import Visibility from '@mui/icons-material/Visibili';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
// PasswordField.propTypes = {
//     form: PropTypes.object.isRequired,
//     name: PropTypes.string.isRequired,
//     label: PropTypes.string,
//     disabled: PropTypes.bool,
// };

// function PasswordField(props) {
//     const {form, name, label, disable} = props;
//     const [showPassword, setShowPassword] = useState(false);
//     const toggleShowPassword = () => {
//       setShowPassword(x => !x);
//     }
//     return (
//       // <div>
//       //       <Controller
//       //   name={name}
//       //   control={form.control}
//       //   render={({ field: { onChange, onBlur, value, name }, fieldState: { invalid, error } }) => (
//       //     <TextField
//       //       margin="normal"
//       //       variant="outlined"
//       //       fullWidth
//       //       label={label}
//       //       error={invalid}
//       //       helperText={error?.message}
//       //       onChange={onChange}
//       //       onBlur={onBlur}
//       //       name={name}
//       //       value={value}
//       //       disabled={disable}
//       //     />

//       //   )}
//       // /> 
//           <Controller 

//             name={name}
//             control={form.control}
//             render={({ field: { onChange, onBlur, value, name }, fieldState: { invalid, error } }) => (
//                   <OutlinedInput
//                 id="outlined-adornment-password"
//                 type={showPassword ? 'text' : 'password'}
//                 endAdornment={
//                   <InputAdornment position="end">
//                     <IconButton
//                       aria-label="toggle password visibility"
//                       onClick={toggleShowPassword}
//                       edge="end"
//                     >
//                       {showPassword ? <VisibilityOff /> : <Visibility />}
//                     </IconButton>
//                   </InputAdornment>
//                 }
//                 label="Password"
//               />

//             )}
//           />

//         {/* <FormControl fullWidth margin = "normal" variant="outlined">
//           <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
//           <Controller
//           <OutlinedInput
//             id="outlined-adornment-password"
//             type={showPassword ? 'text' : 'password'}
//             endAdornment={
//               <InputAdornment position="end">
//                 <IconButton
//                   aria-label="toggle password visibility"
//                   onClick={toggleShowPassword}
//                   edge="end"
//                 >
//                   {showPassword ? <VisibilityOff /> : <Visibility />}
//                 </IconButton>
//               </InputAdornment>
//             }
//             label="Password"
//           />
//           />
//         </FormControl>
//       </div> */}
//     );
// }

// export default PasswordField;