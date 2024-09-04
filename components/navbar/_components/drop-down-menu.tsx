import { Button } from "@/components/ui/button";
import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  BarChart,
  Building2,
  Code,
  Code2Icon,
  DollarSign,
  Download,
  GraduationCap,
  Headphones,
  Home,
  Newspaper,
  PaintBucket,
  Settings,
  Smile,
  Sparkles,
  ScreenShare,
  Users,
  UserPlus,
  ArrowRight,
} from "lucide-react";

interface DropDownMenuProps {
  onClose: () => void;
}

const DropdownMenu: React.FC<DropDownMenuProps> = ({ onClose }) => {
  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div className="w-screen h-screen bg-white  px-4 items-center justify-center absolute  right-0 xl:hidden">
      <Accordion
       defaultValue="item-1"
        className="
            pl-2
            "
        type="single"
        collapsible
      >
        <AccordionItem className="mt-6 border-b" value="item-1">
          <AccordionTrigger className="">About</AccordionTrigger>
          <AccordionContent
           defaultValue="item-1"
          
          
          className="space-y-2">
            <Link
              href={"/"}
              className="flex"
              onClick={handleLinkClick}
            >
              <div>
                <UserPlus className="h-6 w-6 mr-4 text-orange-400" />
              </div>
              <div>Organizing Committee</div>
            </Link>
            <Link
              href={"/"}
              className="flex"
              onClick={handleLinkClick}
            >
              <div>
                <DollarSign className="h-6 w-6 mr-4 text-green-400" />
              </div>

              <div>Technical Program Committee</div>
            </Link>
            <Link
              href={"/"}
              className="flex"
              onClick={handleLinkClick}
            >
              <div>
                <Code className="h-6 w-6 mr-4 text-indigo-400" />
              </div>

              <div>Advisory Committee</div>
            </Link>

          </AccordionContent>
        </AccordionItem>
        <AccordionItem className=" border-b" value="item-2">
          <AccordionTrigger>General Information</AccordionTrigger>
          <AccordionContent className="space-y-2">
            <Link
              href={"/team-alignment"}
              className="flex"
              onClick={handleLinkClick}
            >
              <div>
                <UserPlus className="h-6 w-6 mr-4 text-orange-400" />
              </div>
              <div>Accomodation</div>
            </Link>
            <Link
              href={"/"}
              className="flex"
              onClick={handleLinkClick}
            >
              <div>
                <DollarSign className="h-6 w-6 mr-4 text-green-400" />
              </div>

              <div>Travel Information</div>
            </Link>
            <Link
              href={"/"}
              className="flex"
              onClick={handleLinkClick}
            >
              <div>
                <Code className="h-6 w-6 mr-4 text-indigo-400" />
              </div>

              <div>Call for Volunteers</div>
            </Link>
            <Link
              href={"/"}
              className="flex"
              onClick={handleLinkClick}
            >
              <div>
                <PaintBucket className="h-6 w-6 mr-4 text-blue-400" />
              </div>

              <div>Call for Industrial Exhibitors</div>
            </Link>

          </AccordionContent>
        </AccordionItem>

        <AccordionItem className=" border-b" value="item-3">
          <AccordionTrigger>Authors</AccordionTrigger>
          <AccordionContent className="space-y-2">
            <Link
              href={"/"}
              className="flex"
              onClick={handleLinkClick}
            >
              <div>
                <UserPlus className="h-6 w-6 mr-4 text-orange-400" />
              </div>
              <div>Call for Papers</div>
            </Link>
            <Link
              href={"/"}
              className="flex"
              onClick={handleLinkClick}
            >
              <div>
                <DollarSign className="h-6 w-6 mr-4 text-green-400" />
              </div>

              <div>Registrations</div>
            </Link>
            <Link
              href={"/"}
              className="flex"
              onClick={handleLinkClick}
            >
              <div>
                <Code className="h-6 w-6 mr-4 text-indigo-400" />
              </div>

              <div>Paper Submissions</div>
            </Link>
            <Link
              href={"/"}
              className="flex"
              onClick={handleLinkClick}
            >
              <div>
                <PaintBucket className="h-6 w-6 mr-4 text-blue-400" />
              </div>

              <div>Presentation Schedules</div>
            </Link>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem className=" border-b" value="item-4">
          <AccordionTrigger>Program</AccordionTrigger>
          <AccordionContent className="space-y-2">
            <Link
              href={"/team-alignment"}
              className="flex"
              onClick={handleLinkClick}
            >
              <div>
                <UserPlus className="h-6 w-6 mr-4 text-orange-400" />
              </div>
              <div>Important Dates</div>
            </Link>
            <Link
              href={"/"}
              className="flex"
              onClick={handleLinkClick}
            >
              <div>
                <DollarSign className="h-6 w-6 mr-4 text-green-400" />
              </div>

              <div>Plenaries and Keynotes</div>
            </Link>
            <Link
              href={"/engineering"}
              className="flex"
              onClick={handleLinkClick}
            >
              <div>
                <Code className="h-6 w-6 mr-4 text-indigo-400" />
              </div>

              <div>Panel Discussions</div>
            </Link>
            <Link
              href={"/design"}
              className="flex"
              onClick={handleLinkClick}
            >
              <div>
                <PaintBucket className="h-6 w-6 mr-4 text-blue-400" />
              </div>

              <div>IEEE Promotional Events</div>
            </Link>
            <Link
              href={"/marketing"}
              className="flex "
              onClick={handleLinkClick}
            >
              <div>
                <BarChart className="h-6 w-6 mr-4 text-rose-400" />
              </div>

              <div>Presentation Schedules</div>
            </Link>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="pt-12">
        <div className="  space-y-4 flex flex-col px-4">
          <Link href={"/contact"}>
            <Button
              className="
              w-full    "
            >
      Contact Us
            </Button>
          </Link>

          
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;