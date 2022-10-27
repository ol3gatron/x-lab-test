import SidebarItem from "./SidebarItem"

const style = {
  "display": "flex",
  "flex-direction": "column",
  "padding": "2rem",
  "color": "#1C1C1E"
}

const Sidebar = () => {
  return (
    <div style={style}>
      <p style={{"fontSize": 20, "fontWeight": 700, "color": "#1C1C1E"}}>Меню</p>
      <ul>
        <li><SidebarItem name={"Главная"} icon={"home"}/></li>
        <li><SidebarItem name={"Поиск адресов"} icon={"search"}/></li>
        <li><SidebarItem name={"Таблицы"} icon={"grid_view"}/></li>
        <li><SidebarItem name={"Календарь"} icon={"calendar_month"}/></li>
        <li><SidebarItem name={"Карты"} icon={"location_on"}/></li>
        <li><SidebarItem name={"Виджеты"} icon={"dvr"}/></li>
        <li><SidebarItem name={"Настройки"} icon={"settings"}/></li>
        <li><SidebarItem name={"Выход"} icon={"logout"}/></li>
      </ul>
    </div>
  )
}
export default Sidebar