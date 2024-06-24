import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedStyles, setSelectedStyles] = useState([]);
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);

  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isStyleOpen, setIsStyleOpen] = useState(false);
  const [isEventOpen, setIsEventOpen] = useState(false);
  const [isColorOpen, setIsColorOpen] = useState(false);

  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleApplyFilters();
    }
  };

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const handleStyleChange = (event) => {
    const style = event.target.value;
    setSelectedStyles((prev) =>
      prev.includes(style)
        ? prev.filter((item) => item !== style)
        : [...prev, style]
    );
  };

  const handleEventChange = (event) => {
    const evt = event.target.value;
    setSelectedEvents((prev) =>
      prev.includes(evt) ? prev.filter((item) => item !== evt) : [...prev, evt]
    );
  };

  const handleColorChange = (color) => {
    setSelectedColors((prev) =>
      prev.includes(color)
        ? prev.filter((item) => item !== color)
        : [...prev, color]
    );
  };
  const handleApplyFilters = () => {
    const filters = {
      searchTerm,
    };

    const queryString = new URLSearchParams(filters).toString();
    navigate(`/filtered?${queryString}`);
  };

  const toggleSection = (section) => {
    switch (section) {
      case "category":
        setIsCategoryOpen(!isCategoryOpen);
        break;
      case "style":
        setIsStyleOpen(!isStyleOpen);
        break;
      case "event":
        setIsEventOpen(!isEventOpen);
        break;
      case "color":
        setIsColorOpen(!isColorOpen);
        break;
      default:
        break;
    }
  };

  return (
    <div className="sidebar">
      <div className="search-box">
        <input
          type="text"
          placeholder="Gợi ý..."
          value={searchTerm}
          onChange={handleSearchChange}
          onKeyPress={handleKeyPress}
        />
      </div>
      <div className="filter-section">
        <h3 onClick={() => toggleSection("category")}>Đi đâu</h3>
        <ul className={isCategoryOpen ? "active" : ""}>
          {["Công việc", "Thể thao", "Hẹn hò", "Du lịch"].map((category) => (
            <li key={category}>
              <label>
                <input
                  type="checkbox"
                  value={category}
                  checked={selectedCategories.includes(category)}
                  onChange={handleCategoryChange}
                />
                {category}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className="filter-section">
        <h3 onClick={() => toggleSection("style")}>Phong cách</h3>
        <ul className={isStyleOpen ? "active" : ""}>
          {[
            "Năng động",
            "Thanh lịch",
            "Cổ điển",
            "Đường phố",
            "Lãng mạng",
            "Trẻ trung",
          ].map((style) => (
            <li key={style}>
              <label>
                <input
                  type="checkbox"
                  value={style}
                  checked={selectedStyles.includes(style)}
                  onChange={handleStyleChange}
                />
                {style}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className="filter-section">
        <h3 onClick={() => toggleSection("event")}>Sự kiện đặc biệt</h3>
        <ul className={isEventOpen ? "active" : ""}>
          {["Tết", "Valentine", "Triển lãm", "Lễ hội", "Sinh nhật"].map(
            (event) => (
              <li key={event}>
                <label>
                  <input
                    type="checkbox"
                    value={event}
                    checked={selectedEvents.includes(event)}
                    onChange={handleEventChange}
                  />
                  {event}
                </label>
              </li>
            )
          )}
        </ul>
      </div>
      <div className="filter-section">
        <h3 onClick={() => toggleSection("color")}>Màu sắc</h3>
        <ul className={`color-list ${isColorOpen ? "active" : ""}`}>
          {[
            { color: "Trắng", className: "white" },
            { color: "Đỏ", className: "red" },
            { color: "Tím", className: "purple" },
            { color: "Vàng", className: "yellow" },
            { color: "Đen", className: "black" },
            { color: "Xám", className: "gray" },
            { color: "Xanh", className: "blue" },
            { color: "Ghi", className: "olive" },
            { color: "Tím than", className: "indigo" },
            { color: "Nâu", className: "brown" },
            { color: "Cam", className: "orange" },
            { color: "Bê", className: "beige" },
            { color: "Xanh lá", className: "green" },
            { color: "Hồng", className: "pink" },
          ].map(({ color, className }) => (
            <li
              key={color}
              onClick={() => handleColorChange(color)}
              className={`color-option ${className} ${
                selectedColors.includes(color) ? "selected" : ""
              }`}
            ></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
