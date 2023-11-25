import { Link } from "react-router-dom";
import logo from "../../logo.png";
import "./TimeTable.css";
import { motion } from "framer-motion";
import { GoChevronLeft } from "react-icons/go";
import ItemTable from "./ItemTable/ItemTable";
import { useParams } from "react-router-dom";
import getMenuConfig from "../../common";

function TimeTable() {
  const { id } = useParams();
  const menuConfig = getMenuConfig();
  const timeTable = menuConfig.find((item) => item.date === id);

  return (
    <div className="detailPage">
      <div className="header">
        <Link to="/detail">
          <img src={logo} className="logo" alt="logo" />
        </Link>
      </div>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="dateTitle"
      >
        {timeTable.date}
      </motion.div>
      <div className="body">
        {timeTable.timeTableData.map((item) => {
          return <ItemTable item={item} key={item.id} />;
        })}
      </div>
      <Link className="link" to="/detail">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="backButton"
        >
          <GoChevronLeft />
          назад
        </motion.div>
      </Link>
    </div>
  );
}

export default TimeTable;
