import { auth, db } from "../firebase";
import { ref, onValue, push, set } from "firebase/database";
import moment from "moment";

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
    userNickname: auth.currentUser ? auth.currentUser.displayName : "alcoholic",
    commentText: commentText,
    date: moment().format("YYYY-MM-DD HH:mm"),
  });
};
