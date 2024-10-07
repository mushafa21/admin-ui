import FormSignUp from "../components/fragments/FormSignUp";
import Authlayout from "../components/layouts/AuthLayout";

const SignUpPage = () => {
  return (
    <Authlayout title="sign up">
      <FormSignUp />
    </Authlayout>
  );
};

export default SignUpPage;