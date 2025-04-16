export async function jsonHandler(req, res) {
  const buffers = [];

  for await (const chunk of req) {
    buffers.push(chunk);
  }

  try {
    req.body = JSON.parse(Buffer.concat(buffers).toString());
  } catch (error) {
    req.body = null;
  }

  //Define o header de resposta como json
  res.setHeader("Content-type", "application/json");
}
