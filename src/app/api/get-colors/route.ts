import Vibrant from "node-vibrant";

export const dynamic = "force-dynamic"; // defaults to auto

export async function POST(request: Request) {
  const body = await request.json();

  const {url} = body;

  if (typeof url !== "string") {
    return new Response(JSON.stringify({error: "url must be a string"}), {
      headers: {"Content-Type": "application/json"},
      status: 400,
    });
  }

  try {
    const palette = await Vibrant.from(url).getPalette();

    const colors = Object.entries(palette).map(([key, value]) => {
      return {name: key, color: value?.hex};
    });
    return new Response(JSON.stringify(colors), {
      headers: {"Content-Type": "application/json"},
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({error}), {
      headers: {"Content-Type": "application/json"},
      status: 500,
    });
  }
}
