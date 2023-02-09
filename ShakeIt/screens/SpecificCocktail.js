import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Tabs } from 'react-native-collapsible-tab-view'

import { getRecipeById } from "../services/RecipesService";
import SCIngredients from "../components/SpecificCocktail/SCIngredients";
import SCRecipe from "../components/SpecificCocktail/SCRecipe";
import SCComments from "../components/SpecificCocktail/SCComments";
import CocktailDescription from "../components/SpecificCocktail/CocktailDescription";

const SpecificCocktail = ({ route, navigation }) => {
    const { recipeId } = route.params;
    const [recipe, setRecipe] = useState(null);
    
    useEffect(() => {
        // console.log(`Fetching recipe ${recipeId}`);
        getRecipeById(recipeId).then(recipe => {
            // console.log(recipe);
            setRecipe(recipe);
        });
    }, [recipeId]);
    
    const Header = () => {
        return <View>
            <CocktailDescription recipe={recipe} />
        </View>
    }
    
    if (!recipe) {
        return <Text>Loading...</Text>;
    }
    
    return (
        <Tabs.Container
            renderHeader={Header}
        >
            <Tabs.Tab name="Recipe" key="recipe">
                <Tabs.ScrollView>
                    <SCIngredients recipe={recipe} />
                    <SCRecipe recipe={recipe} />
                </Tabs.ScrollView>
            </Tabs.Tab>
            <Tabs.Tab name="Comments" key="comments">
                <Tabs.ScrollView>
                    <SCComments recipe={recipe} />
                </Tabs.ScrollView>
            </Tabs.Tab>
        </Tabs.Container>
    )
}

export default SpecificCocktail;