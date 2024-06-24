import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FashionConsultant.css"; // Đổi tên file CSS nếu cần
import Header from "../Header/Header";

const FashionConsultant = () => {
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedStyle, setSelectedStyle] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState([]);
  const [selectedColor, setSelectedColor] = useState([]);

  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isStyleOpen, setIsStyleOpen] = useState(false);
  const [isEventOpen, setIsEventOpen] = useState(false);
  const [isColorOpen, setIsColorOpen] = useState(false);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const navigate = useNavigate();

  const handleCategoryChange = (category) => {
    const isSelected = selectedCategory.includes(category);
    if (isSelected) {
      setSelectedCategory(selectedCategory.filter((item) => item !== category));
    } else {
      setSelectedCategory([...selectedCategory, category]);
    }
  };

  const handleStyleChange = (style) => {
    const isSelected = selectedStyle.includes(style);
    if (isSelected) {
      setSelectedStyle(selectedStyle.filter((item) => item !== style));
    } else {
      setSelectedStyle([...selectedStyle, style]);
    }
  };

  const handleEventChange = (event) => {
    const isSelected = selectedEvent.includes(event);
    if (isSelected) {
      setSelectedEvent(selectedEvent.filter((item) => item !== event));
    } else {
      setSelectedEvent([...selectedEvent, event]);
    }
  };

  const handleColorChange = (color) => {
    const isSelected = selectedColor.includes(color);
    if (isSelected) {
      setSelectedColor(selectedColor.filter((item) => item !== color));
    } else {
      setSelectedColor([...selectedColor, color]);
    }
  };

  const handleApplyFilters = () => {
    const filters = {
      selectedCategory: selectedCategory.join(","),
      selectedStyle: selectedStyle.join(","),
      selectedEvent: selectedEvent.join(","),
      selectedColor: selectedColor.join(","),
    };

    const queryString = new URLSearchParams(filters).toString();
    navigate(`/filtered?${queryString}`);
  };

  const handleContinue = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleGoBack = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  return (
    <div className="fashion-consultant-container">
      <Header />
      <h1 className="fashion-consultant-title">Tư vấn thời trang</h1>
      {currentQuestion === 0 && (
        <div className="fashion-consultant-section">
          <h3
            className="fashion-consultant-header"
            onClick={() => setIsCategoryOpen(!isCategoryOpen)}
          >
            Bạn muốn mặc đi đâu?
          </h3>
          <ul
            className={`fashion-consultant-option-list ${
              isCategoryOpen ? "active" : ""
            }`}
          >
            <li
              className={`fashion-consultant-option-item ${
                selectedCategory.includes("Công việc") ? "selected" : ""
              }`}
              onClick={() => handleCategoryChange("Công việc")}
            >
              Công việc
            </li>
            <li
              className={`fashion-consultant-option-item ${
                selectedCategory.includes("Thể thao") ? "selected" : ""
              }`}
              onClick={() => handleCategoryChange("Thể thao")}
            >
              Thể thao
            </li>
            <li
              className={`fashion-consultant-option-item ${
                selectedCategory.includes("Hẹn hò") ? "selected" : ""
              }`}
              onClick={() => handleCategoryChange("Hẹn hò")}
            >
              Hẹn hò
            </li>
            <li
              className={`fashion-consultant-option-item ${
                selectedCategory.includes("Du lịch") ? "selected" : ""
              }`}
              onClick={() => handleCategoryChange("Du lịch")}
            >
              Du lịch
            </li>
          </ul>
          <div className="fashion_consultant-buttons">
            <button onClick={handleGoBack} disabled={currentQuestion === 0}>
              Trở lại
            </button>
            <button onClick={handleContinue}>Tiếp tục</button>
          </div>
        </div>
      )}
      {currentQuestion === 1 && (
        <div className="fashion-consultant-section">
          <h3
            className="fashion-consultant-header"
            onClick={() => setIsStyleOpen(!isStyleOpen)}
          >
            Phong cách ăn mặc mà bạn thích là gì?
          </h3>
          <ul
            className={`fashion-consultant-option-list ${
              isStyleOpen ? "active" : ""
            }`}
          >
            <li
              className={`fashion-consultant-option-item ${
                selectedStyle.includes("Năng động") ? "selected" : ""
              }`}
              onClick={() => handleStyleChange("Năng động")}
            >
              Năng động
            </li>
            <li
              className={`fashion-consultant-option-item ${
                selectedStyle.includes("Thanh lịch") ? "selected" : ""
              }`}
              onClick={() => handleStyleChange("Thanh lịch")}
            >
              Thanh lịch
            </li>
            <li
              className={`fashion-consultant-option-item ${
                selectedStyle.includes("Cổ điển") ? "selected" : ""
              }`}
              onClick={() => handleStyleChange("Cổ điển")}
            >
              Cổ điển
            </li>
            <li
              className={`fashion-consultant-option-item ${
                selectedStyle.includes("Đường phố") ? "selected" : ""
              }`}
              onClick={() => handleStyleChange("Đường phố")}
            >
              Đường phố
            </li>
            <li
              className={`fashion-consultant-option-item ${
                selectedStyle.includes("Lãng mạng") ? "selected" : ""
              }`}
              onClick={() => handleStyleChange("Lãng mạng")}
            >
              Lãng mạng
            </li>
            <li
              className={`fashion-consultant-option-item ${
                selectedStyle.includes("Trẻ trung") ? "selected" : ""
              }`}
              onClick={() => handleStyleChange("Trẻ trung")}
            >
              Trẻ trung
            </li>
          </ul>
          <div className="fashion_consultant-buttons">
            <button onClick={handleGoBack}>Trở lại</button>
            <button onClick={handleContinue}>Tiếp tục</button>
          </div>
        </div>
      )}
      {currentQuestion === 2 && (
        <div className="fashion-consultant-section">
          <h3
            className="fashion-consultant-header"
            onClick={() => setIsEventOpen(!isEventOpen)}
          >
            Bạn chuẩn bị cho sự kiện đặc biệt nào trong ngày?
          </h3>
          <ul
            className={`fashion-consultant-option-list ${
              isEventOpen ? "active" : ""
            }`}
          >
            <li
              className={`fashion-consultant-option-item ${
                selectedEvent.includes("Tết") ? "selected" : ""
              }`}
              onClick={() => handleEventChange("Tết")}
            >
              Tết
            </li>
            <li
              className={`fashion-consultant-option-item ${
                selectedEvent.includes("Valentine") ? "selected" : ""
              }`}
              onClick={() => handleEventChange("Valentine")}
            >
              Lễ tình nhân
            </li>
            <li
              className={`fashion-consultant-option-item ${
                selectedEvent.includes("Triển lãm") ? "selected" : ""
              }`}
              onClick={() => handleEventChange("Triển lãm")}
            >
              Triển lãm
            </li>
            <li
              className={`fashion-consultant-option-item ${
                selectedEvent.includes("Lễ hội") ? "selected" : ""
              }`}
              onClick={() => handleEventChange("Lễ hội")}
            >
              Lễ hội
            </li>
            <li
              className={`fashion-consultant-option-item ${
                selectedEvent.includes("Sinh nhật") ? "selected" : ""
              }`}
              onClick={() => handleEventChange("Sinh nhật")}
            >
              Sinh nhật
            </li>
          </ul>
          <div className="fashion_consultant-buttons">
            <button onClick={handleGoBack}>Trở lại</button>
            <button onClick={handleContinue}>Tiếp tục</button>
          </div>
        </div>
      )}
      {currentQuestion === 3 && (
        <div className="fashion-consultant-section">
          <h3
            className="fashion-consultant-header"
            onClick={() => setIsColorOpen(!isColorOpen)}
          >
            Bạn thích màu sắc nào?
          </h3>
          <ul
            className={`fashion-consultant_color-list ${
              isColorOpen ? "active" : ""
            }`}
          >
            <li
              onClick={() => handleColorChange("Trắng")}
              className={`fashion-consultant_color-option white ${
                selectedColor.includes("Trắng") ? "selected" : ""
              }`}
            ></li>
            <li
              onClick={() => handleColorChange("Đỏ")}
              className={`fashion-consultant_color-option red ${
                selectedColor.includes("Đỏ") ? "selected" : ""
              }`}
            ></li>
            <li
              onClick={() => handleColorChange("Tím")}
              className={`fashion-consultant_color-option purple ${
                selectedColor.includes("Tím") ? "selected" : ""
              }`}
            ></li>
            <li
              onClick={() => handleColorChange("Vàng")}
              className={`fashion-consultant_color-option yellow ${
                selectedColor.includes("Vàng") ? "selected" : ""
              }`}
            ></li>
            <li
              onClick={() => handleColorChange("Đen")}
              className={`fashion-consultant_color-option black ${
                selectedColor.includes("Đen") ? "selected" : ""
              }`}
            ></li>
            <li
              onClick={() => handleColorChange("Xám")}
              className={`fashion-consultant_color-option gray ${
                selectedColor.includes("Xám") ? "selected" : ""
              }`}
            ></li>
            <li
              onClick={() => handleColorChange("Xanh")}
              className={`fashion-consultant_color-option blue ${
                selectedColor.includes("Xanh") ? "selected" : ""
              }`}
            ></li>
            <li
              onClick={() => handleColorChange("Ghi")}
              className={`fashion-consultant_color-option olive ${
                selectedColor.includes("Ghi") ? "selected" : ""
              }`}
            ></li>
            <li
              onClick={() => handleColorChange("Tím than")}
              className={`fashion-consultant_color-option indigo ${
                selectedColor.includes("Tím than") ? "selected" : ""
              }`}
            ></li>
            <li
              onClick={() => handleColorChange("Nâu")}
              className={`fashion-consultant_color-option brown ${
                selectedColor.includes("Nâu") ? "selected" : ""
              }`}
            ></li>
            <li
              onClick={() => handleColorChange("Cam")}
              className={`fashion-consultant_color-option orange ${
                selectedColor.includes("Cam") ? "selected" : ""
              }`}
            ></li>
            <li
              onClick={() => handleColorChange("Bê")}
              className={`fashion-consultant_color-option beige ${
                selectedColor.includes("Bê") ? "selected" : ""
              }`}
            ></li>
            <li
              onClick={() => handleColorChange("Xanh lá")}
              className={`fashion-consultant_color-option green ${
                selectedColor.includes("Xanh lá") ? "selected" : ""
              }`}
            ></li>
            <li
              onClick={() => handleColorChange("Hồng")}
              className={`fashion-consultant_color-option pink ${
                selectedColor.includes("Hồng") ? "selected" : ""
              }`}
            ></li>
          </ul>
          <div className="fashion_consultant-buttons">
            <button onClick={handleGoBack}>Trở lại</button>
            <button onClick={handleApplyFilters}>Hoàn thành</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FashionConsultant;
