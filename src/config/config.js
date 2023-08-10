import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

// Format Currency
export const formatCurrency = (amount) => {
  const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR'
  });
  return formatter.format(amount);
};

// Navigation
export const Navigation = ({ link }) => {
  const navigate = useNavigate()

  const toUrl = () => {
    navigate(link)
  };

  return toUrl
}

// Swal
export const showSuccessAlert = (message) => {
  Swal.fire({
    icon: "success",
    title: "Success",
    text: message,
    timer: 2000,
    showConfirmButton: false
  })
}

export const showErrorAlert = (message) => {
  Swal.fire({
    icon: "error",
    title: "Error",
    text: message,
    timer: 2000,
    showConfirmButton: false
  })
}