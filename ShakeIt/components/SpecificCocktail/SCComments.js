import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import moment from "moment";
import LargeButton from "../Basic/LargeButton";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { getCommentsForRecipe } from "../../services/CommentsService";

const Comment = ({ comment }) => {
  // date: "8 Feb '23",
  const formattedDate = moment(comment.date).format("D MMM 'YY, HH:mm");
  return (
    <View className="mt-6 mx-14 bg-white-50 px-4 py-4 dark:bg-gray-600">
      <Text className="text-base mb-4 text-left font-bold dark:text-white-50">
        {comment.userNickname}
      </Text>
      <Text className="text-base text-left dark:text-white-50">
        {comment.commentText}
      </Text>
      <Text className="text-base text-right italic dark:text-white-50">
        {formattedDate}
      </Text>
    </View>
  );
};

const SCComments = ({ recipe }) => {
  const navigation = useNavigation();

  const [comments, setComments] = useState([]);

  const isFocused = useIsFocused();
  useEffect(() => {
    const fetchData = () => {
      getCommentsForRecipe(recipe.id).then(comments => {
        if (comments != null) {
          setComments(Object.values(comments));
        }
      });
    };
    fetchData();
  }, [recipe.id, isFocused]);

  const commentItems = comments.map((comment, index) => (
    <Comment key={index} comment={comment} />
  ));

  return (
    <View className="">
      <LargeButton
        labelClassName={"dark:text-gray-900"}
        onPress={() =>
          navigation.navigate("CommentForm", {
            recipeId: recipe.id,
            recipe: recipe,
          })
        }
      >
        Post Comment
      </LargeButton>
      {commentItems}
    </View>
  );
};

export default SCComments;
