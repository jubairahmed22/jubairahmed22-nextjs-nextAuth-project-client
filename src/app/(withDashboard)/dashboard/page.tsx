import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <div>
      {session?.user && (
        <>
          <h1 className="text-4xl text-center mt-10">
            Welcome To {session?.user?.name}
          </h1>
          <h1 className="text-4xl text-center mt-10">
            Welcome To {session?.user?.email}
          </h1>
          <Image
            className="mx-auto rounded-full"
            src={session?.user?.image ||
            "https://i.pinimg.com/1200x/b1/88/c6/b188c6801ad1d71d3c962c6e4aa2d0cf.jpg" 
            }
            width={100}
            height={100}
            alt="user image"
          ></Image>
        </>
      )}
    </div>
  );
};

export default DashboardPage;
