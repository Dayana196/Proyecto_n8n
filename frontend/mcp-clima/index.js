const express = require('express');
const cors    = require('cors');
const axios   = require('axios');

const app  = express();
const PORT = 8080;

const N8N_WEBHOOK = 'https://unretaliated-arrant-sheldon.ngrok-free.dev/webhook/fe368372-f3cf-4961-8fe0-223182f64710';

app.use(cors());
app.use(express.json());

app.post('/weather/get', async (req, res) => {
  const { city } = req.body;

  if (!city) {
    return res.status(400).json({ error: 'Ciudad requerida' });
  }

  try {
    const response = await axios.post(N8N_WEBHOOK, { city });
    res.json(response.data);
  } catch (error) {
    console.error('Error al llamar n8n:', error.message);
    res.status(500).json({ error: 'Error al consultar el clima' });
  }
});

app.post('/outfit/recommend', async (req, res) => {
  const { temperature, weatherCondition } = req.body;

  if (!temperature || !weatherCondition) {
    return res.status(400).json({ error: 'Temperatura y condición requeridas' });
  }

  try {
    const response = await axios.post(N8N_WEBHOOK, {
      city: 'custom',
      temperature,
      weatherCondition
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error al llamar n8n:', error.message);
    res.status(500).json({ error: 'Error al generar recomendación' });
  }
});

app.listen(PORT, () => {
  console.log(`MCP Server corriendo en http://localhost:${PORT}`);
  console.log('Tools disponibles:');
  console.log('  POST /weather/get       → get_weather');
  console.log('  POST /outfit/recommend  → recommend_outfit');
});