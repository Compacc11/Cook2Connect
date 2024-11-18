// script.js

function filterRecipes(category) {
    // Get all recipe cards
    const recipes = document.querySelectorAll('.recipe-card');
  
    // Loop through recipes and filter by category
    recipes.forEach(recipe => {
      const recipeCategory = recipe.getAttribute('data-category');
  
      if (category === 'all' || recipeCategory === category) {
        recipe.style.display = 'block'; // Show matching recipes
      } else {
        recipe.style.display = 'none';  // Hide non-matching recipes
      }
    });
  
    // Highlight active category button (optional)
    const buttons = document.querySelectorAll('.category-buttons button');
    buttons.forEach(button => button.classList.remove('active'));
    document.querySelector(`button[onclick="filterRecipes('${category}')"]`).classList.add('active');
  }
  