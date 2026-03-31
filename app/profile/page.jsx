import { authOptions } from "@app/_lib/auth";
import Spinner from "@components/feadback/Spinner";
import PrompetCardListLayout from "@components/feature/profile/PrompetCardListLayout";
import { getServerSession } from "next-auth";
import { Suspense } from "react";

const page = async () => {
  const session = await getServerSession(authOptions);

  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">My Profile</span>{" "}
      </h1>
      <p className="desc text-left">Welcome to your personlized profile page</p>
      <div className="mt-10 ">
        <Suspense fallback={<Spinner />}>
          <PrompetCardListLayout userId={session?.user?.id} />
        </Suspense>
      </div>
    </section>
  );
};

export default page;
