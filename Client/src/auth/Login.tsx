import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { LoginInputState, userLoginSchema } from "@/schema/userSchema";
import { Label } from "@radix-ui/react-label";
import { Separator } from "@radix-ui/react-separator";
import { Loader2, LockKeyhole, Mail  } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";
//typescript me typye definr =e krne ke do tarike 1. interface
// interface LoginInputState{
//   email:String,
//   password:string;
// }

// type LoginInputState2 = {
//   email:String,
//   password:string,
// }

const Login = () => {

  const [input,setInput] = useState<LoginInputState>({
    email:"",
    password:""
  })
  const [errors, setErrors] = useState<Partial<LoginInputState>>({});
  const changeEventHandler = (e:ChangeEvent<HTMLInputElement>) =>{
   const {name, value} = e.target;
   setInput({...input,[name]:value})
  }

  const loginSubmitHandler = (e:FormEvent) =>{
    e.preventDefault();
    //form validation check start 
    const result = userLoginSchema.safeParse(input);
    if(!result.success){
        const fieldErrors = result.error.formErrors.fieldErrors;
        setErrors(fieldErrors as Partial<LoginInputState>);
        return;
    }
    console.log(input);
    
  }
  const loading = false;

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        action=""
        className="md:p-8 w-full max-w-md border border-gray-200 mx-4"
        onSubmit={loginSubmitHandler}
      >
        <div className="mb-4">
          <h1 className="font-bold text-2xl">ANTIMA-EATS</h1>
        </div>
        <div className="relative mb-4">
          <Label htmlFor="email" className="block mb-1">
            Email
          </Label>
          <Input
            type="email"
            id="email"
            placeholder="Email"
            name="email"
            value={input.email}
            onChange={changeEventHandler}
            className="pl-10 pr-4 focus-visible-ring-0 border rounded-md"
          />
          <Mail className="absolute inset-y-0 left-3 my-auto text-gray-500 pointer-events-none" />
          {errors && (
              <span className="text-xs text-red-500">{errors.email}</span>
            )}
        </div>

        <div className="relative mb-6">
          <Label htmlFor="password" className="block mb-1">
            Password
          </Label>
          <Input
            type="password"
            id="password"
            placeholder="Password"
            name="password"
            value={input.password}
            onChange={changeEventHandler}
            className="pl-10 pr-4 focus-visible-ring-0 border rounded-md"
          />
          <LockKeyhole className="absolute inset-y-0 left-3 my-auto text-gray-500 pointer-events-none" />
          {errors && (
              <span className="text-xs text-red-500">{errors.password}</span>
            )}
        </div>

        <div className="mb-6">
          {
            loading ? <Button disabled className="w-full bg-orange hover:bg-hoverOrange text-white py-2 px-4 rounded"><Loader2 className="mr-2 h-4 w-4 animate-spin"> Please Wait</Loader2></Button>
             : 
             (
              <Button type="submit" className="w-full bg-orange hover:bg-hoverOrange text-white py-2 px-4 rounded">
            Login
          </Button>
            )
          }
          <div className="mt-4">
            <Link
              to="/forgot-password"
              className="hover:text-blue-500 hover:underline"
            >
              Forgot Password
            </Link>
          </div>
          
        </div>
    <Separator/>
    <p className="mt-2">
      D'ont have an Account ? {" "}
     <Link to="/Signup">Sign-UP</Link>
    </p>
      </form>
    </div>
  );
};

export default Login;
