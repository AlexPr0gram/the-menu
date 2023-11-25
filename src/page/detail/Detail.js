
import { Link } from 'react-router-dom';
import logo from '../../logo.png';
import './Detail.css';
import { motion } from 'framer-motion';
import getMenuConfig from './getMenuConfig.ts';
import { useEffect, useState } from 'react';

function Detail() {
  const [detailPageClasses, setDetailPageClasses] = useState('detailPage date');
  const menuConfig = getMenuConfig();

  useEffect(() => {
    setDetailPageClasses('detailPage date scroll')
  }, [])

  return (
    <div className={detailPageClasses}>
      <div className="header">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <div className="body">
        {menuConfig.map((item) => {
          return (
            <Link
              to={`/timeTable/${item.date}`}>
                  <motion.div
                    key={item.id}
                    initial={{x: 400, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    exit={{x: -400, opacity: 0}}
                    transition={{duration: .5}}
                    className="itemDate">
                    {item.date}
                  </motion.div>
            </Link>
            // Со свайпером
            // <Link
            //   to={`/meals/${item.date}`}>
            //       <motion.div
            //         key={item.id}
            //         initial={{x: 400, opacity: 0}}
            //         animate={{x: 0, opacity: 1}}
            //         exit={{x: -400, opacity: 0}}
            //         transition={{duration: .5}}
            //         initialDate={item.date}
            //         className="itemDate">
            //         {item.date}
            //       </motion.div>
            // </Link>
          )
        })}
      </div>
    </div>
  );
}

export default Detail;
