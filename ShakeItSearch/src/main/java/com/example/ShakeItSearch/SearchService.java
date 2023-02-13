package com.example.ShakeItSearch;

import com.google.firebase.database.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.CountDownLatch;

@Service
public class SearchService {

    @Autowired
    private FBInitialize fbInitialize;

    private List<Recipe> allRecipes;

    @PostConstruct
    public void downloadRecipes(){
        /* From https://stackoverflow.com/a/50817294/19859074 */
        /* This allows us to convert Firebase SDK's asynchronous design to
           a synchronous design!
         */
        CountDownLatch done = new CountDownLatch(1);
        System.out.println("Downloading recipes");
        Query query = FirebaseDatabase.getInstance().getReference("/dataV1/recipes").orderByKey();
        allRecipes = new ArrayList<>();
        query.addValueEventListener(new ValueEventListener() {
            @Override
            public void onDataChange(DataSnapshot dataSnapshot) {
                for (DataSnapshot recipeSnapshot: dataSnapshot.getChildren()){
                    try {
                        System.out.printf("Recipe: %s%n", recipeSnapshot.getKey());
                        Recipe recipe = recipeSnapshot.getValue(Recipe.class);
                        recipe.setId(recipeSnapshot.getKey());
                        allRecipes.add(recipe);
                    }
                    catch(Exception e){
                        e.printStackTrace();
                    }
                }
                // This makes sure the recipe list is printed before the 'completed' message
                System.out.flush();
                done.countDown();
            }

            @Override
            public void onCancelled(DatabaseError databaseError) {
                System.out.printf("Database error loading data: %s%n", databaseError);
            }
        });

        try {
            // wait for the complete response from Firebase
            done.await();
            System.out.printf("Completed data download%n");
        } catch(InterruptedException e) {
            e.printStackTrace();
        }
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
