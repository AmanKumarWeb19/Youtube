import React from "react";
import Button from "./Button";

const btnList = [
  "All",
  "Cricket",
  "Cooking",
  "Ufc",
  "WWE",
  "Gaming",
  "Songs",
  "Soccer",
  "Food Blog",
  "Biryani",
  "Ipl",
  "Coding",
  "DSA",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {btnList.map((btnName, index) => (
        <Button key={index} name={btnName} />
      ))}
    </div>
  );
};

export default ButtonList;
