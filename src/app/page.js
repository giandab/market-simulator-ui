import Image from "next/image";
import styles from "./page.module.css";
import Form from 'next/form'
import { LoginForm } from "@/components/login-form"


export default function Home() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}
