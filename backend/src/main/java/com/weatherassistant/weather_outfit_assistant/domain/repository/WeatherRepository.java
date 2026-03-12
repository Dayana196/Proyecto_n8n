package com.weatherassistant.weather_outfit_assistant.domain.repository;

import com.weatherassistant.weather_outfit_assistant.infrastructure.persistence.entity.WeatherQueryEntity;

public interface WeatherRepository {

    WeatherQueryEntity save(WeatherQueryEntity weather);
}
