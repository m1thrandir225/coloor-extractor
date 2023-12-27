import ThemeSwitcher from "./theme-switcher";

export default function Header() {
  return (
    <div className="w-full px-4 py-2">
      <div className="flex flex-row items-center justify-between px-4 py-2 border-2 border-black dark:border-white">
        <div className="flex flex-row items-center gap-2">
          <h1 className="text-xl font-bold transition-all ease-in-out font-rubik group hover:tracking-widest">
            (<span className="text-blue-400">c</span>
            <span className="text-orange-400">o</span>
            <span className="text-red-400">o</span>
            <span className="text-green-400">l</span>
            <span className="text-pink-400">o</span>
            <span className="text-purple-400">r</span>)
          </h1>
          <p className="text-xl text-black md:text-3xl font-rubikmono dark:text-white">
            Extractor
          </p>
        </div>
        <ThemeSwitcher />
      </div>
    </div>
  );
}
