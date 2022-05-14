// const [anchorEl, setAnchorEl] = React.useState(null);
// const open = Boolean(anchorEl);

// const handleClick = (e: React.MouseEvent) => setAnchorEl(e.currentTarget);
// const handleClose = () => setAnchorEl(null);

// return (
//   <div>
//     <Button
//       variant="contained"
//       onClick={handleClick}
//       endIcon={<ArrowDownIcon />}
//     >
//       Click Me!
//     </Button>
//     <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
//       <NestedMenuItem
//         leftIcon={<AdbIcon />}
//         rightIcon={<FlutterDashIcon />}
//         label="Top Level"
//         parentMenuOpen={open}
//       >
//         <MenuItem onClick={handleClose}>Standard Menu Item!</MenuItem>
//         <IconMenuItem
//           onClick={handleClose}
//           leftIcon={<NewIcon />}
//           rightIcon={<SaveIcon />}
//           label="Icon Menu Item"
//         />
//         <NestedMenuItem
//           leftIcon={<AdbIcon />}
//           rightIcon={<ArrowRightIcon />}
//           label="Go deeper!"
//           parentMenuOpen={open}
//         >
//           <MenuItem onClick={handleClose}>Standard Menu Item!</MenuItem>
//           <IconMenuItem
//             onClick={handleClose}
//             leftIcon={<NewIcon />}
//             rightIcon={<SaveIcon />}
//             label="Icon Menu Item"
//           />
//         </NestedMenuItem>
//       </NestedMenuItem>
//     </Menu>
//   </div>
// );
