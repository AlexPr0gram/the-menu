import { Link } from "react-router-dom";
import logo from "../../logo.png";
import "./Calendar.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import getMenuConfig from "../../common";

function Calendar() {
  const [detailPageClasses, setDetailPageClasses] = useState("detailPage date");
  const menuConfig = getMenuConfig();

  useEffect(() => {
    setDetailPageClasses("detailPage date scroll");
  }, []);

  return (
    <div className={detailPageClasses}>
      <div className="header">
        <motion.img
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="logo"
            src={logo}
          />
      </div>
      <div className="body">
        {menuConfig.map((item) => {
          return (
            // <Link to={`/timeTable/${item.date}`}>
            //   <motion.div
            //     key={item.id}
            //     initial={{ x: 400, opacity: 0 }}
            //     animate={{ x: 0, opacity: 1 }}
            //     exit={{ x: -400, opacity: 0 }}
            //     transition={{ duration: 0.5 }}
            //     className="itemDate"
            //   >
            //     {item.date}
            //   </motion.div>
            // </Link>
            // Со свайпером
            <Link to={`/meals/${item.date}`}>
              <motion.div
                key={item.id}
                initial={{ x: 400, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -400, opacity: 0 }}
                transition={{ duration: 0.5 }}
                initialDate={item.date}
                className="itemDate"
              >
                {item.date}
              </motion.div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Calendar;
