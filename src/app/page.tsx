import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black p-6">
      <Card className="w-full max-w-sm">
        <div className="space-y-4">
          <h1 className="text-xl font-bold text-white">
            Anon-PU
          </h1>

          <Input
            type="email"
            placeholder="Enter your email"
          />

          <Button>Get Started</Button>
        </div>
      </Card>
    </main>
  );
}