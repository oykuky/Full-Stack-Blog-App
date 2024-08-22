
import { login } from "@/lib/action";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";
import Link from "next/link";
import { useSession } from "next-auth/react";

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);
  const {data : session} = useSession();
  console.log("SESSİON LOGİN BAKALIM", session)
  return (
    <form className={styles.form} action={login}>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
      <button>Login</button>
      {state?.error}
      <Link href="/register">
        {"Don't have an account?"} <b>Register</b>
      </Link>
    </form>
  );
};

export default LoginForm;