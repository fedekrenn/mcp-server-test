# MCP Server Test

Un servidor MCP (Model Context Protocol) simple para testear el protocolo que genera la herramienta para obtener información meteorológica de ciudades usando la API de Open-Meteo.

## 🌟 Características

- Busca información meteorológica actual de cualquier ciudad
- Utiliza la API gratuita de Open-Meteo
- Se usa el protocolo MCP para integración con herramientas de IA

## 📋 Requisitos previos

- [Node.js](https://nodejs.org/) (versión 18 o superior)

## 🚀 Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/fedekrenn/mcp-server-test.git
cd mcp-server-test
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Ejecutar el servidor

```bash
npm start
```

## 🔧 Instalación en VS Code

Para usar este servidor MCP en VS Code con GitHub Copilot seguir estos pasos:

### 1. Configuración en VS Code

1. Abrir VS Code
2. Abrir el archivo `mcp.json`

### 2. Configurar el servidor MCP

Agregar la siguiente configuración a tu archivo de configuración de MCP:

```json
{
  "servers": {
    "weather": {
      "command": "npx",
      "args": ["-y", "tsx", "/Users/CTI24563/Desktop/mpc-server/main.ts"],
      "type": "stdio"
    }
  }
}
```

### 3. Reiniciar VS Code

Después de configurar, reiniciar VS Code para que los cambios tomen efecto.

## 🛠️ Uso

Una vez configurado, se puede usar la herramienta `fetch-weather` en las conversaciones con GitHub Copilot:

```
Ejemplo: "¿Cuál es el clima actual en Buenos Aires?"
```

El servidor buscará la ciudad y devolverá información meteorológica detallada incluyendo:

- Temperatura actual
- Precipitación
- Estado del día/noche
- Pronóstico por horas

## 🔧 Dependencias

- **@modelcontextprotocol/sdk**: SDK oficial para implementar servidores MCP
- **zod**: Biblioteca para validación y parseo de esquemas

<br>

## 🙋‍♂️ Hola, Soy Federico Krenn
🤓 Desarrollador web Frontend
<br>
👨‍🎓 Técnico Superior en Desarrollo Web y aplicaciones. También me encuentro realizando la Tecnicatura en Software Libre en la UNL
<br>
📫 Conectemos en LinkedIn: https://www.linkedin.com/in/fkrenn/
