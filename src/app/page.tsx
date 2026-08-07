import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Input from "@/components/ui/Input";
import Logo from "@/components/ui/Logo";

export default function Home() {
  return (
    <main className="min-h-screen bg-black py-12">
      <Container>
        <Card className="mx-auto max-w-sm">
          <div className="space-y-4">
            <Logo />

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