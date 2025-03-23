import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
    const session = await getServerSession(authOptions);
    console.log(session);
    return (
        <div>
            <h1 className='text-4xl text-center mt-10'>
                Welcome To {session?.user?.name}
            </h1>
            <div className=''>
                {session?.user?.email && (
                    <h2 className='text-5xl text-center'>
                        Email: {session?.user?.email}
                    </h2>
                )}
            </div>
            {session?.user?.image && (
                <Image
                    src={session?.user?.image}
                    width={100}
                    height={100}
                    alt={session?.user?.name || "User Image"}
                    className="mx-auto mt-5 rounded-full"
                />
            )}
        </div>
    );
};

export default DashboardPage;
