import Color from "./Color.jsx";
import './ColorStyle.css';

const colors = [
  {
    hex: "#91A6FF",
    name: "Cornflower Blue",
  },
  {
    hex: "#FF88DC",
    name: "Persian Pink",
  },
  {
    hex: "#80FF72",
    name: "Screamin Green",
  },
  {
    hex: "#FF5154",
    name: "Tart Orange",
  },
];

export default function ColorRenderer() {
  return (
    <div className="container">
      {colors.map((element, index) => {
        return(
          <Color 
            key = {index}
            hex = {element.hex}
            name = {element.name}
          />
        );
      })}
    </div>
  );
}
