import './simpleRecipes.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default function SimpleRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://dummyjson.com/recipes?limit=50')
      .then(({ data }) => setRecipes(data?.recipes || []))
      .catch((e) => {
        console.log(e);
        setError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  const filtered = recipes.filter((r) =>
    r.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="container recipesCont">
      <h1 className="recipesCont__title">Simple and tasty recipes</h1>
      <p className="recipesCont__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, dignissimos
        consequatur cum reiciendis corporis architecto sunt impedit numquam explicabo
        tempora iusto excepturi quisquam quae optio earum nulla maiores eius sit!
      </p>

      <input
        className="recipesCont__search"
        type="text"
        placeholder="Search recipe..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading && <p className="recipesCont__info">Loading...</p>}
      {error && <p className="recipesCont__info">Не удалось загрузить рецепты</p>}
      {!loading && !error && filtered.length === 0 && (
        <p className="recipesCont__info">Ничего не найдено</p>
      )}

      <div className="recipesCont__grid">
        {filtered.map((recipe) => (
          <NavLink key={recipe.id} to={`/recipes/${recipe.id}`} className="recipeCard">
            <img className="recipeCard__img" src={recipe.image} alt={recipe.name} />
            <h3 className="recipeCard__name">{recipe.name}</h3>
            <div className="recipeCard__meta">
              <span>⏱ {recipe.prepTimeMinutes + recipe.cookTimeMinutes} min</span>
              <span>🍴 {recipe.cuisine}</span>
              <span>⭐ {recipe.rating}</span>
            </div>
          </NavLink>
        ))}
      </div>
    </section>
  );
}