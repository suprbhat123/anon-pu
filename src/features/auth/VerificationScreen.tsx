"use client";

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
                                />
                            </div>

                            <Button>
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