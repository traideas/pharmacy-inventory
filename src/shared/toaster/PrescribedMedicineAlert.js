import Swal from 'sweetalert2';

const PrescribedMedicineAlertMsg = (data,) => {
  let formattedMessage = `<div>${data}</div>`;
    return Swal.fire({
        icon: 'warning',
        title: "Prescribed Medicine Alert",
        html: formattedMessage
      });
}

export default PrescribedMedicineAlertMsg;
