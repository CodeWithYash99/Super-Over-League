const element = (
  <div className="bg-container">
    <h1 className="title">Super Over League</h1>
    <div className="league-images">
      <img
        src="https://assets.ccbp.in/frontend/react-js/rcb-img.png"
        className="image"
        alt="RCB"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/csk-img.png"
        className="image"
        alt="CSK"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
