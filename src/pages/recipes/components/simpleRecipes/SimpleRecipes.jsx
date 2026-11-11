import './simpleRecipes.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default function SimpleRecipes() {
  const [recipes, setRecipes] = useState();

  useEffect(() => {
    axios.get('https://dummyjson.com/recipes')
    .then(({data}) => setRecipes(data?.recipes))
    .catch((e) => console.log(e))
  }, [])
  return (
    <section className="container recipesCont">
        <h1>Simple and tasty recipes</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, dignissimos consequatur cum 
        reiciendis corporis architecto sunt impedit numquam explicabo tempora iusto excepturi quisquam 
        quae optio earum nulla maiores eius sit!</p>
        {
          recipes?.map((recipe) => (
            <NavLink key={recipe.id} to={`/recipes/${recipe.id}`}>
              <h1>{recipe.name}</h1>
            </NavLink>
          ))
        }
    </section>
  )
}
