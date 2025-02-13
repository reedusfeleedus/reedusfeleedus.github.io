const Navigation = ({ 
  menuConfig, 
  activeMenu, 
  isMenuBarActive,
  onMenuClick,
  onMenuHover,
  onMenuItemClick 
}) => {
  return (
    <nav className="navbar">
      {Object.entries(menuConfig).map(([key, menu]) => (
        <div 
          key={key}
          className="menu-wrapper"
          onClick={() => onMenuClick(key)}
          onMouseEnter={() => isMenuBarActive && onMenuHover(key)}
        >
          <div className={`menu-item ${activeMenu === key ? 'active' : ''}`}>
            {menu.label}
          </div>
          {activeMenu === key && (
            <div className="dropdown-menu">
              {menu.items.map(item => (
                <div 
                  key={item}
                  className="dropdown-item"
                  onClick={e => {
                    e.stopPropagation();
                    onMenuItemClick(key, item);
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Navigation; 