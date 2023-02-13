package com.example.ShakeItSearch;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class ShakeItSearchApplicationTests {
	@Autowired
	private SearchService searchService;


	@Test
	void contextLoads() {
	}
	@Test
	void canFindBrandyAlexanderByName(){
		List<Recipe> results = searchService.searchRecipes("alexander", true, false, false);
		assertEquals("Brandy Alexander", results.get(0).getName());
	}
}
