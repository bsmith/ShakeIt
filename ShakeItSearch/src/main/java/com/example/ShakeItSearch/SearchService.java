package com.example.ShakeItSearch;

import com.google.firebase.database.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;

@Service
public class SearchService {

    @Autowired
    private FBInitialize fbInitialize;

    private List<Recipe> allRecipes;

    @PostConstruct
    public void downloadRecipes(){
        System.out.println("downloading recipes");
        DatabaseReference database = FirebaseDatabase.getInstance().getReference("/dataV1/recipes");
        database.addListenerForSingleValueEvent(new ValueEventListener() {
            @Override
            public void onDataChange(DataSnapshot dataSnapshot) {
                for (DataSnapshot recipeSnapshot: dataSnapshot.getChildren()){
                    System.out.println(recipeSnapshot.getValue());
                }

            }

            @Override
            public void onCancelled(DatabaseError databaseError) {

            }
        });

    }
    public List<Recipe> searchRecipes(String searchTerm){
        System.out.printf("searchRecipes: %s%n", searchTerm);
        ArrayList<Recipe> recipes = new ArrayList<>();
        recipes.add(new Recipe("1", "2", "3", "4", "5"));
        return recipes;
    }

}
