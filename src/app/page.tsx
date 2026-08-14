"use client";

import { useEffect, useState } from "react";

import AuthScreen from "@/features/auth/AuthScreen";
import { createClient } from "@/lib/supabase/client";

type AuthState = "checking" | "unauthenticated" | "authenticated";

export default function Home() {
  const [email, setEmail] = useState("");
  const [authState, setAuthState] = useState<AuthState>("checking");

  useEffect(() => {
    const supabase = createClient();

    const initializeAuth = async () => {
      const code = new URLSearchParams(window.location.search).get(
        "code",
      );

      if (code) {
        console.log("Supabase callback code detected.");

        const { error } =
          await supabase.auth.exchangeCodeForSession(code);

        if (error) {
          console.error(
            "Supabase code exchange failed:",
            error.message,
          );
        } else {
          console.log("Supabase code exchange successful.");
        }

        window.history.replaceState(
          {},
          document.title,
          window.location.pathname,
        );
      }

      const {
        data: { session },
      } = await supabase.auth.getSession();

      console.log(
        "Initial Supabase session:",
        Boolean(session),
      );

      if (session?.user?.email) {
        setEmail(session.user.email);
        setAuthState("authenticated");
      } else {
        setAuthState("unauthenticated");
      }
    };

    initializeAuth();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      console.log("Supabase auth event:", event);
      console.log(
        "Supabase session exists:",
        Boolean(session),
      );

      if (session?.user?.email) {
        setEmail(session.user.email);
        setAuthState("authenticated");
      } else if (event === "SIGNED_OUT") {
        setEmail("");
        setAuthState("unauthenticated");
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleContinue = (enteredEmail: string) => {
    setEmail(enteredEmail);
    setAuthState("checking");
  };

  if (authState === "checking") {
    return null;
  }

  if (authState === "authenticated") {
    const handleLogout = async () => {
      const supabase = createClient();

      const { error } = await supabase.auth.signOut();

      if (error) {
        console.error("Supabase logout failed:", error.message);
      }
    };

    return (
      <main className="min-h-screen bg-slate-950 text-white">
        <div className="flex min-h-screen items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-semibold">
              Welcome to Anon-PU
            </h1>

            <p className="mt-2 text-sm text-slate-400">
              Authenticated as {email}
            </p>

            <button
              type="button"
              onClick={handleLogout}
              className="mt-6 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium transition hover:bg-white/10"
            >
              Logout
            </button>
          </div>
        </div>
      </main>
    );
  }

  return <AuthScreen onContinue={handleContinue} />;
}