import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black">
      <div className="w-full max-w-sm space-y-4">
        <Input placeholder="Enter your email" type="email" />

        <Button>Get Started</Button>
      </div>
    </main>
  );
}