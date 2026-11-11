import './detail.scss';
// import { useParams } from 'react-router-dom';
import riceImg from '../../img/Featured Recipe.jpg'; // замените на нужную картинку

export default function Detail() {
  // const { id } = useParams(); // пригодится, когда будете брать рецепт по id

  return (
    <section className="detail container">
      <h1 className="detail__title">Health Japanese Fried Rice</h1>

      <div className="detail__meta">
        <div className="detail__author">
          <img src="https://i.pravatar.cc/80?img=12" alt="John Smith" />
          <div>
            <b>John Smith</b>
            <span>15 March 2022</span>
          </div>
        </div>
        <div className="detail__info"><b>PREP TIME</b><span>15 Minutes</span></div>
        <div className="detail__info"><b>COOK TIME</b><span>15 Minutes</span></div>
        <div className="detail__info"><span>Chicken</span></div>

        <div className="detail__actions">
          <button className="detail__btn">🖨<small>PRINT</small></button>
          <button className="detail__btn">⇪<small>SHARE</small></button>
        </div>
      </div>

      <div className="detail__main">
        <img className="detail__img" src={riceImg} alt="Fried rice" />

        <aside className="detail__nutrition">
          <h3>Nutrition Information</h3>
          <ul>
            <li><span>Calories</span><b>219.9 kcal</b></li>
            <li><span>Total Fat</span><b>10.7 g</b></li>
            <li><span>Protein</span><b>7.9 g</b></li>
            <li><span>Carbohydrate</span><b>22.3 g</b></li>
            <li><span>Cholesterol</span><b>37.4 mg</b></li>
          </ul>
          <p>adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </aside>
      </div>
    </section>
  );
}