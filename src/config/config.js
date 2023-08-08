import { useNavigate } from "react-router-dom";

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