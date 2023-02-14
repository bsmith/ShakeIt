package com.example.ShakeItSearch;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.*;

class RecipeTest {
    Recipe recipe;

    @BeforeEach
    void setUp() {
        recipe = new Recipe();
        recipe.setName("Gin and tonic");
        recipe.setTags(Arrays.asList(
                "sour",
                "low-alcohol"
        ));
        recipe.setIngredients(Arrays.asList(
                new Ingredient("Gin", 45., "ml"),
                new Ingredient("Tonic", 100., "ml")
                ));
    }

    @Test
    void canSearchTags() {
        assertTrue(recipe.searchTags("sour"));
    }

    @Test
    void canFailToFindTags() {
        assertFalse(recipe.searchTags("strong"));
    }

    @Test
    void canSearchIngredientsCaseInsensitively() {
        assertTrue(recipe.searchIngredients("tonic"));
    }

    @Test
    void canFailToFindIngredient() {
        assertFalse(recipe.searchIngredients("water"));
    }
}