function BtnChangeQuantity({ quantity, setQuantity }) {
  const handleDecrease = () => {
    if (quantity <= 1) return;
    setQuantity(quantity - 1);
  };
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };
  const handleChange = (e) => {
    console.log(Number.isInteger(e.target.value));
    if (Number.isInteger(+e.target.value) !== true || +e.target.value === 0)
      return;
    setQuantity(+e.target.value);
  };
  return (
    <div className="price-number-input">
      <button
        type="button"
        className="price-number-btn btn1"
        onClick={handleDecrease}
      >
        -
      </button>
      <input
        id="number-quality"
        type="text"
        maxLength="3"
        value={quantity}
        className="price-number-quality"
        onChange={handleChange}
      />
      <button
        type="button"
        className="price-number-btn btn2"
        onClick={handleIncrease}
      >
        +
      </button>
    </div>
  );
}

export default BtnChangeQuantity;
