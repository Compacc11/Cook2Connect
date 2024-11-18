function filterRecipes() {
  const selectedCategory = document.getElementById('category-select').value;
  const recipeCards = document.querySelectorAll('.recipe-card');

  recipeCards.forEach(card => {
    if (selectedCategory === 'all' || card.getAttribute('data-category') === selectedCategory) {
      card.style.display = 'block'; // Show the card
    } else {
      card.style.display = 'none'; // Hide the card
    }
  });
}
