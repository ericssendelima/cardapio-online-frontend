import classes from './subir.module.css'
import { PiArrowLineUpBold } from "react-icons/pi";

const Subir = () => {
    const subir = () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      };
    return (
        <div className={classes.subir} onClick={subir}>
          <PiArrowLineUpBold />
        </div>
    );
}

export default Subir;