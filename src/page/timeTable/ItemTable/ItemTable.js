import "./ItemTable.scss";
import { motion } from "framer-motion";
import { GoChevronDown } from "react-icons/go";
import { useState } from "react";

function ItemTable({ item, key }) {
  const [expanded, setExpanded] = useState(false);
  const variants = {
    open: { height: "65px", x: 0, opacity: 1 },
    closed: { height: "fit-content", x: 0, opacity: 1 },
  };

  const title = {
    breakfast: "завтрак",
    lunch: "обед",
    dinner: "ужин",
  };

  const clickMenuItem = () => {
    setExpanded(!expanded);
  };
  return (
    <motion.div
      key={key}
      initial={{ height: "65px" }}
      animate={expanded ? "closed" : "open"}
      variants={variants}
      transition={{ duration: 0.5 }}
      className="itemContainer"
      onClick={clickMenuItem}
    >
      <div className={`itemHeader + ${expanded ? "itemHeader__expanded" : ""}`}>
        <span className="itemTitle">{title[item.id]}</span>
        <GoChevronDown className="itemButton" size={30} />
      </div>
        {
          item.recipes.map((recipe) => {
            return (
              <motion.div className="itemContent">
                <span className="recipeTitle">{recipe.recipeTitle}</span>
                <span className="recipeDetails">{recipe.recipeDetails}</span>
              </motion.div>
            )
          })
        }
    </motion.div>
  );
}

export default ItemTable;
