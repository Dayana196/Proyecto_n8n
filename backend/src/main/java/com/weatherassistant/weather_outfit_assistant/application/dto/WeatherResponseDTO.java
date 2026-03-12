package com.weatherassistant.weather_outfit_assistant.application.dto;

public class WeatherResponseDTO {
     private String city;
    private Double temperature;
    private String weatherCondition;
    private String recommendedClothes;

    public WeatherResponseDTO(String city, Double temperature, String weatherCondition, String recommendedClothes) {
        this.city = city;
        this.temperature = temperature;
        this.weatherCondition = weatherCondition;
        this.recommendedClothes = recommendedClothes;
    }

    public String getCity() {
        return city;
    }

    public Double getTemperature() {
        return temperature;
    }

    public String getWeatherCondition() {
        return weatherCondition;
    }

    public String getRecommendedClothes() {
        return recommendedClothes;
    }

    
}
