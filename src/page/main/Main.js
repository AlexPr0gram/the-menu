import { Link } from "react-router-dom";
import logo from "../../logo.png";
import "./Main.scss";
import { motion } from "framer-motion";

function Main() {
  return (
    <motion.div
      animate={{ y: 0 }}
      exit={{ y: -800 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
      className="App"
    >
      <img src={logo} className="logoXL" alt="logo" />
      <Link className="button" to="/detail">
        посмотреть
      </Link>
    </motion.div>
  );
}

export default Main;
