package com.example.ShakeItSearch;

import java.util.List;

public class Recipe {
    private String id;
    private String imgUrl;
    private String name;
    private String shortDescription;
    private List<String> tags;
    private String description;
    private String garnishes;
    private String instructions;
    private List<Ingredient> ingredients;


    public Recipe() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getShortDescription() {
        return shortDescription;
    }

    public void setShortDescription(String shortDescription) {
        this.shortDescription = shortDescription;
    }

    public List<String> getTags() {
        return tags;
    }

    public void setTags(List<String> tags) {
        this.tags = tags;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getGarnishes() {
        return garnishes;
    }

    public void setGarnishes(String garnishes) {
        this.garnishes = garnishes;
    }

    public List<Ingredient> getIngredients() {
        return ingredients;
    }

    public void setIngredients(List<Ingredient> ingredients) {
        this.ingredients = ingredients;
    }

    public String getInstructions() {
        return instructions;
    }

    public void setInstructions(String instructions) {
        this.instructions = instructions;
    }

    public boolean searchTags(String searchTerm) {
        if (this.tags == null)
            return false;

        return this.tags.stream().anyMatch((String tag) -> tag.toLowerCase().startsWith(searchTerm));
    }

    public boolean searchIngredients(String searchTerm) {
        return this.ingredients.stream()
                .anyMatch((Ingredient ingredient) -> ingredient.getName().toLowerCase().contains(searchTerm));

    }
}
