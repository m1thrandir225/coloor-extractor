"use client";
import {toast} from "sonner";

type ColorSwatchProps = {
  color: string;
  name: string;
};

export default function ColorSwatch({color, name}: ColorSwatchProps) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(color);

    toast.custom((t) => (
      <div className="max-w-[350px] w-full md:w-[350px] p-4 bg-white border-2 border-black dark:bg-neutral-900 dark:border-white">
        <h1 className="font-sans text-sm font-bold">
          Copied{" "}
          <span className="text-stone-600 dark:text-stone-400">{`${name}(${color})`}</span>{" "}
          to clipboard{" "}
        </h1>
      </div>
    ));
  };
  return (
    <div
      onClick={copyToClipboard}
      className="flex flex-row items-center justify-center gap-2 cursor-pointer md:flex-col group"
    >
      <div
        style={{backgroundColor: color}}
        className="w-16 h-16 border-2 border-black dark:border-white group-hover:translate-y-[-5px] transition-all duration-300 ease-in-out hover:border-purple-900 dark:hover:border-purple-400"
      />
      <p className="text-sm font-rubik text-neutral-900 dark:text-neutral-100">
        {name}
      </p>
    </div>
  );
}
