import Swal from 'sweetalert2';

const toasterMessage = (data, error = 'success') => {
  const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    background: '#343A46',
    color: 'white',
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });
  if (error === 'success') {
    return Toast.fire({
      icon: 'success',
      title: data,
    });
  } else if (error === 'warning') {
    return Toast.fire({
      icon: 'warning',
      title: data,
    });
  } else {
    return Toast.fire({
      icon: 'error',
      title: data,
    });
  }
};

export default toasterMessage;