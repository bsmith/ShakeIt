import { db } from "../firebase";

// useEffect(() => {
//     const starCountRef = ref(db, "recipe");
//     // const starCountRef = ref(db, "recipe" + postId + "/starCount");
//     onValue(starCountRef, snapshot => {
//       const data = snapshot.val();

//       setValue(data);
//     });
//   }, []);

const exampleComment = {
    userNickname: "Cocktail Enjoyer",
    commentText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet magna ut eros congue convallis. Donec vestibulum eleifend est, in lacinia ex varius sed. Nam nisl neque, luctus non dapibus.",
    date: "2023-02-08"
};

export const getCommentsForRecipe = async (recipeId) => {
    
    // return [exampleComment, exampleComment, exampleComment];
}

export const postComment = async (recipeId, commentText) => {
    console.log(`postComment: ${recipeId}`, commentText);
}