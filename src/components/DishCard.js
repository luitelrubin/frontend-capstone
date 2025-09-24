function DishCard(props) {
  return (
    <div className="card">
      <img src={props.img} alt={props.name} />
      <div className="card-header">
        <h3>{props.name}</h3>
        <h3>${props.price}</h3>
      </div>
      <p>{props.description}</p>
      <a href="#">Order a delivery 🚚</a>
    </div>
  );
}
export default DishCard;
