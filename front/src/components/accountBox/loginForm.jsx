import React, { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
  Tncbox
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <Tncbox>
        <input type="checkbox" id="top"  />
        I agree to the Terms Of Services
        </Tncbox>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit"><a href="/detail">SignIn</a></SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      
      <MutedLink href="#">
        Don't have an account ?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Sign Up
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
