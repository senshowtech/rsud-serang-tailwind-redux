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
              RSUD dr dradjat prawiranegara Homecare
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              Layanan Homecare, Rumah sakit Umum Banten mempermudah masyarakat
              untuk berobat tanpa harus ke rumah sakit
            </p>
          </div>
        </div>
        <div>
          <img
            className="h-auto w-auto"
            src="https://dev2019.bantenprov.go.id/dinsos_web/uploads/images/image_750x_5e7d64a92298c.jpg"
            alt="Workflow"
          />
        </div>
      </div>
    </div>
  );
}
