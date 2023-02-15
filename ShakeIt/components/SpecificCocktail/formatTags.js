export const formatTags = recipe => {
  if (recipe.tags) {
    return recipe.tags.map(tag => "#" + tag).join(" ");
  } else {
    return "";
  }
};
