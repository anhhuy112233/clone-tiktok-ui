import Header from "../components/Header";

function HeaderOnly({ children }) {
  return (
    <div className="default-layout ">
      <Header />
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  );
}
export default HeaderOnly;
