/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function Jumbotron() {
  return (
    <div>
      <div className="flex flex-col sm:flex flex-col lg:flex-row">
        <div className="lg:w-1/2">
          <div className="mt-10 p-3 text-center">
            <h1 className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
              RSUD dr. Dradjat Prawiranegara Homecare
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              Layanan Homecare, Rumah sakit Umum Banten mempermudah masyarakat
              untuk berobat tanpa harus ke rumah sakit
            </p>
          </div>
        </div>
        <div className="flex justify-center pl-2 pr-2 lg:pr-0">
          <img
            className="h-auto w-auto"
            src="https://3.bp.blogspot.com/-IhJMRX7yqds/WriOSQbtZ7I/AAAAAAAAEP0/Vw9uYmMptSs6T_SWIXHdSpYqTdK3CChHQCLcBGAs/s1600/drajat%2Bprawiranegara.jpg"
            alt="Workflow"
          />
        </div>
      </div>
    </div>
  );
}
