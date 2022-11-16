import PropTypes from "prop-types";
import { forwardRef } from "react";
import { Link as RouterLink } from "react-router-dom";
// @mui
import { useTheme } from "@mui/material/styles";
import { Box, Link } from "@mui/material";

// ----------------------------------------------------------------------

// const Logo = forwardRef(({ disabledLink = false, sx, ...other }, ref) => {
//   const theme = useTheme();

//   const PRIMARY_LIGHT = theme.palette.primary.light;

//   const PRIMARY_MAIN = theme.palette.primary.main;

//   const PRIMARY_DARK = theme.palette.primary.dark;

//   // OR using local (public folder)
//   // -------------------------------------------------------
//   // const logo = (
//   //   <Box
//   //     component="img"
//   //     src="/logo/logo_single.svg" => your path
//   //     sx={{ width: 40, height: 40, cursor: 'pointer', ...sx }}
//   //   />
//   // );

//   const logo = (
//     <Box
//       ref={ref}
//       component="div"
//       sx={{
//         width: 40,
//         height: 40,
//         display: "inline-flex",
//         ...sx,
//       }}
//       {...other}
//     >

//       {/* <svg width="100%" height="100%" viewBox="0 0 512 512" color="red">
//         <rect
//           width="100%"
//           height="100%"
//           color="red"
//           style={{color:'red',stroke:'black',opacity:0.5}}
//         />
//       </svg> */}
//       <img src="./logo192" alt="logo"></img>
//     </Box>
//   );

//   if (disabledLink) {
//     return <>{logo}</>;
//   }

//   return (
//     <Link to="/" component={RouterLink} sx={{ display: "contents" }}>
//       {logo}
//     </Link>
//   );
// });

// Logo.propTypes = {
//   sx: PropTypes.object,
//   disabledLink: PropTypes.bool,
// };
const Logo = () => {
  return (
    <Link to="/" component={RouterLink} sx={{ display: "contents" }}>
      <h2>Fabric</h2>
    </Link>
  );
};
export default Logo;
