import React from "react";
import "./index.css";
import Main from "./page/main/Main";
import { Routes, Route, useLocation } from "react-router-dom";
import TimeTable from "./page/timeTable/TimeTable";
import { AnimatePresence } from "framer-motion";
import ScrollController from "./page/SrollController";
import Meals from "./page/meals/Meals";
import Calendar from "./page/calendar/Calendar";

function Router() {
  const location = useLocation();
  return (
    <div className="routes">
      <ScrollController>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Main />} />
            <Route path="/detail" element={<Calendar />} />
            <Route path="/meals/:initialDate" element={<Meals />} />
            <Route path="/timeTable/:id" element={<TimeTable />} />
          </Routes>
        </AnimatePresence>
      </ScrollController>
    </div>
  );
}

export default Router;
