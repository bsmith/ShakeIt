package com.example.ShakeItSearch;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
public class SearchController {


    @GetMapping("/search")
    public SearchResult search(@RequestParam String searchTerm){
        System.out.printf("search: %s%n", searchTerm);
        ArrayList<Recipe> recipes = new ArrayList<>();
        recipes.add(new Recipe("1", "2", "3", "4", "5"));
        return new SearchResult( recipes);
    }

}
