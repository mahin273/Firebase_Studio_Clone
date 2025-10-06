import { FaJs } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
export const FileIcon = ({ extension }) => {
  return (
    <>{extension === 'js' && (<FaJs color="yellow" style={{ height: "20px", width: "20px" }} />
    )}
    {extension === 'jsx' && (<GrReactjs color="blue" style={{height:"20px",width:"20px"}}/>
   ) }
  </>
  )
}
