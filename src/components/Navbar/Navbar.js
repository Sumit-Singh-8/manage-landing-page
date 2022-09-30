import BrandLogo from "../../images/logo.svg"
import Button from "../../shared/Button";

const Navbar = () => {
  return (
    <nav className="max-w-5xl m-auto px-8 md:px-0 mt-8 flex justify-between items-center cursor-pointer  ">
    <img className="translate-y-1" src={BrandLogo} alt="" />
      <ul className="basis-2/4 flex justify-between " >
        <li className="text-darkBlue font-medium  hover:text-darkGrayishBlue "> Pricing </li>
        <li className="text-darkBlue font-medium hover:text-darkGrayishBlue "> Product </li>
        <li className="text-darkBlue font-medium hover:text-darkGrayishBlue "> About Us </li>
        <li className="text-darkBlue font-medium hover:text-darkGrayishBlue "> Careers </li>
        <li className="text-darkBlue font-medium hover:text-darkGrayishBlue "> Community</li>
      </ul>
      <Button btnText={`Get Started`} />
    </nav>
  );
};

export default Navbar;
