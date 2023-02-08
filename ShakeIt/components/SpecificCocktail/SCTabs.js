import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import SCIngredients from "./SCIngredients";
import SCRecipe from "./SCRecipe";
import SCComments from "./SCComments"

const Tab = createMaterialTopTabNavigator();

function SCTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Ingredients" component={SCIngredients} />
            <Tab.Screen name="Recipe" component={SCRecipe} />
            <Tab.Screen name="Comments" component={SCComments} />
        </Tab.Navigator>
    )
}

export default SCTabs;