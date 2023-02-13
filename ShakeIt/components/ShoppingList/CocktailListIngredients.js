// import React, { useState, useEffect } from "react";
// import { View, StyleSheet, Text, Pressable } from "react-native";
// import { MaterialTabBar, Tabs } from "react-native-collapsible-tab-view";
// import { ListBulletIcon } from "react-native-heroicons/solid";

// import { getRecipeById } from "../services/RecipesService";
// import SCIngredients from "../components/SpecificCocktail/SCIngredients";
// import SCRecipe from "../components/SpecificCocktail/SCRecipe";
// import SCComments from "../components/SpecificCocktail/SCComments";
// import CocktailDescription from "../components/SpecificCocktail/CocktailDescription";
// import ButtonsFooter from "../components/ButtonsFooter";


// const SpecificCocktail = ({ route, navigation }) => {
//   const { recipeId } = route.params;
//   const [recipe, setRecipe] = useState(null);

//   useEffect(() => {
//     getRecipeById(recipeId).then(recipe => {
//       setRecipe(recipe);
//     });
//   }, [recipeId]);

//   const Header = () => {
//     return (
//       <View className=" bg-beach-200">
//         <CocktailDescription recipe={recipe} />
//       </View>
//     );
//   };

//   if (!recipe) {
//     return <Text>Loading...</Text>;
//   }

//   /* Look into changing the style of the font in the tabs */
//   return (<>
//     <Tabs.Container
//       renderHeader={Header}
//       renderTabBar={(props) => <MaterialTabBar className="bg-beach-400" {...props}/>}
//     >
//       <Tabs.Tab name="Recipe" key="recipe">
//         <Tabs.ScrollView className="bg-beach-200">
//           <SCIngredients recipe={recipe} />
//           <SCRecipe recipe={recipe} />
//           <View className=" flex-row-reverse items-center mx-40 px-2 h-12 bg-cerise-400 dark:bg-cerise-600 active:bg-cerise-600 hover:bg-cerise-600 rounded"
//         >
//           {/* <CheckIcon
//           onPress={() =>
//             navigation.navigate("SpecificCategory", {
//               categoryId: index,
//               categoryData: ingredients,
//             })
//           }
//           className="pb-2"
//         >
//           <View className="checkbox bg-cerise-400 dark:bg-cerise-600 text-center font-bold py-1 rounded-full w-20">
            
//           </View>
//         </CheckIcon> */}
//            <Pressable
//             onPress={() => navigation.navigate("ShoppingList")}
//         >
//             <ListBulletIcon size={20} color="#000000" />
//             <Text>Add to list</Text>
//             </Pressable>
//           </View>
//         </Tabs.ScrollView>

//       </Tabs.Tab>
//       <Tabs.Tab name="Comments" key="comments">
//         <Tabs.ScrollView className="bg-beach-200">
//           <SCComments recipe={recipe} />
//         </Tabs.ScrollView>
//       </Tabs.Tab>
//       {/* <Pressable
//           className="mt-6 mx-7 px-3 bg-cerise-400 dark:bg-cerise-600 active:bg-cerise-600 hover:bg-cerise-600 rounded"
//           // onPress={() => navigation.navigate("Explore")}
//         >
//           <Text className="text-center text-white font-bold py-2 rounded-full text-lg">
//             {ShoppingList}
//           </Text>
//         </Pressable> */}
        
//     </Tabs.Container>
//             <View className="bg-white">
//             <ButtonsFooter />
//           </View>
//           </>
//   );
// };

// export default CocktailListIngredients;
