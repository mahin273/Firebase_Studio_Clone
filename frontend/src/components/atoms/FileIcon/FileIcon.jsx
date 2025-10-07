import { FaJs } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import { PiFileCss } from 'react-icons/pi';
import { ImHtmlFive } from 'react-icons/im';
export const FileIcon = ({ extension }) => {

  const iconStyle = {
    height: '20px',
    width: '20px',
  };

  const iconMapper = {
    "js": <FaJs style={iconStyle} color="#f0db4f" />,
    "jsx": <GrReactjs style={iconStyle} color="#61DBFB" />,
    "css": <PiFileCss style={iconStyle} color="#264de4" />,
    "html": <ImHtmlFive style={iconStyle} color="#e34c26" />,
  };
  return (
    <>
      {iconMapper[extension]}


    </>
  );
}
