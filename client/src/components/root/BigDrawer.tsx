import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineSubscriptions } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/provider";
import SubDrawer from "./SubDrawer";
import subscriptionServices from "@/services/subscription.services";
import { useSuccess } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";

const BigDrawer = () => {
    const dispatch = useDispatch();
    const userId = useSelector((state: RootState) => state.auth.userData?._id);
    const username = useSelector(
        (state: RootState) => state.auth.userData?.username
    );
    const successfull = useSuccess(dispatch);
    const fetchChannels = async () => {
        const res = await subscriptionServices.getSubscribedChannels(userId);
        if (successfull(res)) {
            return res.data.subscribedChannels;
        }
    };
    const {
        data: channels,
        isError,
        error,
        isLoading,
    } = useQuery({
        queryKey: ["channels"],
        queryFn: fetchChannels,
        enabled: !!userId,
    });

    const options1 = [
        { name: "Home", icon: <IoHomeOutline />, route: "/" },
        {
            name: "Shorts",
            icon: <SiYoutubeshorts />,
            route: "/empty",
        },
        {
            name: "Subscriptions",
            icon: <MdOutlineSubscriptions />,
            route: "/empty",
        },
    ];
    const options2 = [
        {
            name: "Your channel",
            icon: (
                <div className="text-black w-full h-full block">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        focusable="false"
                        width={24}
                        height={24}
                        className="pointer-events-none w-full h-full block"
                    >
                        <path d="M3,3v18h18V3H3z M4.99,20c0.39-2.62,2.38-5.1,7.01-5.1s6.62,2.48,7.01,5.1H4.99z M9,10c0-1.65,1.35-3,3-3s3,1.35,3,3 c0,1.65-1.35,3-3,3S9,11.65,9,10z M12.72,13.93C14.58,13.59,16,11.96,16,10c0-2.21-1.79-4-4-4c-2.21,0-4,1.79-4,4 c0,1.96,1.42,3.59,3.28,3.93c-4.42,0.25-6.84,2.8-7.28,6V4h16v15.93C19.56,16.73,17.14,14.18,12.72,13.93z"></path>
                    </svg>
                </div>
            ),
            route: `/${username}/channel`,
        },
        {
            name: "History",
            icon: (
                <div className="text-black w-full h-full block">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        className="pointer-events-none w-full h-full block"
                        viewBox="0 0 24 24"
                        width="24"
                        focusable="false"
                    >
                        <g>
                            <path d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM22 12c0 5.51-4.49 10-10 10S2 17.51 2 12h1c0 4.96 4.04 9 9 9s9-4.04 9-9-4.04-9-9-9C8.81 3 5.92 4.64 4.28 7.38c-.11.18-.22.37-.31.56L3.94 8H8v1H1.96V3h1v4.74c.04-.09.07-.17.11-.25.11-.22.23-.42.35-.63C5.22 3.86 8.51 2 12 2c5.51 0 10 4.49 10 10z"></path>
                        </g>
                    </svg>
                </div>
            ),
            route: `/watch-history`,
        },
        {
            name: "Playlists",
            icon: (
                <div className="text-black w-full h-full block">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                        focusable="false"
                        className="pointer-events-none w-full h-full block"
                    >
                        <path d="M22 7H2v1h20V7zm-9 5H2v-1h11v1zm0 4H2v-1h11v1zm2 3v-8l7 4-7 4z"></path>
                    </svg>
                </div>
            ),
            route: `/playlists`,
        },
        {
            name: "Your videos",
            icon: (
                <div className="text-black w-full h-full block">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                        focusable="false"
                        className="pointer-events-none w-full h-full block"
                    >
                        <path d="m10 8 6 4-6 4V8zm11-5v18H3V3h18zm-1 1H4v16h16V4z"></path>
                    </svg>
                </div>
            ),
            route: `/empty`,
        },
        {
            name: "Watch later",
            icon: (
                <div className="text-black w-full h-full block">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                        focusable="false"
                        className="pointer-events-none w-full h-full block"
                    >
                        <path d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM12 3c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z"></path>
                    </svg>
                </div>
            ),
            route: `/watch-later`,
        },
        {
            name: "Liked videos",
            icon: (
                <div className="text-black w-full h-full block">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                        focusable="false"
                        className="pointer-events-none w-full h-full block"
                    >
                        <path d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z"></path>
                    </svg>
                </div>
            ),
            route: `/liked-videos`,
        },
    ];
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error: {error.message}</div>;
    return (
        <div className="w-full">
            <div>
                <SubDrawer options={options1} />
            </div>
            {userId && (
                <>
                    <hr className="my-3" />
                    <p className="ml-2 mb-2 text-sm font-bold text-black">
                        {"You >"}
                    </p>
                    <div>
                        <SubDrawer options={options2} />
                    </div>
                    {channels.length > 0 && (
                        <>
                            <hr className="my-3" />
                            <p className="ml-2 mb-2 text-sm font-bold text-black">
                                Subscriptions
                            </p>
                            <div>
                                <SubDrawer options={channels} />
                            </div>
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default BigDrawer;
