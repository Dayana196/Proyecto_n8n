package com.weatherassistant.weather_outfit_assistant.infrastructure.controller;

import org.springframework.web.bind.annotation.*;

import com.weatherassistant.weather_outfit_assistant.application.dto.WeatherRequestDTO;
import com.weatherassistant.weather_outfit_assistant.application.dto.WeatherResponseDTO;
import com.weatherassistant.weather_outfit_assistant.application.usecase.GetWeatherUseCase;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/weather")
public class WeatherController {

    private final GetWeatherUseCase weatherService;

    public WeatherController(GetWeatherUseCase weatherService) {
        this.weatherService = weatherService;
    }

    @PostMapping("/get")
    public WeatherResponseDTO getWeather(@RequestBody WeatherRequestDTO request) {
        return weatherService.getWeather(request.getCity());
    }
}