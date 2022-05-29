import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const sweetAlert = (title, icon, message) => MySwal.fire({
  title,
  icon,
  text: message
});

export default sweetAlert;

// Swal.fire({
//     title: `Well Done ${loggedInUser.displayName}!!`,
//     text: `You Have To Pay Us ${total}$!`,
//     icon: 'success',
//     button: 'OK!',
//     position: 'center',
// });