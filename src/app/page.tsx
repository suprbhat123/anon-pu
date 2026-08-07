import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Input from "@/components/ui/Input";

export default function Home() {
  return (
    <main className="min-h-screen bg-black py-12">
      <Container>
        <Card className="mx-auto max-w-sm">
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
      </Container>
    </main>
  );
}