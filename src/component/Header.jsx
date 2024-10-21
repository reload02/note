import "./Header.css";

const Header = ({ leftChild, middleChild, rightChild }) => {
  return (
    <div className="Header">
      <div className="left">{leftChild}</div>
      <div className="middle">{middleChild}</div>
      <div className="right">{rightChild}</div>
    </div>
  );
};

export default Header;
