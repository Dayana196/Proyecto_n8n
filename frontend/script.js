const HERO_ICONS = ['☀️', '⛅', '🌧️', '❄️', '🌤️', '🌦️'];
const HERO_TEMPS = ['31°', '18°', '12°', '4°', '28°', '22°'];
let heroIdx = 0;

setInterval(() => {
  heroIdx = (heroIdx + 1) % HERO_ICONS.length;
  document.getElementById('heroIllIcon').textContent = HERO_ICONS[heroIdx];
  document.getElementById('heroIllTemp').textContent = HERO_TEMPS[heroIdx];
}, 2500);


function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
  window.scrollTo(0, 0);
}

function goHome() {
  showPage('homePage');
}


const WEATHER_THEMES = {
  sunny:   { cssClass: 'wt-sunny',   badge: '☀️ Soleado'        },
  hot:     { cssClass: 'wt-hot',     badge: '🔥 Muy caluroso'   },
  cloudy:  { cssClass: 'wt-cloudy',  badge: '⛅ Nublado'        },
  rain:    { cssClass: 'wt-rain',    badge: '🌧️ Lluvioso'       },
  drizzle: { cssClass: 'wt-drizzle', badge: '🌦️ Llovizna'       },
  storm:   { cssClass: 'wt-storm',   badge: '⛈️ Tormenta'       },
  snow:    { cssClass: 'wt-snow',    badge: '❄️ Nevando'         },
  wind:    { cssClass: 'wt-wind',    badge: '💨 Ventoso'         },
};

const CONDS = {
  sunny:   { label: 'Soleado',      icon: '☀️',  alert: null },
  cloudy:  { label: 'Nublado',      icon: '⛅',  alert: null },
  drizzle: { label: 'Llovizna',     icon: '🌦️', alert: null },
  wind:    { label: 'Ventoso',      icon: '💨',  alert: null },
  rain: {
    label: 'Lluvioso', icon: '🌧️',
    alert: {
      title: '⚠️ Lluvia esperada',
      body:  'Se esperan lluvias durante el día. Lleva paraguas o impermeable antes de salir.',
    },
  },
  storm: {
    label: 'Tormenta', icon: '⛈️',
    alert: {
      title: '⚠️ Alerta de tormenta',
      body:  'Condiciones de tormenta activas. Evita salir en horarios pico y lleva impermeable.',
    },
  },
  snow: {
    label: 'Nevando', icon: '🌨️',
    alert: {
      title: '❄️ Alerta de nieve',
      body:  'Se registran nevadas. Usa ropa de abrigo máximo y botas impermeables.',
    },
  },
  hot: {
    label: 'Muy caluroso', icon: '🔆',
    alert: {
      title: '🌡 Alerta de calor',
      body:  'Temperatura muy alta. Mantente hidratado y usa protector solar SPF 50+.',
    },
  },
};

const rand    = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;
const randArr = arr    => arr[Math.floor(Math.random() * arr.length)];
const cap     = str   => str.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');

function getTheme(temp) {
  if (temp >= 33) return 'hot';
  if (temp >= 24) return randArr(['sunny', 'hot']);
  if (temp >= 15) return randArr(['sunny', 'cloudy', 'drizzle', 'wind']);
  if (temp >= 8)  return randArr(['cloudy', 'rain', 'drizzle']);
  return randArr(['rain', 'snow', 'storm', 'cloudy']);
}

function getOutfit(temp, ck) {
  let emoji = '', desc = '', items = [];

  if (temp < 0) {
    emoji = '🧥';
    desc  = 'Temperatura extrema bajo cero. Capas térmicas son esenciales. Protege cada parte del cuerpo.';
    items = [
      { i: '🧥', t: 'Abrigo de invierno'   },
      { i: '🧣', t: 'Bufanda gruesa'        },
      { i: '🧤', t: 'Guantes térmicos'      },
      { i: '🥾', t: 'Botas impermeables'    },
      { i: '🧢', t: 'Gorro de lana'         },
      { i: '🩱', t: 'Ropa térmica interior' },
    ];
  } else if (temp < 8) {
    emoji = '🧥';
    desc  = 'Hace bastante frío. Un buen abrigo y accesorios son indispensables para estar cómodo.';
    items = [
      { i: '🧥', t: 'Abrigo grueso'     },
      { i: '🧣', t: 'Bufanda'           },
      { i: '👖', t: 'Pantalón de lana'  },
      { i: '👟', t: 'Zapatos cerrados'  },
      { i: '🧤', t: 'Guantes'           },
    ];
  } else if (temp < 15) {
    emoji = '🧥';
    desc  = 'Clima frío. Chaqueta abrigadora y pantalón largo. Una capa extra nunca está de más.';
    items = [
      { i: '🧥', t: 'Chaqueta gruesa'   },
      { i: '👖', t: 'Pantalón largo'    },
      { i: '👟', t: 'Zapatos cerrados'  },
      { i: '🧣', t: 'Bufanda ligera'    },
    ];
  } else if (temp < 20) {
    emoji = '🧣';
    desc  = 'Temperatura fresca y agradable. Con un suéter estarás perfecto todo el día.';
    items = [
      { i: '🧣', t: 'Suéter o cardigan' },
      { i: '👖', t: 'Jean'              },
      { i: '👟', t: 'Tenis'             },
      { i: '🧥', t: 'Chaqueta ligera'   },
    ];
  } else if (temp < 26) {
    emoji = '👕';
    desc  = 'Temperatura ideal. Ropa cómoda y casual. Puedes llevar una chaqueta por si refresca.';
    items = [
      { i: '👕', t: 'Camiseta'       },
      { i: '👖', t: 'Jean o Pantalones'  },
      { i: '👟', t: 'Tenis'          },
      { i: '😎', t: 'Gafas de sol'   },
    ];
  } else if (temp < 32) {
    emoji = '🩴';
    desc  = 'Hace calor. Ropa ligera y transpirable. No olvides el protector solar al aire libre.';
    items = [
      { i: '👕', t: 'Camiseta ligera'  },
      { i: '🩳', t: 'Shorts'           },
      { i: '🩴', t: 'Sandalias'        },
      { i: '🕶️', t: 'Gafas de sol'    },
      { i: '🧴', t: 'Protector solar'  },
    ];
  } else {
    emoji = '🌞';
    desc  = '¡Mucho calor! Ropa mínima y fresca. Prioriza hidratación y protección solar máxima.';
    items = [
      { i: '🩱', t: 'Ropa muy ligera'   },
      { i: '🩳', t: 'Shorts o falda'    },
      { i: '🕶️', t: 'Gafas de sol'     },
      { i: '🧴', t: 'SPF 50+'           },
      { i: '🥤', t: 'Hidratación extra' },
    ];
  }

  if (['rain', 'drizzle', 'storm'].includes(ck)) {
    desc += ' ☂️ Lleva paraguas.';
    items.push({ i: '☂️', t: 'Paraguas' });
  }
  if (ck === 'wind') {
    desc += ' Usa cortavientos.';
    items.push({ i: '💨', t: 'Cortavientos' });
  }
  if (ck === 'snow') {
    items.push({ i: '🥾', t: 'Botas impermeables' });
  }

  return { emoji, desc, items };
}

function applyWeatherTheme(ck) {
  const wp = document.getElementById('weatherPage');
  Object.values(WEATHER_THEMES).forEach(t => wp.classList.remove(t.cssClass));
  wp.classList.add(WEATHER_THEMES[ck].cssClass);
}

function renderWeather(d) {
  applyWeatherTheme(d.ck);

  const dateStr = new Date().toLocaleDateString('es-CO', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
  });

  const UV_LABELS = ['', 'Bajo', 'Bajo', 'Moderado', 'Moderado', 'Moderado', 'Alto', 'Alto', 'Muy alto', 'Muy alto', 'Extremo', 'Extremo', 'Extremo'];
  const uvLabel   = UV_LABELS[Math.min(d.uv, 12)] || 'Extremo';
  const uvPct     = Math.min((d.uv / 12) * 100, 100);

  const uvRec = d.uv <= 2 ? 'Sin protección especial'
              : d.uv <= 5 ? 'Usa gafas de sol'
              : d.uv <= 7 ? 'Aplica protector solar'
              :              'Protección máxima necesaria';

  const alertHTML = d.cond.alert
    ? `<div class="alert-card anim anim-1">
         <div class="alert-icon">${d.cond.alert.title.split(' ')[0]}</div>
         <div>
           <div class="alert-title">${d.cond.alert.title}</div>
           <div class="alert-body">${d.cond.alert.body}</div>
         </div>
       </div>`
    : '';

  const oItemsHTML = d.outfit.items
    .map(it => `<div class="oi-item"><span class="oi-icon">${it.i}</span>${it.t}</div>`)
    .join('');

  const humDesc = d.humidity < 40 ? 'Ambiente seco. Hidrata tu piel.'
                : d.humidity < 70 ? 'Humedad moderada. Condiciones cómodas.'
                :                    'Ambiente húmedo. Usa telas transpirables.';

  const windDesc = d.wind < 15 ? 'Viento suave. Sin impacto significativo.'
                 : d.wind < 30 ? 'Viento moderado. Considera una chaqueta.'
                 : d.wind < 50 ? 'Viento fuerte. Usa cortavientos.'
                 :                'Viento muy fuerte. Ten precaución al salir.';

  document.getElementById('wpBody').innerHTML = `
    ${alertHTML}
    <div class="wp-hero anim anim-1">
      <div class="wph-left">
        <div class="tema-badge">${WEATHER_THEMES[d.ck].badge}</div>
        <div class="wph-city">${d.city}</div>
        <div class="wph-date">${dateStr}</div>
        <div class="wph-temp">${d.temp}<sup>°C</sup></div>
        <div class="wph-cond-pill">${d.cond.icon} ${d.cond.label}</div>
      </div>
      <div class="wph-right">
        <div class="wph-icon">${d.cond.icon}</div>
        <div class="wph-feel">Sensación: ${d.feel}°C</div>
      </div>
    </div>
    <div class="wp-stats">
      <div class="ws-card anim anim-2">
        <div class="ws-icon-wrap">💧</div>
        <div><div class="ws-val">${d.humidity}%</div><div class="ws-lbl">Humedad</div></div>
      </div>
      <div class="ws-card anim anim-2">
        <div class="ws-icon-wrap">💨</div>
        <div><div class="ws-val">${d.wind} km/h</div><div class="ws-lbl">Viento</div></div>
      </div>
      <div class="ws-card anim anim-3">
        <div class="ws-icon-wrap">🌧</div>
        <div><div class="ws-val">${d.rain}%</div><div class="ws-lbl">Prob. lluvia</div></div>
      </div>
      <div class="ws-card anim anim-3">
        <div class="ws-icon-wrap">🌡</div>
        <div><div class="ws-val">${d.feel}°C</div><div class="ws-lbl">Sensación</div></div>
      </div>
    </div>

    <!-- ✅ Solo la tarjeta de outfit — se eliminó el pronóstico horario -->
    <div class="wp-grid">
      <div class="outfit-card-wp anim anim-4" style="grid-column: 1 / -1;">
        <div class="wcard-label">👗 Recomendación de vestimenta</div>
        <div class="outfit-big">
          <div class="outfit-emoji-wp">${d.outfit.emoji}</div>
          <div class="outfit-text-wp">${d.outfit.desc}</div>
        </div>
        <div class="outfit-items-grid">${oItemsHTML}</div>
      </div>
    </div>

    <div class="wp-extras">
      <div class="extra-card anim anim-5">
        <div class="ec-icon">☀️</div>
        <div class="ec-title">Índice UV</div>
        <div class="ec-val">${d.uv}</div>
        <div class="uv-bar-wrap"><div class="uv-bar" style="width:${uvPct}%"></div></div>
        <div class="ec-desc">${uvLabel} — ${uvRec}</div>
      </div>
      <div class="extra-card anim anim-5">
        <div class="ec-icon">💧</div>
        <div class="ec-title">Humedad relativa</div>
        <div class="ec-val">${d.humidity}%</div>
        <div class="ec-desc">${humDesc}</div>
      </div>
      <div class="extra-card anim anim-5">
        <div class="ec-icon">💨</div>
        <div class="ec-title">Viento</div>
        <div class="ec-val">${d.wind} km/h</div>
        <div class="ec-desc">${windDesc}</div>
      </div>
    </div>`;
}

function goToWeather(cityOverride) {
  const input = document.getElementById('homeInput');
  const city  = cityOverride || input.value.trim();

  if (!city) {
    input.style.borderColor = 'var(--celeste)';
    input.focus();
    setTimeout(() => (input.style.borderColor = ''), 1000);
    return;
  }

  loadWeather(city);
}

function quickGo(city) {
  document.getElementById('homeInput').value = city;
  loadWeather(city);
}

function searchFromWeatherPage() {
  const input = document.getElementById('wpInput');
  const city  = input.value.trim();
  if (!city) { showToast('Escribe el nombre de una ciudad'); return; }
  loadWeather(city);
  input.value = '';
}

async function loadWeather(city) {
  document.getElementById('loader').classList.add('show');

  try {
    const response = await fetch('http://localhost:8080/weather/get', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({ city }),
    });

    if (!response.ok) throw new Error(`Error del servidor: ${response.status}`);

    const api  = await response.json();
    const data = adaptBackendData(api);

    renderWeather(data);
    showPage('weatherPage');

  } catch (error) {
    console.error('Error al consultar el clima:', error);
    showToast('No se pudo consultar el clima. Verifica que el servidor esté activo.');
  } finally {
    document.getElementById('loader').classList.remove('show');
  }
}

function adaptBackendData(api) {
  const temp = Math.round(api.temperature);
  const ck   = mapCondition(api.weatherCondition);
  const base = getOutfit(temp, ck);

  return {
    city:     api.city,
    temp,
    ck,
    cond:     CONDS[ck],
    feel:     temp + rand(-3, 2),
    humidity: rand(50, 85),
    wind:     rand(5, 30),
    rain:     ['rain', 'drizzle', 'storm'].includes(ck) ? rand(50, 90) : rand(0, 25),
    uv:       temp > 28 ? rand(7, 11) : temp > 18 ? rand(3, 6) : rand(1, 3),
    outfit: {
      emoji: base.emoji,
      desc:  api.recommendedClothes,
      items: base.items,
    },
  };
}

function mapCondition(condStr) {
  if (!condStr) return 'cloudy';
  const c = condStr.toLowerCase();

  if (c.includes('tormenta') || c.includes('thunder'))               return 'storm';
  if (c.includes('nieve')    || c.includes('snow'))                  return 'snow';
  if (c.includes('llovizna') || c.includes('drizzle'))               return 'drizzle';
  if (c.includes('lluvi')    || c.includes('rain'))                  return 'rain';
  if (c.includes('viento')   || c.includes('wind'))                  return 'wind';
  if (c.includes('despejado')|| c.includes('claro')  ||
      c.includes('soleado')  || c.includes('clear')  ||
      c.includes('sunny'))                                            return 'sunny';
  if (c.includes('calor')    || c.includes('hot'))                   return 'hot';
  if (c.includes('nuboso')   || c.includes('nublado') ||
      c.includes('cloud')    || c.includes('overcast'))              return 'cloudy';

  return 'cloudy';
}

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

function scrollToSearch() {
  document.getElementById('homeInput').focus();
  document.getElementById('heroSearchWrap').scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('homeInput').addEventListener('keydown', e => {
  if (e.key === 'Enter') goToWeather();
});

document.getElementById('wpInput').addEventListener('keydown', e => {
  if (e.key === 'Enter') searchFromWeatherPage();
});