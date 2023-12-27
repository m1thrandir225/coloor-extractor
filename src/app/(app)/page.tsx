import Vibrant from "node-vibrant";
import Form from "./client-page";
import {getColors} from "@/actions/colors";
import Link from "next/link";
import {Github} from "lucide-react";
import Image from "next/image";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Page() {
  return (
    <div className="container w-full h-full min-h-screen mx-auto border-l-2 border-r-2 border-black dark:border-white lg:h-screen">
      <div className="flex flex-col justify-between w-full h-full">
        <Header />
        <Form getColors={getColors} />
        <Footer />
      </div>
    </div>
  );
}
