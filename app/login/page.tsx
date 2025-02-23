import Link from "next/link";
import { LoginForm } from "@/components/forms/LoginForm";

export default function Login() {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center">
        <div className="flex w-full max-w-sm flex-col gap-6">
            <Link href="/" className="text-2xl font-bold self-center">
                <h1 className="text-2xl font-bold">
                    New<span className="text-primary">Jobs</span>
                </h1>
            </Link>
            <LoginForm />
        </div>
    </div>
  );
}
