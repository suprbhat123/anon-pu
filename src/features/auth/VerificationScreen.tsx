"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Input from "@/components/ui/Input";
import Logo from "@/components/ui/Logo";

interface VerificationScreenProps {
    email?: string;
}

export default function VerificationScreen({
    email = "you@paruluniversity.ac.in",
}: VerificationScreenProps) {
    const [code, setCode] = useState("");
    const [error, setError] = useState("");

    const handleVerify = () => {
        const normalizedCode = code.trim();

        if (!normalizedCode) {
            setError("Please enter your verification code.");
            return;
        }

        setError("");
    };

    return (
        <main className="min-h-screen bg-slate-950 text-white">
            <Container>
                <div className="flex min-h-screen items-center justify-center py-10">
                    <Card>
                        <div className="w-full max-w-md space-y-6">
                            <div className="text-center">
                                <Logo />

                                <h1 className="mt-6 text-2xl font-semibold">
                                    Verify your email
                                </h1>

                                <p className="mt-2 text-sm text-slate-400">
                                    We sent a verification code to:
                                </p>

                                <p className="mt-2 text-sm font-medium text-slate-200">
                                    {email}
                                </p>
                            </div>

                            <div className="space-y-3">
                                <label className="text-sm font-medium text-slate-200">
                                    Verification Code
                                </label>

                                <Input
                                    type="text"
                                    placeholder="Enter verification code"
                                    value={code}
                                    onChange={(event) => {
                                        setCode(event.target.value);
                                        setError("");
                                    }}
                                />

                                {error && (
                                    <p className="text-sm text-red-400">
                                        {error}
                                    </p>
                                )}
                            </div>

                            <Button onClick={handleVerify}>
                                Verify Email
                            </Button>

                            <p className="text-center text-xs text-slate-500">
                                Your university identity will remain private.
                            </p>
                        </div>
                    </Card>
                </div>
            </Container>
        </main>
    );
}