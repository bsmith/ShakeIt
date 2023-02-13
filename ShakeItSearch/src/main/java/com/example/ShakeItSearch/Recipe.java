package com.example.ShakeItSearch;

public class Recipe {
    private String id;
    private String imgUrl;
    private String name;
    private String shortDescription;
    private String tags;

    public Recipe() {
    }

    public Recipe(String id, String imgUrl, String name, String shortDescription, String tags) {
        this.id = id;
        this.imgUrl = imgUrl;
        this.name = name;
        this.shortDescription = shortDescription;
        this.tags = tags;
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

    public String getTags() {
        return tags;
    }

    public void setTags(String tags) {
        this.tags = tags;
    }
}
