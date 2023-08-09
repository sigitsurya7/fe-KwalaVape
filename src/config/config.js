import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const formatCurrency = (amount) => {
  const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR'
  });
  return formatter.format(amount);
};

export const Navigation = ({ link }) => {
  const navigate = useNavigate()

  const toUrl = () => {
    navigate(link)
  };

  return toUrl
}

export const showSuccessAlert = (message) => {
  Swal.fire({
    icon: "success",
    title: "Success",
    text: message,
    timer: 2000
  })
}