package com.weatherassistant.weather_outfit_assistant.application.usecase;

import com.weatherassistant.weather_outfit_assistant.application.dto.WeatherResponseDTO;

public interface GetWeatherUseCase {

    WeatherResponseDTO getWeather(String city);

}