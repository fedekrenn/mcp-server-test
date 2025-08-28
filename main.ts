import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const server = new McpServer({
  name: "krenn-mcp",
  version: "1.0.0",
});

server.tool(
  "fetch-weather",
  "Tool to fetch the wheather of a city",
  {
    city: z.string().describe("City name"),
  },
  async ({ city }) => {
    const response = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=10&language=es&format=json`
    );

    const data = await response.json();

    if (data.length === 0) {
      return {
        content: [
          {
            type: "text",
            text: `No hay información del clima para ${city}`,
          },
        ],
      };
    }

    const { latitude, longitude } = data.results[0];

    const response2 = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&current=temperature_2m,precipitation,is_day,rain&timezone=America%2FSao_Paulo`
    );

    const weather = await response2.json();

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(weather, null, 2),
        },
      ],
    };
  }
);

const transport = new StdioServerTransport();
await server.connect(transport);
