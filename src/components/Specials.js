import DishCard from "../DishCard";

function Specials() {
  return (
    <div className="specials">
      <div className="specials-header">
        <h1>This Week's Specials</h1>
        <a href="#">Online Menu</a>
      </div>
      <div className="specials-card">
        <DishCard
          img="images/greek salad.jpg"
          name="Greek salad"
          price="12.99"
          description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
        />
        <DishCard
          img="images/bruchetta.svg"
          name="Bruchetta"
          price="5.99"
          description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasone seasoned with salt and olive oil."
        />
        <DishCard
          img="images/lemon dessert.jpg"
          name="Lemon Dessert"
          price="5.00"
          description="This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
        />
      </div>
    </div>
  );
}

export default Specials;
