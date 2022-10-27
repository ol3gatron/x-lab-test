import { useState } from "react";

type props = {
  name: string;
  icon: string;
}

const SidebarItem = ({name, icon}: props) => {
  const [isSelected, setIsSelected] = useState(false)

  const clickHandle = () => {
    setIsSelected((prevState) => !prevState)
  }

  const style = {
    "display": "flex",
    "alignItems": "center",
    "fontSize": 20,
    "lineHeight": "1.5rem",
    "fontWeight": "600",
    "gap": "1rem",
    "padding": "20px 0",
    "borderRight": isSelected ? "3px solid blue" : "none",
  }

  return (
    <div style={style} onClick={clickHandle}>
      <img src={icon}/>
      <p>{name}</p>
    </div>
  )
}
export default SidebarItem