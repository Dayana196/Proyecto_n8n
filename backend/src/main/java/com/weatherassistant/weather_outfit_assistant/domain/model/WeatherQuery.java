package com.weatherassistant.weather_outfit_assistant.domain.model;

import java.time.LocalDateTime;

public class WeatherQuery {
    private Long id;
    private String city;
    private double temperature;
    private String weatherCondition;
    private String recommendedClothes;
    private LocalDateTime createdAt;
    
    public WeatherQuery() {
    }

    public WeatherQuery(Long id, String city, double temperature, String weatherCondition, String recommendedClothes,
            LocalDateTime createdAt) {
        this.id = id;
        this.city = city;
        this.temperature = temperature;
        this.weatherCondition = weatherCondition;
        this.recommendedClothes = recommendedClothes;
        this.createdAt = createdAt;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public double getTemperature() {
        return temperature;
    }

    public void setTemperature(double temperature) {
        this.temperature = temperature;
    }

    public String getWeatherCondition() {
        return weatherCondition;
    }

    public void setWeatherCondition(String weatherCondition) {
        this.weatherCondition = weatherCondition;
    }

    public String getRecommendedClothes() {
        return recommendedClothes;
    }

    public void setRecommendedClothes(String recommendedClothes) {
        this.recommendedClothes = recommendedClothes;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    
}
