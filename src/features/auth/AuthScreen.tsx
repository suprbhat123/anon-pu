"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Input from "@/components/ui/Input";
import Logo from "@/components/ui/Logo";

export default function AuthScreen() {
    const [email, setEmail] = useState("");

    return (
        <main className="min-h-screen bg-slate-950 text-white">
            <Container>
                <div className="flex min-h-screen items-center justify-center py-10">
                    <Card>
                        <div className="w-full max-w-md space-y-6">
                            <div className="text-center">
                                <Logo />

                                <h1 className="mt-6 text-2xl font-semibold">
                                    Join Anon-PU
                                </h1>

                                <p className="mt-2 text-sm text-slate-400">
                                    Verify your Parul University email to continue.
                                </p>
                            </div>

                            <div className="space-y-3">
                                <label
                                    htmlFor="university-email"
                                    className="text-sm font-medium text-slate-200"
                                >
                                    Parul University Email
                                </label>

                                <Input
                                    type="email"
                                    placeholder="you@paruluniversity.ac.in"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                />
                            </div>

                            <Button>
                                Continue
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