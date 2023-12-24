import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const PrimaryButton = ({ children, to, hrefLang }) => {
  return (
    <Link
      to={to}
      hrefLang={hrefLang}
      className="bg-primary text-white px-8 py-3 rounded"
    >
      {children}
    </Link>
  );
};

export default PrimaryButton;
