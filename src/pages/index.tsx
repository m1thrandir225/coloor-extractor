import Image from "next/image";
import { Inter } from "next/font/google";
import Vibrant from "node-vibrant";
import React from "react";
import Link from "next/link";
export default function Home() {
  const [url, setUrl] = React.useState<string>("/default-image.jpg");
  const [colors, setColors] = React.useState<any>(null);

  React.useEffect(() => {
    getColors();
  }, []);

  async function getColors() {
    try {
      const pallete = new Vibrant(url);
      const colors = await pallete.getPalette();
      setColors(colors);
    } catch (err) {
      console.log(err);
    }
  }
  console.log(colors);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-slate-100 gap-16">
      <h1 className="text-neutral-800 font-bold text-2xl font-sans">
        Color Extractor
      </h1>
      {url && (
        <img
          src={url}
          alt="image"
          className="w-[500px] h-auto rounded-lg shadow-sm"
        />
      )}
      <div className="flex flex-col items-start gap-2 justify-center">
        <label htmlFor="url" className="text-neutral-800 font-semibold">
          Image URL
        </label>
        <input
          placeholder="Pase image url here"
          type="text"
          onChange={(e) => setUrl(e.target.value)}
          className="text-neutral-800 shadow-md p-2 rounded-md"
        />
      </div>
      <button
        onClick={getColors}
        className=" px-4 py-2 rounded-md bg-purple-700 text-white font-semibold text-[16px]"
      >
        Extract
      </button>
      <div className="flex flex-row justify-evenly items-center gap-4">
        {colors &&
          Object.values(colors).map((color: any, index: number) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-2"
            >
              <h1 className="text-neutral-800 font-semibold">
                {Object.keys(colors)[index]}
              </h1>
              <div
                style={{
                  backgroundColor: color.hex,
                  width: "50px",
                  height: "50px",
                  borderRadius: 50 / 2,
                }}
              ></div>
              <p className="text-neutral-700">{color.hex}</p>
            </div>
          ))}
      </div>
      <Link
        href="https://github.com/m1thrandir225"
        className="text-neutral-800"
      >
        Author: Sebastijan Zindl
      </Link>
    </div>
  );
}
