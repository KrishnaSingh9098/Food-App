// import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogHeader, DialogClose } from '@radix-ui/react-dialog';
// import { Button } from "./ui/button";
// import { Menu , Sun, Moon} from "lucide-react";
// import { Label } from "@radix-ui/react-label";
// import { Input } from "./ui/input";
// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuTrigger,
//   } from "./ui/dropdown-menu";

// const MobileNavbar = () => {
//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//         <Button className="rounded-full bg-gray-200 text-black hover:bg-gray-200" variant="outline">
//           <Menu size={'18'} />
//         </Button>
//       </DialogTrigger>
//       <DialogContent className="flex flex-col">
//         <DialogHeader className="flex flex-row items-center justify-between">
//         <DialogTitle>KRISHNA_EATS</DialogTitle>
//         <DropdownMenu>
//                 <DropdownMenuTrigger asChild>
//                   <Button variant="outline" size="icon">
//                     <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
//                     <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
//                     <span className="sr-only">Toggle theme</span>
//                   </Button>
//                 </DropdownMenuTrigger>
//                 <DropdownMenuContent align="end">
//                   <DropdownMenuItem>Light</DropdownMenuItem>
//                   <DropdownMenuItem>Dark</DropdownMenuItem>
//                 </DropdownMenuContent>
//               </DropdownMenu>
//         <div className="grid gap-4 py-4">
//           <div className="grid grid-cols-4 items-center gap-4">
//             <Label htmlFor="name" className="text-right">
//               Name
//             </Label>
//             <Input id="name" value="Pedro Duarte" className="col-span-3" />
//           </div>
//           <div className="grid grid-cols-4 items-center gap-4">
//             <Label htmlFor="username" className="text-right">
//               Username
//             </Label>
//             <Input id="username" value="@peduarte" className="col-span-3" />
//           </div>
//         </div>
//         <div className="mt-4">
//           <DialogClose asChild>
//             <Button type="submit">Save changes</Button>
//           </DialogClose>
//         </div>
//         </DialogHeader>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default MobileNavbar;

import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogTitle,
    DialogClose,
    DialogDescription,
  } from "@radix-ui/react-dialog";
  import { Button } from "./ui/button";
  import { Menu, Sun, Moon, User } from "lucide-react";
  import { Label } from "@radix-ui/react-label";
  import { Input } from "./ui/input";
  import { Link } from "react-router-dom";
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "./ui/dropdown-menu";
  import { Separator } from "@radix-ui/react-separator"; // Correct import for Separator
  
  const MobileNavbar = () => {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button
            className="rounded-full bg-gray-200 text-black hover:bg-gray-300"
            variant="outline"
          >
            <Menu size={"18"} />
          </Button>
        </DialogTrigger>
        <DialogContent className="flex flex-col p-4 max-w-sm mx-auto sm:max-w-md md:max-w-lg lg:max-w-xl">
          <div className="flex flex-row items-center justify-between mb-4">
            <div>
            <DialogTitle className="text-lg font-semibold flex-1">KRISHNA_EATS</DialogTitle>
            </div>
           
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="relative">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-transform duration-300 ease-in-out dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-transform duration-300 ease-in-out dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Light</DropdownMenuItem>
                <DropdownMenuItem>Dark</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          <Separator className="my-4" />
  
          <DialogDescription className="flex flex-col gap-4">
            <Link to="/profile" className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
              <User />
              <span>Profile</span>
            </Link>
            <Link to="/profile" className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
              <User />
              <span>Profile</span>
            </Link>
            <Link to="/profile" className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
              <User />
              <span>Profile</span>
            </Link>
            <Link to="/profile" className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
              <User />
              <span>Profile</span>
            </Link>
            <Link to="/profile" className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
              <User />
              <span>Profile</span>
            </Link>
            <Link to="/profile" className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
              <User />
              <span>Profile</span>
            </Link>
          </DialogDescription>
  
          <div className="mt-auto"> 
            <DialogClose asChild>
              <Button type="submit" className="bg-orange hover:bg-hoverOrange w-full">
                LOG-OUT
              </Button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    );
  };
  
  export default MobileNavbar;
  