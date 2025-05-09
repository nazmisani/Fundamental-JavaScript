import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function Register() {
  return (
    <div className=" flex justify-center items-center h-screen">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>Daftar Sekarang</CardDescription>
        </CardHeader>
        <CardContent>
          <Label htmlFor="email">Email</Label>
          <Input className="mt-2" />
          <Label className="mt-2" htmlFor="email">
            Username
          </Label>
          <Input className="mt-2" />
          <Label className="mt-2" htmlFor="email">
            Phone Number
          </Label>
          <Input className="mt-2" />
          <Label className="mt-2" htmlFor="email">
            Adress
          </Label>
          <Input className="mt-2" />
          <Label className="mt-2" htmlFor="email">
            Password
          </Label>
          <Input className="mt-2" />
        </CardContent>
        <CardFooter>
          <Button variant="outline">Login</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
