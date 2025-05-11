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
import { api } from "@/api/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

export default function Register() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    address: "",
    phoneNumber: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      await fetch(`${api}/apis/add-user`, {
        method: "POST",
        headers: {
          "Content-Type": "application.json",
        },
        body: JSON.stringify(formData),
      });

      toast.success(`register succesfully`);
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error("registration failed");
    }
  }

  function handleNext() {
    setStep(2);
  }
  function handlePrev() {
    setStep(1);
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>Daftar Sekarang</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <div className="flex justify-center text-xs mb-4">
              <p>Step {step} of 2</p>
            </div>

            {/* STEP 1 */}
            {step === 1 && (
              <>
                <Label htmlFor="email">Email</Label>
                <Input
                  className="mt-2"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <Label className="mt-2" htmlFor="password">
                  Password
                </Label>
                <Input
                  className="mt-2"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <div className="flex justify-end mt-5">
                  <Button variant="outline" type="button" onClick={handleNext}>
                    Next
                  </Button>
                </div>
              </>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <>
                <Label className="mt-2" htmlFor="username">
                  Username
                </Label>
                <Input
                  className="mt-2"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
                <Label className="mt-2" htmlFor="phoneNumber">
                  Phone Number
                </Label>
                <Input
                  className="mt-2"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
                <Label className="mt-2" htmlFor="address">
                  Address
                </Label>
                <Input
                  className="mt-2"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
                <div className="flex justify-between mt-5">
                  <Button variant="outline" type="button" onClick={handlePrev}>
                    Back
                  </Button>
                  <Button variant="outline" type="submit">
                    Submit
                  </Button>
                </div>
              </>
            )}
          </CardContent>
        </form>
      </Card>
    </div>
  );
}
