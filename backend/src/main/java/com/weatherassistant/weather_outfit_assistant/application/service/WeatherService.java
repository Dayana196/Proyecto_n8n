package com.weatherassistant.weather_outfit_assistant.application.service;

import java.time.LocalDateTime;

import org.springframework.stereotype.Service;

import com.weatherassistant.weather_outfit_assistant.application.dto.WeatherResponseDTO;
import com.weatherassistant.weather_outfit_assistant.application.usecase.GetWeatherUseCase;
import com.weatherassistant.weather_outfit_assistant.domain.repository.WeatherRepository;
import com.weatherassistant.weather_outfit_assistant.infrastructure.external.N8nWebhookClient;
import com.weatherassistant.weather_outfit_assistant.infrastructure.persistence.entity.WeatherQueryEntity;

@Service
public class WeatherService implements GetWeatherUseCase {

    private final WeatherRepository weatherRepository;
    private final N8nWebhookClient n8nWebhookClient;

    public WeatherService(
            WeatherRepository weatherRepository,
            N8nWebhookClient n8nWebhookClient) {

        this.weatherRepository = weatherRepository;
        this.n8nWebhookClient = n8nWebhookClient;
    }

    @Override
    public WeatherResponseDTO getWeather(String city) {

        WeatherResponseDTO response = n8nWebhookClient.sendCity(city);

        WeatherQueryEntity entity = new WeatherQueryEntity();
        entity.setCity(response.getCity());
        entity.setTemperature(response.getTemperature());
        entity.setWeatherCondition(response.getWeatherCondition());
        entity.setRecommendedClothes(response.getRecommendedClothes());
        entity.setCreatedAt(LocalDateTime.now());

        weatherRepository.save(entity);

        return response;
    }
}