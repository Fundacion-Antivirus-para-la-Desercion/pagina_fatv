import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Btns() {
  const location = useLocation();
  const [showDonationPay, setShowDonationPay] = useState(false);

  useEffect(() => {
    const sessionStorageValue =
      location.pathname === "/Provocacion" ? false : true;

    setShowDonationPay(sessionStorageValue);
  }, [location.pathname]);

  return (
    <Link
      to="/DonationPay"
      className={`mt-12 flex items-center fixed z-40 top-40 right-10 ${
        showDonationPay === true ? "block" : "hidden"
      }`}
    >
      <div className="flex gap-2 items-center rounded-3xl bg-btn-back px-5 py-3 border-r max-md:px-1 max-md:py-1">
        <p className="text-xl font-bold text-white max-md:text-xs">Donar</p>
        <box-icon name="heart" type="solid" color="#f3f3f3"></box-icon>
      </div>
    </Link>
  );
}

export default Btns;
