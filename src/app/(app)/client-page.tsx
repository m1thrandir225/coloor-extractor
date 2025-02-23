"use client";

import {useState} from "react";
import Image from "next/image";
import type {ColorsArray} from "@/types";
import {toast} from "sonner";
import {url} from "inspector";
import ColorSwatch from "../../components/color-swatch";
import {Loader2} from "lucide-react";

type FormProps = {
  getColors: (url: string) => Promise<ColorsArray>;
};

export default function Form({getColors}: FormProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [colors, setColors] = useState<ColorsArray | null>(null);
  const [imageURL, setImageURL] = useState<string | null | undefined>(
    "https://placebear.com/600/400"
  );
  const handleSubmit = async (formData: FormData) => {
    try {
      setIsLoading(true);
      const url = formData.get("url") as string;

      if (!url) {
        throw new Error("Please enter a valid URL");
      }

      await getColors(url).then((colors) => setColors(colors));
    } catch (error) {
      toast.error("An error occurred." + error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-full h-full gap-8">
      <div className="w-full">
        <form
          action={handleSubmit}
          className="container flex flex-col items-center justify-center gap-4 mx-auto"
        >
          {imageURL && (
            <div className="w-full max-w-[600px] relative h-[250px] md:h-[400px] xl:h-[650px]">
              <Image
                src={imageURL || "/placeholder.png"}
                alt={imageURL || "Please enter an image URL"}
                fill
                className="object-contain w-full border-black rounded-sm md:border-2 dark:border-white "
              />
            </div>
          )}

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
                value={imageURL || ""}
                onChange={(e) => setImageURL(e.target.value)}
                className="w-full px-4 py-2 transition-all duration-150 ease-in-out outline outline-2 focus:outline-purple-900 font-rubik dark:focus:outline-purple-400 dark:bg-neutral-800"
              />

              <button
                type="submit"
                disabled={!imageURL || isLoading}
                className="px-4 py-2 transition-all duration-150 ease-in-out border-2 border-black dark:border-white text-md g-neutral-50 font-rubik hover:bg-neutral-50 hover:border-purple-900 dark:hover:border-purple-400 dark:hover:bg-neutral-800"
              >
                {isLoading ? <Loader2 className="animate-spin" /> : "Extract"}
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="flex flex-col items-start max-w-[50%] self-center md:max-w-full md:items-center justify-center gap-6 md:flex-row">
        {colors &&
          colors.map((item, index) => {
            return (
              <ColorSwatch key={index} color={item.color!} name={item.name} />
            );
          })}
      </div>
    </div>
  );
}
