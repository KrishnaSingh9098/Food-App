// import { Minus, Plus } from "lucide-react";
// import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
// import { Button } from "./ui/button";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableFooter,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "./ui/table";
// import CheckoutConfirmPage from "./CheckoutConfirmPage";
// import { SetStateAction } from "react";

// const Cart = () => {
//   function setOpen(_value: SetStateAction<boolean>): void {
//     throw new Error("Function not implemented.");
//   }

//   return (
//     <div>
//       <div className="flex justify-end">
//         <Button variant="link">Clear All</Button>
//       </div>
//       <Table>
//         <TableHeader>
//           <TableRow>
//             <TableHead>Items</TableHead>
//             <TableHead>Title</TableHead>
//             <TableHead>Price</TableHead>
//             <TableHead>Quantity</TableHead>
//             <TableHead>Total</TableHead>
//             <TableHead className="text-right">Remove</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           <TableRow>
//             <TableCell>
//               <Avatar>
//                 <AvatarImage src="" alt="" />
//                 <AvatarFallback>AFF</AvatarFallback>
//               </Avatar>
//             </TableCell>
//             <TableCell> BIRYANI</TableCell>
//             <TableCell> PRICE : 80</TableCell>
//             <TableCell>
//               <div className="w-fit flex items-center rounded-full border border-gray-100 dark:border-gray-800 shadow-md">
//                 <Button
//                   size={"icon"}
//                   variant={"outline"}
//                   className="rounded-full bg-gray-200"
//                 >
//                   <Minus />
//                 </Button>
//                 <Button
//                   size={"icon"}
//                   className="font-bold border-none"
//                   disabled
//                   variant={"outline"}
//                 >
//                   1
//                 </Button>
//                 <Button
//                   // onClick={() => incrementQuantity(item._id)}
//                   size={"icon"}
//                   className="rounded-full bg-orange hover:bg-hoverOrange"
//                   variant={"outline"}
//                 >
//                   <Plus />
//                 </Button>
//               </div>
//             </TableCell>
//             <TableCell>
//               {/* {item.price * item.quantity} */}
//               Quantity
//               </TableCell>
//             <TableCell className="text-right">
//               <Button size={"sm"} className="bg-orange hover:bg-hoverOrange">
//                 Remove
//               </Button>
//             </TableCell>
//           </TableRow>
//         </TableBody>
//         <TableFooter>
//           <TableRow className="text-2xl font-bold">
//             <TableCell colSpan={5}>Total</TableCell>
//             <TableCell className="text-right">
//               {/* {totalAmount} */}
//               Total Amont 
//               </TableCell>
//           </TableRow>
//         </TableFooter>
//       </Table>
//       <div className="flex justify-end my-5">
//         <Button
//           // onClick={() => setOpen(true)}
//           className="bg-orange hover:bg-hoverOrange"
//         >
//           Proceed To Checkout
//         </Button>
//       </div>
//       <CheckoutConfirmPage open={open} setOpen={setOpen} />
//     </div>
//   );
// };

// export default Cart;

import { Minus, Plus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import CheckoutConfirmPage from "./CheckoutConfirmPage";
import { useState } from "react"; // Import useState from React

const Cart = () => {
  // Initialize state for dialog visibility
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
      <div className="flex justify-end">
        <Button variant="link">Clear All</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Items</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Total</TableHead>
            <TableHead className="text-right">Remove</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <Avatar>
                <AvatarImage src="" alt="" />
                <AvatarFallback>AFF</AvatarFallback>
              </Avatar>
            </TableCell>
            <TableCell>BIRYANI</TableCell>
            <TableCell>PRICE : 80</TableCell>
            <TableCell>
              <div className="w-fit flex items-center rounded-full border border-gray-100 dark:border-gray-800 shadow-md">
                <Button
                  size="icon"
                  variant="outline"
                  className="rounded-full bg-gray-200"
                >
                  <Minus />
                </Button>
                <Button
                  size="icon"
                  className="font-bold border-none"
                  disabled
                  variant="outline"
                >
                  1
                </Button>
                <Button
                  size="icon"
                  className="rounded-full bg-orange hover:bg-hoverOrange"
                  variant="outline"
                >
                  <Plus />
                </Button>
              </div>
            </TableCell>
            <TableCell>
              {/* {item.price * item.quantity} */}
              Quantity
            </TableCell>
            <TableCell className="text-right">
              <Button size="sm" className="bg-orange hover:bg-hoverOrange">
                Remove
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow className="text-2xl font-bold">
            <TableCell colSpan={5}>Total</TableCell>
            <TableCell className="text-right">
              {/* {totalAmount} */}
              Total Amount
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      <div className="flex justify-end my-5">
        <Button
          onClick={() => setOpen(true)} 
          className="bg-orange hover:bg-hoverOrange"
        >
          Proceed To Checkout
        </Button>
      </div>
      <CheckoutConfirmPage open={open} setOpen={setOpen} />
    </div>
  );
};

export default Cart;

