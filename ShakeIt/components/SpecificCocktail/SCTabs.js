import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import SCIngredients from "./SCIngredients";
import SCRecipe from "./SCRecipe";
import SCComments from "./SCComments"

const Tab = createMaterialTopTabNavigator();

function SCTabs({recipe}) {
    return (
        <Tab.Navigator
            // style={{height: 600, backgroundColor: "powderblue"}}
            sceneContainerStyle={{flexGrow: 1}}
        >
            <Tab.Screen name="Ingredients"
                children={props => <SCIngredients recipe={recipe} {...props} />} />
            <Tab.Screen name="Recipe" 
                children={props => <SCRecipe recipe={recipe} {...props} />} />
            <Tab.Screen name="Comments" 
                children={props => <SCComments recipe={recipe} {...props} />} />
        </Tab.Navigator>
    )
}

export default SCTabs;