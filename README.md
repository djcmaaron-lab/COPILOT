[README.md](https://github.com/user-attachments/files/25691577/README.md)
# Copiloto de Cold Calling (Bots de WhatsApp)

Copiloto interactivo para llamadas en frío de venta consultiva.

## Qué incluye

- **Moods / estados arriba** (neutral, amable, dominante, juguetón, urgencia, rescate)
- **Argumentos en el centro** por etapa (anzuelo, datos, relato, redirección, etc.)
- **Coach en vivo** con indicaciones tipo: _"di esto sonriendo"_, _"hora de coquetear"_
- **Botón inferior** para pasar a la siguiente etapa
- **Flujo completo**: Apertura → Autoridad → Oportunidad → Diagnóstico → Revelación → Solución → Cierre
- **Copiar guiones** al portapapeles

## Correr local

```bash
npm install
npm start
```

Abre: `http://localhost:3000`

## Subir a GitHub

```bash
git init
git add .
git commit -m "feat: copiloto de cold calling"
git branch -M main
git remote add origin TU_REPO_GITHUB
git push -u origin main
```

## Conectar con Railway

1. Crea proyecto en Railway
2. Elige **Deploy from GitHub repo**
3. Selecciona este repo
4. Railway detecta Node automáticamente
5. Start command: `npm start` (si no lo detecta)
6. Variables: no necesita (usa `PORT` automático de Railway)

## Notas

- Este proyecto es **frontend + servidor Node mínimo** (sin dependencias), ideal para deploy rápido.
- Puedes editar todo el contenido conversacional en `public/app.js`.
