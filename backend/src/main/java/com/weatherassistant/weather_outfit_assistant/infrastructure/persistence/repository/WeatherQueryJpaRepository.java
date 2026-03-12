package com.weatherassistant.weather_outfit_assistant.infrastructure.persistence.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.weatherassistant.weather_outfit_assistant.infrastructure.persistence.entity.WeatherQueryEntity;

@Repository
public interface WeatherQueryJpaRepository extends JpaRepository<WeatherQueryEntity, Long> {

}