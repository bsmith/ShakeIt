package com.example.ShakeItSearch;

import com.google.firebase.database.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

@Service
public class SearchService {

    @Autowired
    private FBInitialize fbInitialize;

    private List<Recipe> allRecipes;

    @PostConstruct
    public void downloadRecipes(){
        System.out.println("downloading recipes");
        Query query = FirebaseDatabase.getInstance().getReference("/dataV1/recipes").orderByKey();
        allRecipes = new ArrayList<>();
        query.addValueEventListener(new ValueEventListener() {
            @Override
            public void onDataChange(DataSnapshot dataSnapshot) {
                for (DataSnapshot recipeSnapshot: dataSnapshot.getChildren()){
                    try {
                        System.out.println(recipeSnapshot.getKey());
                        Recipe recipe = recipeSnapshot.getValue(Recipe.class);
                        recipe.setId(recipeSnapshot.getKey());
                        allRecipes.add(recipe);
                    }
                    catch(Exception e){
                        e.printStackTrace();
                    }
                }

            }

            @Override
            public void onCancelled(DatabaseError databaseError) {

            }
        });

    }
    public List<Recipe> searchRecipes(String searchTerm, boolean byName,boolean byTag,boolean byIngredient) {
        System.out.printf("searchRecipes: %s %s %s %s%n", searchTerm, byName, byTag, byIngredient);
        searchTerm = searchTerm.toLowerCase();
        ArrayList<Recipe> foundRecipes = new ArrayList<>();
        for (Recipe recipe: allRecipes){
            boolean shouldAdd = false;
            if (byName && recipe.getName().toLowerCase().contains(searchTerm)){
                shouldAdd = true;
            }
            if (byTag && recipe.searchTags(searchTerm)){
                shouldAdd = true;
            }
            if (byIngredient && recipe.searchIngredients(searchTerm)){
                shouldAdd = true;
            }
            if (shouldAdd){
                foundRecipes.add(recipe);
            }

        }
        return foundRecipes;

    }
}
