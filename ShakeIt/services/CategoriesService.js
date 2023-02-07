const baseURL = 'https://shakeit-322b6-default-rtdb.europe-west1.firebasedatabase.app/dataV1/';

export const getAllCategories = async () => {
    const resp = await fetch(baseURL + '/categories.json');
    return resp.json();
};
