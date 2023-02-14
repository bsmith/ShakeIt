import { db } from "../firebase";

// useEffect(() => {
//     const starCountRef = ref(db, "recipe");
//     // const starCountRef = ref(db, "recipe" + postId + "/starCount");
//     onValue(starCountRef, snapshot => {
//       const data = snapshot.val();

//       setValue(data);
//     });
//   }, []);

// // export const getRecipeById = async (recipeId) => {
//     const resp = await fetch(baseURL + '/recipes/' + recipeId + '.json');
//     const recipe = await resp.json();
//     recipe.id = recipeId;
//     return recipe;
// };

const exampleComment = {
  userNickname: "Cocktail Enjoyer",
  commentText:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet magna ut eros congue convallis. Donec vestibulum eleifend est, in lacinia ex varius sed. Nam nisl neque, luctus non dapibus.",
  date: "2023-02-08",
};

export const getCommentsForRecipe = async (recipeId) => {
  const resp = await fetch(baseUrl + '/comments/' + recipeId + '.json');
  const comments = await resp.json();
  return comments;
};

export const postComment = async (recipeId, commentText) => {
  console.log(`postComment: ${recipeId}`, commentText);
};


