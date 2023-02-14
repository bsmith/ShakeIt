package com.example.ShakeItSearch;


public class Ingredient {
    private String name;
    private int number;
    private Double quantity;
    private String quantityUnit;

    public Ingredient() {
    }

    public Ingredient(String name, Double quantity, String quantityUnit) {
        this.name = name;
        this.quantity = quantity;
        this.quantityUnit = quantityUnit;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public Double getQuantity() {
        return quantity;
    }

    public void setQuantity(Double quantity) {
        this.quantity = quantity;
    }

    public String getQuantityUnit() {
        return quantityUnit;
    }

    public void setQuantityUnit(String quantityUnit) {
        this.quantityUnit = quantityUnit;
    }
}
