"use client";
import {toast} from "sonner";

type ColorSwatchProps = {
  color: string;
  name: string;
};

export default function ColorSwatch({color, name}: ColorSwatchProps) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(color);
    toast.info(`Copied ${name}(${color}) to clipboard`);
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
