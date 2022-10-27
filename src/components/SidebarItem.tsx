
type props = {
  name: string;
  icon: string;
}

const style = {
  "display": "flex",
  "align-items": "center",
  "font-size": 20,
  "line-height": "1.5rem",
  "font-weight": "600",
  "gap": "1rem",
  "padding": "20px 0"
}

const SidebarItem = ({name, icon}: props) => {
  return (
    <div style={style}>
      <span className="material-symbols-rounded">
        {icon}
      </span>
      <p>{name}</p>
    </div>
  )
}
export default SidebarItem