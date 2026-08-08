"use client";

import { useState } from "react";
import AuthScreen from "@/features/auth/AuthScreen";
import VerificationScreen from "@/features/auth/VerificationScreen";

export default function Home() {
  const [email, setEmail] = useState("");
  const [screen, setScreen] = useState<"auth" | "verification">("auth");

  const handleContinue = (enteredEmail: string) => {
    setEmail(enteredEmail);
    setScreen("verification");
  };

  if (screen === "verification") {
    return <VerificationScreen email={email} />;
  }

  return <AuthScreen onContinue={handleContinue} />;
}