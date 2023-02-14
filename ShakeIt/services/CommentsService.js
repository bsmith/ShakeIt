import { auth, db } from "../firebase";
import { ref, onValue, push, set } from "firebase/database";
import moment from "moment";

const exampleComment = {
  userNickname: "Cocktail Enjoyer",
  commentText:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet magna ut eros congue convallis. Donec vestibulum eleifend est, in lacinia ex varius sed. Nam nisl neque, luctus non dapibus.",
  date: "2023-02-08",
};

export const getCommentsForRecipe = async recipeId => {
  const dbRef = ref(db, "/dataV1/comments/" + recipeId);

  const myPromise = new Promise((resolve, reject) => {
    onValue(
      dbRef,
      snapshot => {
        const comments = [];
        snapshot.forEach(childSnapshot => {
          const childKey = childSnapshot.key;
          const childData = childSnapshot.val();
          // ...
          console.log(childData);
          comments.push(childData);
        });
        resolve(comments);
      },
      {
        onlyOnce: true,
      }
    );
  });
  return myPromise;
};

export const postComment = async (recipeId, commentText) => {
  console.log(`postComment: ${recipeId}`, commentText);

  const dbRef = ref(db, "/dataV1/comments/" + recipeId);

  const newCommentRef = push(dbRef);
  set(newCommentRef, {
    userNickname: auth.currentUser.displayName,
    // userNickname: "Cocktail Enjoyer",
    commentText: commentText,
    date: moment().format("YYYY-MM-DD HH:mm"),
  });
};
