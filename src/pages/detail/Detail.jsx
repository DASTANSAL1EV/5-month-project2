import './detail.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Detail() {
  const { id } = useParams();
  const [data, setData] = useState(null); // { id, recipe, author } или { id, error: true }

  useEffect(() => {
    window.scrollTo(0, 0);

    axios.get(`https://dummyjson.com/recipes/${id}`)
      .then(async ({ data: recipe }) => {
        const { data: author } = await axios.get(`https://dummyjson.com/users/${recipe.userId}`);
        setData({ id, recipe, author });
      })
      .catch((e) => {
        console.log(e);
        setData({ id, error: true });
      });
  }, [id]);

  // пока данных для текущего id нет, это загрузка
  const loading = !data || data.id !== id;
  const recipe = data?.recipe;
  const author = data?.author;

  if (loading) return <p className="container detail__info">Loading...</p>;
  if (data.error || !recipe) return <p className="container detail__info">Рецепт не найден</p>;

  return (
    <section className="detail container">
      <h1 className="detail__title">{recipe.name}</h1>

      <div className="detail__meta">
        {author && (
          <div className="detail__author">
            <img src={author.image} alt={author.firstName} />
            <div>
              <b>{author.firstName} {author.lastName}</b>
              <span>{recipe.cuisine} cuisine</span>
            </div>
          </div>
        )}
        <div className="detail__item"><b>PREP TIME</b><span>{recipe.prepTimeMinutes} Minutes</span></div>
        <div className="detail__item"><b>COOK TIME</b><span>{recipe.cookTimeMinutes} Minutes</span></div>
        <div className="detail__item"><span>{recipe.mealType?.join(', ')}</span></div>

        <div className="detail__actions">
          <button className="detail__btn" onClick={() => window.print()}>
            🖨<small>PRINT</small>
          </button>
          <button
            className="detail__btn"
            onClick={() => navigator.clipboard.writeText(window.location.href)}
          >
            ⇪<small>SHARE</small>
          </button>
        </div>
      </div>

      <div className="detail__main">
        <img className="detail__img" src={recipe.image} alt={recipe.name} />

        <aside className="detail__nutrition">
          <h3>Information</h3>
          <ul>
            <li><span>Calories</span><b>{recipe.caloriesPerServing} kcal</b></li>
            <li><span>Servings</span><b>{recipe.servings}</b></li>
            <li><span>Difficulty</span><b>{recipe.difficulty}</b></li>
            <li><span>Rating</span><b>⭐ {recipe.rating} ({recipe.reviewCount})</b></li>
            <li><span>Cuisine</span><b>{recipe.cuisine}</b></li>
          </ul>
          <p>{recipe.tags?.map((t) => `#${t}`).join(' ')}</p>
        </aside>
      </div>

      <div className="detail__content">
        <div>
          <h2>Ingredients</h2>
          <ul className="detail__ingredients">
            {recipe.ingredients.map((item, i) => (
              <li key={i}>
                <label>
                  <input type="checkbox" /> <span>{item}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2>Directions</h2>
          <ol className="detail__steps">
            {recipe.instructions.map((step, i) => (
              <li key={i}>
                <b>Step {i + 1}</b>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}