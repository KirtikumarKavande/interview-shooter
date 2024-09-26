import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div>
      <div className="pl-9 text-gray-600 mb-4">
        <div>Email: yuvrajdhonisachin@gmail.com</div>
        <div>Password: Kirtikumar@1</div>
      </div>
      <SignIn />
    </div>
  );
}
