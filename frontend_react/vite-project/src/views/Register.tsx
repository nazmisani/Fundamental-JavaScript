import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Register() {
  const [step, setStep] = useState(1);
  // const [formData, setFormData] = useState({
  //   email: "",
  //   username: "",
  //   password: "",
  //   address: "",
  //   phoneNumber: "",
  // });

  // function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // }

  function handleNext() {
    setStep(2);
  }
  function handlePrev() {
    setStep(1);
  }

  return (
    <div className=" flex justify-center items-center h-screen">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>Daftar Sekarang</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center text-xs">
            <p>step {step} of 2</p>
          </div>
          {/* STEP 1 */}
          {step === 1 && (
            <>
              <Label htmlFor="email">Email</Label>
              <Input className="mt-2" />
              <Label className="mt-2" htmlFor="email">
                Password
              </Label>
              <Input className="mt-2" />
              <div className="flex justify-end mt-5">
                <Button variant="outline" onClick={handleNext}>
                  Next
                </Button>
              </div>
            </>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <>
              <Label className="mt-2" htmlFor="email">
                Username
              </Label>
              <Input className="mt-2" />
              <Label className="mt-2" htmlFor="email">
                Phone Number
              </Label>
              <Input className="mt-2" />
              <Label className="mt-2" htmlFor="email">
                Address
              </Label>
              <Input className="mt-2" />
              <div className="flex justify-between mt-5">
                <Button variant="outline" onClick={handlePrev}>
                  Back
                </Button>
                <Button variant="outline">Submit</Button>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
