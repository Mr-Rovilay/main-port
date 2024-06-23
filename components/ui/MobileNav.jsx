import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";

import Nav from "../Nav";
import Socials from "../Socials";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <div className="w-16 sm:w-16">
              <img
                src="https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/428507908_394083473236679_1949241133238883843_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEafni4atAdw0D-WjH4-DXrov339ypwXNCi_ff3KnBc0Iu8ELjSH4FhFDZoMKKIvkhzKFUciKFlc1uIt7wCUkjE&_nc_ohc=zA9IWH5qHikQ7kNvgGHGpCs&_nc_ht=scontent-los2-1.xx&oh=00_AYARp_AbkNDEpohLfe7bHbB3jlcRgmVXW9D_tM_f-_mWUg&oe=667CD88E"
                alt="Logo"
                className="shadow rounded-full max-w-full h-auto border-none"
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
