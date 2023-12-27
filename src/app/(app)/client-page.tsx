"use client";

import {useState} from "react";
import Image from "next/image";
import type {ColorsArray} from "@/types";
import {toast} from "sonner";
import {url} from "inspector";
import ColorSwatch from "../../components/color-swatch";

type FormProps = {
  getColors: (url: string) => Promise<ColorsArray>;
};

export default function Form({getColors}: FormProps) {
  const [colors, setColors] = useState<ColorsArray | null>(null);
  const [imageURL, setImageURL] = useState<string>(
    "https://placebear.com/600/400"
  );
  const handleSubmit = async (formData: FormData) => {
    const url = formData.get("url") as string;

    if (!url) {
      toast.error("Please enter an image URL");
      return;
    }

    await getColors(url).then((colors) => setColors(colors));
  };

  return (
    <div className="flex flex-col w-full h-full gap-8">
      <div className="w-full">
        <form
          action={handleSubmit}
          className="container flex flex-col items-center justify-center gap-4 mx-auto"
        >
          <Image
            src={imageURL || "/placeholder.png"}
            alt={imageURL || "Please enter an image URL"}
            width={600}
            height={400}
            className="object-contain border-2 border-black rounded-sm dark:border-white w-full  max-w-[90%] md:max-w-[600px]"
          />
          <div className="flex flex-col items-start justify-start w-full max-w-[90%] gap-2 md:max-w-[400px]">
            <label
              htmlFor="url"
              className="text-xl font-bold font-rubik text-neutral-900 dark:text-neutral-100"
            >
              URL
            </label>
            <div className="flex flex-col w-full md:flex-row  gap-4 md:max-w-[350px]">
              <input
                id="url"
                name="url"
                placeholder="Your image URL"
                type="text"
                value={imageURL}
                onChange={(e) => setImageURL(e.target.value)}
                className="w-full px-4 py-2 transition-all duration-150 ease-in-out outline outline-2 focus:outline-purple-900 font-rubik dark:focus:outline-purple-400 dark:bg-neutral-800"
              />

              <button
                type="submit"
                disabled={!imageURL}
                className="px-4 py-2 transition-all duration-150 ease-in-out border-2 border-black dark:border-white text-md g-neutral-50 font-rubik hover:bg-neutral-50 hover:border-purple-900 dark:hover:border-purple-400 dark:hover:bg-neutral-800"
              >
                Extract
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="flex flex-col items-start max-w-[50%] self-center md:max-w-full md:items-center justify-center gap-6 md:flex-row">
        {colors &&
          colors.map((item) => {
            return <ColorSwatch color={item.color!} name={item.name} />;
          })}
      </div>
    </div>
  );
}
