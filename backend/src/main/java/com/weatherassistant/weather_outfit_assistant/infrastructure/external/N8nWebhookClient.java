package com.weatherassistant.weather_outfit_assistant.infrastructure.external;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.*;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import com.weatherassistant.weather_outfit_assistant.application.dto.WeatherResponseDTO;

@Component
public class N8nWebhookClient {

    private final String url = "https://unretaliated-arrant-sheldon.ngrok-free.dev/webhook-test/fe368372-f3cf-4961-8fe0-223182f64710";
    private final RestTemplate restTemplate = new RestTemplate();

    public WeatherResponseDTO sendCity(String city) {

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        Map<String, String> body = new HashMap<>();
        body.put("city", city);

        HttpEntity<Map<String, String>> request = new HttpEntity<>(body, headers);

        try {
            ResponseEntity<WeatherResponseDTO> response =
                    restTemplate.postForEntity(url, request, WeatherResponseDTO.class);

            WeatherResponseDTO result = response.getBody();

            if (result != null) {
                return result;
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        // Valor por defecto si hay error
        return new WeatherResponseDTO(city, 0.0, "unknown", "No recommendation");
    }
}