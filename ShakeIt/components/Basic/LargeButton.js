import { View, Text, ScrollView, Pressable, Image } from "react-native";
import React, { useState, useEffect } from "react";

const LargeButton = ({ className, labelClassName, children, ...props }) => {
  return (
    <Pressable
      className={
        "mt-6 mx-7 bg-cerise-400 dark:bg-cerise-600 active:bg-cerise-600 hover:bg-cerise-600 rounded " +
        className
      }
      {...props}
    >
      <Text
        className={
          "text-center dark:text-white-50 font-bold py-2 rounded text-lg " +
          labelClassName
        }
      >
        {children}
      </Text>
    </Pressable>
  );
};

export default LargeButton;
