import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import LargeButton from "../components/Basic/LargeButton";
import { postComment } from "../services/CommentsService";

const maxCommentLength = 200;

const CommentForm = ({ route, navigation }) => {
  const { recipeId, recipe } = route.params;

  const [commentText, setCommentText] = useState("");

  const handlePostComment = () => {
    postComment(recipeId, commentText);
    navigation.goBack();
  };

  return (
    <View className="bg-beach-200 flex-1 dark:bg-beach-900 dark:text-white-50">
      <View className="py-6 px-6 mx-auto max-w-md">
        <Text className="my-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-gray-200 ">
          {recipe.name}
        </Text>
      </View>

      <View className="px-6">
        <Text className="text-lg dark:text-white-50">Enter your comment:</Text>

        <TextInput
          className="border p-2 dark:text-white-50 dark:border-gray-200"
          editable
          multiline
          numberOfLines={8}
          maxLength={maxCommentLength}
          value={commentText}
          onChangeText={setCommentText}
          style={{ textAlignVertical: "top" }}
        />
      </View>

      <Text className="text-right px-6 dark:text-white-50">
        {commentText.length}/{maxCommentLength}
      </Text>

      <LargeButton
        labelClassName={"dark:text-gray-900"}
        onPress={handlePostComment}
      >
        Post Comment
      </LargeButton>
    </View>
  );
};

export default CommentForm;
