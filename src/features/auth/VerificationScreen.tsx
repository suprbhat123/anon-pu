"use client";

import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
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
                                    Check your email
                                </h1>

                                <p className="mt-2 text-sm text-slate-400">
                                    We sent a secure sign-in link to:
                                </p>

                                <p className="mt-2 text-sm font-medium text-slate-200">
                                    {email}
                                </p>
                            </div>

                            <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-4">
                                <p className="text-sm leading-6 text-slate-300">
                                    Open the email from Supabase Auth and click
                                    the <span className="font-medium text-white">Sign in</span>{" "}
                                    link to continue to Anon-PU.
                                </p>
                            </div>

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