import SidebarItem from "./SidebarItem"
import homeIcon from "../assets/ic_главная.svg"
import searchIcon from "../assets/search.svg"
import tablesIcon from "../assets/vs_tables.svg"
import calendarIcon from "../assets/calendar.svg"
import mapIcon from "../assets/map.svg"
import widgetIcon from "../assets/widget.svg"
import settingsIcon from "../assets/settings.svg"
import logoutIcon from "../assets/logout.svg"

const style = {
  "display": "flex",
  "flexDirection": "column",
  "color": "#1C1C1E",
  "width": 300,
  "height": "100%",
  "boxShadow": "0px 0px 5px rgba(2, 0, 96, 0.25)",
}

const Sidebar = () => {
  return (
    <div style={style}>
      <p style={{"fontSize": 20, "fontWeight": 700, "color": "#1C1C1E"}}>Меню</p>
      <ul>
        <li><SidebarItem name={"Главная"} icon={homeIcon}/></li>
        <li><SidebarItem name={"Поиск адресов"} icon={searchIcon}/></li>
        <li><SidebarItem name={"Таблицы"} icon={tablesIcon}/></li>
        <li><SidebarItem name={"Календарь"} icon={calendarIcon}/></li>
        <li><SidebarItem name={"Карты"} icon={mapIcon}/></li>
        <li><SidebarItem name={"Виджеты"} icon={widgetIcon}/></li>
        <li><SidebarItem name={"Настройки"} icon={settingsIcon}/></li>
        <li><SidebarItem name={"Выход"} icon={logoutIcon}/></li>
      </ul>
    </div>
  )
}
export default Sidebar