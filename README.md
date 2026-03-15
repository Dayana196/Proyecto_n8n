# ⛅ WAssist — Asistente Inteligente de Vestimenta por Clima

> Ingresa el nombre de una ciudad y recibe en segundos la temperatura actual, la condición climática y una recomendación de vestimenta generada por inteligencia artificial.

---

## ✨ Características

- 🌡 Temperatura y condición climática en tiempo real
- 👗 Recomendación de vestimenta generada por IA 
- 👕 Sugerencia de prendas específicas 
- 🎨 temas visuales dinámicos según el clima (soleado, lluvioso, nieve, etc.)
- ⚠️ Alertas automáticas para condiciones extremas
- 🗄 Historial de consultas guardado en MySQL

---

## 🛠 Stack tecnológico

| Capa | Tecnología |
|------|-----------|
| Frontend | HTML + CSS + JS |
| Backend | Java + Spring Boot |
| Automatización | n8n |
| Inteligencia Artificial | Gemini (Google) |
| Base de datos | MySQL |
| MCP Server | Node.js |
| API meteorológica | OpenWeatherMap |

---

## 🏗 Flujo del sistema

```
Frontend → Spring Boot → n8n → OpenWeatherMap
                                     ↓
                               Gemini (IA)
                                     ↓
                                  MySQL
                                     ↓
                          Respuesta al Frontend
```

### Endpoint principal

```
POST http://localhost:8080/weather/get
Body: { "city": "Bogotá" }

Response:
{
  "city": "Bogotá",
  "temperature": 15.3,
  "weatherCondition": "nubes dispersas",
  "recommendedClothes": "Con 15°C y nubes, usa una chaqueta ligera..."
}
```

---

## 🚀 Cómo ejecutar

**1. Base de datos**
```sql
CREATE DATABASE weather_assistant;
USE weather_assistant;

CREATE TABLE weather_queries (
    id                  INT AUTO_INCREMENT PRIMARY KEY,
    city                VARCHAR(100) NOT NULL,
    temperature         DECIMAL(5,2) NOT NULL,
    weather_condition   VARCHAR(100) NOT NULL,
    recommended_clothes TEXT NOT NULL,
    created_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

**2. Backend**
```bash
cd backend
mvn spring-boot:run
# Disponible en http://localhost:8080
```

**3. n8n**

Importar el workflow y activarlo en modo **Production**.

**4. Frontend**

Abrir `index.html` con Live Server en VS Code.

---

## 📁 Estructura

```
weather-outfit-assistant/
├── frontend/         ← HTML, CSS, JS
├── backend/          ← Spring Boot
├── mcp-server/       ← Node.js
├── database/         ← schema.sql
└── README.md
```

---

## 👥 Equipo
- Dayana Barbosa 
- Cristian Mayorga 
- Diego Díaz 

---

*Proyecto académico — 2026*
