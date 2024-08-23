import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";

import Nav from "../Nav";
import Socials from "../Socials";
import Image from "next/image";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <div className="flex justify-center w-16 sm:w-16">
            <Image
            src="/work/ayo.jpg"
            width={58}
            height={58}
            alt="Ayodeji Olusegun Akinola"
            className="border-none rounded-full shadow"
          />
            </div>
            <Nav
              containerStyles={"flex flex-col items-center gap-y-6"}
              linkStyles={"text-2xl"}
            />
          </div>
          <Socials containerStyles={"flex gap-x-4"} IconStyles={"text-2xl"} />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
