import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import CountryDropDown from "./CountryDropDown";
import { CiSearch } from "react-icons/ci";
import Button from "@mui/material/Button";


const Header = () => {
  return (
    <>
      <header className="header-wrapper">
        <div className="header">
          <div className="container">
            <div className="row">
              <div className="logo-wrapper d-flex align-items-center col-sm-2">
                <Link to={"/"}>
                  <img src={Logo} />
                </Link>
              </div>

              <div className="d-flex align-items-center col-sm-10 part2">
                <CountryDropDown />

                <div className="headerSearch ml-3 mr-3">
                  <input type="text" />
                  <Button><CiSearch /></Button>

                </div>


              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
