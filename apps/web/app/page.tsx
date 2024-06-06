import React from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { SignIn } from "./components/signinCustom";
import Signup from "./components/signupCustom";
import SignInPage from "../pages/sign-in";
import { Layout } from "./components/layout";
import { Menu } from "./components/common/menu";

export default async function Page() {
  // const { isAuthenticated } = getKindeServerSession();
  // const isLoggedIn = await isAuthenticated();

  // if (!isLoggedIn) {
  //   redirect("/api/auth/login");
  // }

  return (
    <>
      {/* <Layout /> */}

      <LogoutLink>Logout</LogoutLink>
      <LoginLink>Sign in</LoginLink>
      <RegisterLink>Sign up</RegisterLink>
    </>
  );
}

{
  /* <LogoutLink>Logout</LogoutLink>
    <LoginLink>Sign in</LoginLink>
    <RegisterLink>Sign up</RegisterLink> */
}
