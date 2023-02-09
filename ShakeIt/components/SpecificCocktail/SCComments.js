import { View, Text, ScrollView } from "react-native";
import React from "react";
import moment from 'moment';

const exampleComment = {
  userNickname: "Cocktail Enjoyer",
  commentText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet magna ut eros congue convallis. Donec vestibulum eleifend est, in lacinia ex varius sed. Nam nisl neque, luctus non dapibus.",
  date: "2023-02-08"
};

const Comment = ({comment}) => {
  // date: "8 Feb '23",
  const formattedDate = moment(comment.date).format('D MMM \'YY');
  return (
    <View className="mt-6 mx-14 bg-green-300 px-4 py-4">
      <Text className="text-base mb-4 text-left font-bold">{comment.userNickname}</Text>
      <Text className="text-base text-left">{comment.commentText}</Text>
      <Text className="text-base text-right italic">{formattedDate}</Text>
    </View>
  )
}

const SCComments = ({recipe}) => {
  return (
    <View>
      <Comment comment={exampleComment} />
      <Comment comment={exampleComment} />
      <Comment comment={exampleComment} />
      <Comment comment={exampleComment} />
      <Comment comment={exampleComment} />
    </View>
  );
};

export default SCComments;
