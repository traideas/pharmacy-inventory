import Swal from 'sweetalert2';

const showConfirmationDeletePopup = (onDeleteConfirmed) => {
  Swal.fire({
    title: 'Are you sure?',
    text: 'You will not be able to recover this item!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, cancel',
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger"
    },
  }).then((result) => {
    if (result.isConfirmed) {
      onDeleteConfirmed();
    }
  });
};

export default showConfirmationDeletePopup;
