import Button from "@mui/material/Button";
import { IoMdArrowDropdown } from "react-icons/io";


const CountryDropDown = () => {
  return (
    <>
      <Button className="countryDropDown">
        <div className="info d-flex flex-column">
          <span className="label">Your Location</span>
          <span className="name">Pakistan</span>
        </div>
        <span className="ml-auto"><IoMdArrowDropdown/></span>
      </Button>
    </>
  );
};

export default CountryDropDown;
