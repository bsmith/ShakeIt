// const baseURL = 'https://shakeit-322b6-default-rtdb.europe-west1.firebasedatabase.app/dataV1/';

// export const getRecipeById = async (recipeId) => {
//     const resp = await fetch(baseURL + '/recipes/' + recipeId + '.json');
//     return resp.json();
// };

import AsyncStorage from '@react-native-async-storage/async-storage';


// export const storeData = async (value) => {
//     try {
//       const jsonValue = JSON.stringify(value)
//       await AsyncStorage.setItem('@storage_Key', jsonValue)
      
//     } catch (e) {
//       // saving error
//     }
//   }
export const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('@storage_Key',  JSON.stringify(value))
    } catch (e) {
      // saving error
      
    }
    console.log('Done.')
  }

export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@storage_Key')
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
    // error reading value
  }

  console.log('Done.Returned')
}


// await AsyncStorage.setItem('@MyApp_user', JSON.stringify(USER_1))

