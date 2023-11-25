
import { Link } from 'react-router-dom';
import logo from '../../logo.png';
import './Meals.css';
import { motion } from 'framer-motion';
import { GoChevronLeft } from "react-icons/go";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getMenuConfig from '../detail/getMenuConfig.ts';
import ItemTable from '../timeTable/ItemTable/ItemTable.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Meals() {
  const { initialDate } = useParams('2 января');
  const [currentDate, setCurrentDate] = useState(initialDate)
  const menuConfig = getMenuConfig();

  return (
    <div className="detailPage">
      <div className="header">
        <motion.div
            initial={{y: -50, opacity: 1}}
            animate={{y: 0, opacity: 1}}
            exit={{y: -20, opacity: 0}}
            transition={{duration: .5}}
            className='dateTitle'>
            {currentDate}
        </motion.div>
      </div>
      <Swiper className="swiperContainer">
          { menuConfig.map((date) => {
            return (
              <SwiperSlide className="swiperSlide">
                  {date.timeTableData.map((item) => {
                    return (
                      <ItemTable
                        item={item}
                        key={item.id}/>
                    )
                  })}
              </SwiperSlide>
            )
          })
          }
      </Swiper>
      <Link
        className='link'
        to="/detail">
          <motion.div
              initial={{y: 20, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              exit={{y: 20, opacity: 0}}
              transition={{duration: .5}}
              className="backButton">
              <GoChevronLeft  />
              назад
          </motion.div>
      </Link>
    </div>
  );
}

export default Meals;
