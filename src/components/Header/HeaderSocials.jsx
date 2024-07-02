import { FaGoogle } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
function HeaderSocials() {
  return (
    <div className="header-socials">
      <a href="mailto:aliyoumna440@gmail.com" target="_blank">
        <FaGoogle />
      </a>
      <a
        href="https://www.figma.com/files/team/1161394436801182066/user/1390004839210369985?fuid=1161394427456833982"
        target="_blank"
      >
        <FiFigma />
      </a>
    </div>
  );
}

export default HeaderSocials;
