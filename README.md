# kojiseigo-mcp-hono

"Kojiseigo" (故事成語) are idiomatic phrases or expressions in Japanese that
originate from historical events, classical literature, or ancient anecdotes,
mainly from Chinese history and texts.

# Usage

The remote MCP server is available at https://kojiseigo-mcp.deno.dev/mcp .

```json
// .vscode/mcp.json
{
  "servers": {
    "kojiseigo-mcp": {
      "type": "http",
      "url": "https://kojiseigo-mcp.deno.dev/mcp"
    }
  }
}
```

# local development

```
$ deno task start
```

# Example

```
please code review for this project with kojiseigo.
```

```
## Code Review with Kojiseigo 故事成語

### **水魚の交わり** (Inseparable Bond Like Water and Fish)
This project demonstrates **水魚の交わり** between Hono and MCP - they work together seamlessly, creating an inseparable bond that brings ancient wisdom to modern AI. The architecture flows naturally like water supporting fish.

### **切磋琢磨** (Polishing and Refining)
The code shows excellent **切磋琢磨** - continuous refinement in both technical implementation and cultural preservation. The TypeScript types and Zod schemas represent careful polishing of the craft.

### **伯楽** (Recognizing Hidden Talent)
This project acts as **伯楽** - recognizing the hidden value in kojiseigo and bringing it to the AI age. The developer has the keen eye to see potential where others might not.

### **比翼連理** (Perfect Union)
The integration between traditional kojiseigo and modern MCP protocol represents **比翼連理** - a perfect, harmonious union that creates something greater than the sum of its parts.

### Current Code Strengths:

// Clean separation of concerns - avoiding 矛盾
export function createMcpServer() {
  const mcpServer = new McpServer({
    name: "kojiseigo-mcp-server",
    version: "1.0.0",
    title: "故事成語(kojiseigo) MCP Server",
  });

### Areas for Improvement:

**蛇足** (Avoiding Unnecessary Additions): The current simplicity is perfect -
avoid adding **蛇足** features that would complicate this elegant design.

**鶏肋** (Neither Essential nor Disposable): Some error handling could prevent
the project from becoming **鶏肋** - add basic error management without
over-engineering.

**綸言汗の如し** (Words Once Spoken Cannot Be Recalled): Consider adding logging
for accountability - once the server responds with kojiseigo, it should be
trackable like **綸言汗の如し**.

### Recommendations:

1. **鶏鳴狗盗** (Small Skills, Big Impact): Add simple error handling that may
   seem minor but could prove crucial:

// In main.ts - small addition with big impact
app.all("/mcp", async (c) => {
  try {
    const mcpServer = createMcpServer();
    const transport = new StreamableHTTPTransport();
    await mcpServer.connect(transport);
    return transport.handleRequest(c);
  } catch (error) {
    return c.json({ error: "MCP server error" }, 500);
  }
});

### Final Assessment:

This project embodies **温故知新** (Learning from the Past, Understanding the
New) - masterfully bridging ancient wisdom with cutting-edge technology. It's a
beautiful example of how traditional knowledge can find new life in the AI era
through thoughtful engineering.
```
