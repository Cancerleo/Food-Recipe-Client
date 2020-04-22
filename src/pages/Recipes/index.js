import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "../../store/recipes/actions";
import { selectRecipes } from "../../store/recipes/selectors";
import RecipeCard from "../../components/RecipeCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SearchForm from "../../components/SearchForm";

export default function Recipes() {
  const dispatch = useDispatch();
  const recipes = useSelector(selectRecipes);
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  // const [query, setQuery] = useState("");

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  useEffect(() => {
    console.log("Special recipes", recipes);

    setFilteredRecipes(recipes);
  }, [recipes]);

  const searchRecipes = (query) => {
    if (query) {
      setFilteredRecipes(
        recipes.filter((recipe) => {
          return recipe.name.toLowerCase().includes(query.toLowerCase());
        })
      );
    } else {
      setFilteredRecipes(recipes);
    }
  };

  if (!recipes) return <h6>Loading</h6>;

  return (
    <div>
      <h3>Find your favorite recipe here</h3>

      <Container>
        <SearchForm setSearch={searchRecipes} />
        <br />
        <Row>
          {filteredRecipes.map((recipe) => {
            return (
              <RecipeCard
                key={recipe.id}
                id={recipe.id}
                name={recipe.name}
                imageUrl={recipe.imageUrl}
                description={recipe.description}
                userId={recipe.userId}
                showLink={true}
              />
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
