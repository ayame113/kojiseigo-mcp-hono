import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

import kojiseigoList from "./kojiseigo.json" with { type: "json" };

export function createMcpServer() {
  const mcpServer = new McpServer({
    name: "kojiseigo-mcp-server",
    version: "1.0.0",
    title: "故事成語(kojiseigo) MCP Server",
  });

  mcpServer.registerTool("get-random-kojiseigo", {
    title: "Get 10 random 故事成語(kojiseigo)",
    description:
      "故事成語(kojiseigo) are Chinese proverbs. This tool will randomly get 10 故事成語(kojiseigo). If you don't like the results, you can run it again and again.",
    annotations: {
      readOnlyHint: true, // 外部の状態を変更しない
      openWorldHint: false, // 外部システムと接続しない
    },
    inputSchema: {},
    outputSchema: {
      result: z.array(
        z.object({
          word: z.string().describe("故事成語(kojiseigo)"),
          meaning: z.string().describe("meaning of the 故事成語(kojiseigo)"),
        }),
      ).describe("A list of 10 random 故事成語(kojiseigo)"),
    },
  }, () => {
    const structuredContent = {
      result: kojiseigoList
        .toSorted(() => Math.random() - 0.5) // sort by random order
        .slice(0, 10), // get the first 10 items
    };

    return {
      content: [{
        type: "text",
        text: JSON.stringify(structuredContent),
      }],
      structuredContent,
    };
  });

  return mcpServer;
}
