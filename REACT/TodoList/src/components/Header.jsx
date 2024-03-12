const Header = () => {
  return (
    <div className="Header">
      <h3>📆 Today is..</h3>
      <h1 className="date">{new Date().toDateString()}</h1>
    </div>
  );
};

export default Header;
