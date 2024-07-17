import "./style.css";

function Card({ name, image, city }) {
  function onClickButton(placeName) {
    alert(placeName + " is clicked!");
  }

  return (
    <div className="card">
      <img alt={name} src={image} className="card-image" />

      <div className="card-content">
        <div className="item">
          <p>{name}</p>
          <p>{city}</p>
        </div>

        <button
          className="btn item"
          // onClick={() => alert(name + " is clicked!")}
          // onClick={onClickButton}
          onClick={() => onClickButton(name)}
        >
          Select
        </button>
      </div>
    </div>
  );
}

export default Card;
