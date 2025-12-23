import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import AppwriteAccount from "../appwrite/Account.services";
import { useNavigate } from "react-router-dom";
import AuthBackground from "@/components/ui/AuthBackground";

function LogInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const appwriteAccount = new AppwriteAccount();

  const handleNavigateToRegisterPage = () => {
    navigate("/signup");
  };

  const handleLogInUser = async () => {
    

    try {
      const result = await appwriteAccount.createAppwriteEmailPasswordSession(
        email,
        password
      );
      console.log(result);
      if (result) {
        setEmail("");
        setPassword("");
        navigate("/");
      }
    } catch (error) {
      console.log("Error inside LogInPage: ", error);
    }

  };

  return (
    <div className="h-screen w-screen flex items-center justify-center relative">
      <AuthBackground />
      <Card className="w-full max-w-sm relative z-10 backdrop-blur-md bg-white/10 border border-white/20">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
          <CardAction>
            <Button variant="link" onClick={handleNavigateToRegisterPage}>
              Sign Up
            </Button>
          </CardAction>
        </CardHeader>

        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  value = {email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  required
                  value = {password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </form>
        </CardContent>

        <CardFooter className="flex-col gap-2">
          <Button onClick={handleLogInUser} className="w-full">
            Login
          </Button>
          <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-2"
          >
            <FcGoogle size={20} />
            Login with Google
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default LogInPage;


