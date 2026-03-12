package com.weatherassistant.weather_outfit_assistant.infrastructure.persistence.adapter;

import org.springframework.stereotype.Component;

import com.weatherassistant.weather_outfit_assistant.domain.repository.WeatherRepository;
import com.weatherassistant.weather_outfit_assistant.infrastructure.persistence.entity.WeatherQueryEntity;
import com.weatherassistant.weather_outfit_assistant.infrastructure.persistence.repository.WeatherQueryJpaRepository;

@Component
public class WeatherRepositoryAdapter implements WeatherRepository {

    private final WeatherQueryJpaRepository repository;

    public WeatherRepositoryAdapter(WeatherQueryJpaRepository repository) {
        this.repository = repository;
    }

    @Override
    public WeatherQueryEntity save(WeatherQueryEntity entity) {
        return repository.save(entity);
    }
}