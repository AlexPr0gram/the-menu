import "swiper/css";
import "swiper/css/pagination";
import "./Meals.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GoChevronLeft } from "react-icons/go";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemTable from "../timeTable/ItemTable/ItemTable.js";
import { Swiper, SwiperSlide } from "swiper/react";
import getMenuConfig from "../../common.js";
import { Pagination } from "swiper/modules";

function Meals() {
  const { initialDate } = useParams();
  const [currentDate, setCurrentDate] = useState(initialDate);
  const menuConfig = getMenuConfig();
  const firstSlideIndex = menuConfig.findIndex(
    (item) => item.date === initialDate
  );
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<div class="' + className + '">' + "</div>";
    },
  };

  return (
    <div className="detailPage">
      <div className="header">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="dateTitle"
        >
          {currentDate}
        </motion.div>
      </div>
      <motion.div
        initial={{ x: 400, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -400, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Swiper
          initialSlide={firstSlideIndex}
          modules={[Pagination]}
          pagination={pagination}
          className="swiperContainer"
          onSlideChange={(swiper) => {
            const date = menuConfig.find(
              (item) => item.id === swiper.activeIndex + 1
            ).date;
            setCurrentDate(date);
          }}
        >
          {menuConfig.map((date) => {
            return (
              <SwiperSlide className="swiperSlide" key={date.date}>
                {date.timeTableData.map((item) => {
                  return <ItemTable item={item} key={item.id} />;
                })}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>

      <Link className="link" to="/detail">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="backButton"
        >
          <GoChevronLeft />
          На главную
        </motion.div>
      </Link>
    </div>
  );
}

export default Meals;
