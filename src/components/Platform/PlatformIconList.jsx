import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo, SiPanasonic } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import "../FilesCss/Platform/CssForPlatformIconList.css";
const PlatformIconList = ({ platforms }) => {
  const iconMap = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <>
      <div className="platform-icon">
        {platforms.map((platform) => {
          const IconPlat = iconMap[platform.slug];
          return <IconPlat key={platform.id} className="IconPlat " />;
        })}
      </div>
    </>
  );
};

export default PlatformIconList;
