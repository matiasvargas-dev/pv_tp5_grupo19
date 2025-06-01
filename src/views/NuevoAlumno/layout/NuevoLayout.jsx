import "./style.css";

const NuevoLayout = ({ children }) => {
  return (
    <>
      <div className="container_layout">{children}</div>
    </>
  );
};

export default NuevoLayout;
