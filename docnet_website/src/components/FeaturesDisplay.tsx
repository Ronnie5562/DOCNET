// "use client";
import React, { forwardRef, useRef } from "react";
import { cn } from "../../@/lib/utils";
import {
    Person2, CalendarMonth, VideocamRounded, CircleNotificationsRounded
} from "@mui/icons-material";
import { AnimatedBeam } from "../../@/components/magicui/animated-beam";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Circle = forwardRef<
    HTMLDivElement,
    { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
                className,
            )}
        >
            {children}
        </div>
    );
});

Circle.displayName = "Features";

export function FeaturesDisplay() {
    const containerRef = useRef<HTMLDivElement>(null);
    const div1Ref = useRef<HTMLDivElement>(null);
    const div2Ref = useRef<HTMLDivElement>(null);
    const div3Ref = useRef<HTMLDivElement>(null);
    const div4Ref = useRef<HTMLDivElement>(null);
    const div5Ref = useRef<HTMLDivElement>(null);
    const div6Ref = useRef<HTMLDivElement>(null);
    const div7Ref = useRef<HTMLDivElement>(null);

    return (
        <Box
            id="features"
            sx={{
                pt: { xs: 4, sm: 12 },
                color: 'white',
                bgcolor: 'hsl(220, 30%, 2%)',
            }}
        >
            <Container
                sx={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: { xs: 3, sm: 6 },
                }}
            >
                <Box
                    sx={{
                        width: { sm: '100%', md: '60%' },
                        textAlign: 'center',
                        mb: -15,
                    }}
                >
                    <Typography component="h2" variant="h4">
                        Features Display
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'grey.400' }}>
                        When you get access to docnet, you get access to instant messaging,
                        video conferencing, and a calendar to schedule your appointments.
                        You also get medical records created by you doctor after every appointment scheduled.
                    </Typography>
                </Box>

                <div
                    className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg bg-dark p-10"
                    ref={containerRef}
                >
                    <div className="flex size-full flex-col max-w-lg max-h-[200px] items-stretch justify-between gap-10">
                        <div className="flex flex-row items-center justify-between">
                            <Circle ref={div1Ref}>
                                <CircleNotificationsRounded
                                    sx={{ fontSize: "2rem", color: "black" }}
                                />
                            </Circle>
                            <Circle ref={div5Ref}>
                                <Icons.googleDocs />
                            </Circle>
                        </div>
                        <div className="flex flex-row items-center justify-between">
                            <Circle ref={div2Ref} >
                                <VideocamRounded
                                    sx={{ fontSize: "2.5rem", color: '#df47aa' }}
                                />
                            </Circle>
                            <Circle ref={div4Ref} className="size-16">
                                <Person2
                                    sx={{ fontSize: "2.5rem", color: "black" }}
                                />
                            </Circle>
                            <Circle ref={div6Ref}>
                                <Icons.zapier />
                            </Circle>
                        </div>
                        <div className="flex flex-row items-center justify-between">
                            <Circle ref={div3Ref}>
                                <CalendarMonth
                                    color="primary"
                                    sx={{ fontSize: "2rem" }}
                                />
                            </Circle>
                            <Circle ref={div7Ref}>
                                <Icons.messenger />
                            </Circle>
                        </div>
                    </div>

                    <AnimatedBeam
                        containerRef={containerRef}
                        fromRef={div1Ref}
                        toRef={div4Ref}
                        curvature={-75}
                        endYOffset={-10}
                    />
                    <AnimatedBeam
                        containerRef={containerRef}
                        fromRef={div2Ref}
                        toRef={div4Ref}
                    />
                    <AnimatedBeam
                        containerRef={containerRef}
                        fromRef={div3Ref}
                        toRef={div4Ref}
                        curvature={75}
                        endYOffset={10}
                    />
                    <AnimatedBeam
                        containerRef={containerRef}
                        fromRef={div5Ref}
                        toRef={div4Ref}
                        curvature={-75}
                        endYOffset={-10}
                        reverse
                    />
                    <AnimatedBeam
                        containerRef={containerRef}
                        fromRef={div6Ref}
                        toRef={div4Ref}
                        reverse
                    />
                    <AnimatedBeam
                        containerRef={containerRef}
                        fromRef={div7Ref}
                        toRef={div4Ref}
                        curvature={75}
                        endYOffset={10}
                        reverse
                    />
                </div>

            </Container>
        </Box>


        // <Box
        //     sx={{
        //         textAlign: 'center',
        //     }}

        // >
        //     <Box
        //         sx={{
        //             width: { sm: '100%', md: '60%' },
        //             textAlign: { sm: 'left', md: 'center' },
        //         }}
        //     >
        //         <Typography component="h2" variant="h4">
        //             Highlights
        //         </Typography>
        //         <Typography variant="body1" sx={{ color: 'grey.400' }}>
        //             Explore why our product stands out: adaptability, durability,
        //             user-friendly design, and innovation. Enjoy reliable customer support and
        //             precision in every detail.
        //         </Typography>
        //     </Box>

        //     <div
        //         className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg bg-dark p-10"
        //         ref={containerRef}
        //     >
        //         <div className="flex size-full flex-col max-w-lg max-h-[200px] items-stretch justify-between gap-10">
        //             <div className="flex flex-row items-center justify-between">
        //                 <Circle ref={div1Ref}>
        //                     <CircleNotificationsRounded
        //                         sx={{ fontSize: "2rem", color: "black" }}
        //                     />
        //                 </Circle>
        //                 <Circle ref={div5Ref}>
        //                     <Icons.googleDocs />
        //                 </Circle>
        //             </div>
        //             <div className="flex flex-row items-center justify-between">
        //                 <Circle ref={div2Ref} >
        //                     <VideocamRounded
        //                         sx={{ fontSize: "2.5rem", color: '#df47aa' }}
        //                     />
        //                 </Circle>
        //                 <Circle ref={div4Ref} className="size-16">
        //                     <Person2
        //                         sx={{ fontSize: "2.5rem", color: "black" }}
        //                     />
        //                 </Circle>
        //                 <Circle ref={div6Ref}>
        //                     <Icons.zapier />
        //                 </Circle>
        //             </div>
        //             <div className="flex flex-row items-center justify-between">
        //                 <Circle ref={div3Ref}>
        //                     <CalendarMonth
        //                         color="primary"
        //                         sx={{ fontSize: "2rem" }}
        //                     />
        //                 </Circle>
        //                 <Circle ref={div7Ref}>
        //                     <Icons.messenger />
        //                 </Circle>
        //             </div>
        //         </div>

        //         <AnimatedBeam
        //             containerRef={containerRef}
        //             fromRef={div1Ref}
        //             toRef={div4Ref}
        //             curvature={-75}
        //             endYOffset={-10}
        //         />
        //         <AnimatedBeam
        //             containerRef={containerRef}
        //             fromRef={div2Ref}
        //             toRef={div4Ref}
        //         />
        //         <AnimatedBeam
        //             containerRef={containerRef}
        //             fromRef={div3Ref}
        //             toRef={div4Ref}
        //             curvature={75}
        //             endYOffset={10}
        //         />
        //         <AnimatedBeam
        //             containerRef={containerRef}
        //             fromRef={div5Ref}
        //             toRef={div4Ref}
        //             curvature={-75}
        //             endYOffset={-10}
        //             reverse
        //         />
        //         <AnimatedBeam
        //             containerRef={containerRef}
        //             fromRef={div6Ref}
        //             toRef={div4Ref}
        //             reverse
        //         />
        //         <AnimatedBeam
        //             containerRef={containerRef}
        //             fromRef={div7Ref}
        //             toRef={div4Ref}
        //             curvature={75}
        //             endYOffset={10}
        //             reverse
        //         />
        //     </div>
        // </Box>

    );
}

const Icons = {
    notion: () => (
        <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M6.017 4.313l55.333 -4.087c6.797 -0.583 8.543 -0.19 12.817 2.917l17.663 12.443c2.913 2.14 3.883 2.723 3.883 5.053v68.243c0 4.277 -1.553 6.807 -6.99 7.193L24.467 99.967c-4.08 0.193 -6.023 -0.39 -8.16 -3.113L3.3 79.94c-2.333 -3.113 -3.3 -5.443 -3.3 -8.167V11.113c0 -3.497 1.553 -6.413 6.017 -6.8z"
                fill="#ffffff"
            />
            <path
                d="M61.35 0.227l-55.333 4.087C1.553 4.7 0 7.617 0 11.113v60.66c0 2.723 0.967 5.053 3.3 8.167l13.007 16.913c2.137 2.723 4.08 3.307 8.16 3.113l64.257 -3.89c5.433 -0.387 6.99 -2.917 6.99 -7.193V20.64c0 -2.21 -0.873 -2.847 -3.443 -4.733L74.167 3.143c-4.273 -3.107 -6.02 -3.5 -12.817 -2.917zM25.92 19.523c-5.247 0.353 -6.437 0.433 -9.417 -1.99L8.927 11.507c-0.77 -0.78 -0.383 -1.753 1.557 -1.947l53.193 -3.887c4.467 -0.39 6.793 1.167 8.54 2.527l9.123 6.61c0.39 0.197 1.36 1.36 0.193 1.36l-54.933 3.307 -0.68 0.047zM19.803 88.3V30.367c0 -2.53 0.777 -3.697 3.103 -3.893L86 22.78c2.14 -0.193 3.107 1.167 3.107 3.693v57.547c0 2.53 -0.39 4.67 -3.883 4.863l-60.377 3.5c-3.493 0.193 -5.043 -0.97 -5.043 -4.083zm59.6 -54.827c0.387 1.75 0 3.5 -1.75 3.7l-2.91 0.577v42.773c-2.527 1.36 -4.853 2.137 -6.797 2.137 -3.107 0 -3.883 -0.973 -6.21 -3.887l-19.03 -29.94v28.967l6.02 1.363s0 3.5 -4.857 3.5l-13.39 0.777c-0.39 -0.78 0 -2.723 1.357 -3.11l3.497 -0.97v-38.3L30.48 40.667c-0.39 -1.75 0.58 -4.277 3.3 -4.473l14.367 -0.967 19.8 30.327v-26.83l-5.047 -0.58c-0.39 -2.143 1.163 -3.7 3.103 -3.89l13.4 -0.78z"
                fill="#000000"
                fillRule="evenodd"
                clipRule="evenodd"
            />
        </svg>
    ),
    googleDocs: () => (
        <svg
            width="47px"
            height="65px"
            viewBox="0 0 47 65"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <path
                    d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L29.375,0 Z"
                    id="path-1"
                />
                <path
                    d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L29.375,0 Z"
                    id="path-3"
                />
                <linearGradient
                    x1="50.0053945%"
                    y1="8.58610612%"
                    x2="50.0053945%"
                    y2="100.013939%"
                    id="linearGradient-5"
                >
                    <stop stopColor="#1A237E" stopOpacity="0.2" offset="0%" />
                    <stop stopColor="#1A237E" stopOpacity="0.02" offset="100%" />
                </linearGradient>
                <path
                    d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L29.375,0 Z"
                    id="path-6"
                />
                <path
                    d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L29.375,0 Z"
                    id="path-8"
                />
                <path
                    d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L29.375,0 Z"
                    id="path-10"
                />
                <path
                    d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L29.375,0 Z"
                    id="path-12"
                />
                <path
                    d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L29.375,0 Z"
                    id="path-14"
                />
                <radialGradient
                    cx="3.16804688%"
                    cy="2.71744318%"
                    fx="3.16804688%"
                    fy="2.71744318%"
                    r="161.248516%"
                    gradientTransform="translate(0.031680,0.027174),scale(1.000000,0.723077),translate(-0.031680,-0.027174)"
                    id="radialGradient-16"
                >
                    <stop stopColor="#FFFFFF" stopOpacity="0.1" offset="0%" />
                    <stop stopColor="#FFFFFF" stopOpacity="0" offset="100%" />
                </radialGradient>
            </defs>
            <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
            >
                <g transform="translate(-451.000000, -463.000000)">
                    <g id="Hero" transform="translate(0.000000, 63.000000)">
                        <g id="Personal" transform="translate(277.000000, 309.000000)">
                            <g id="Docs-icon" transform="translate(174.000000, 91.000000)">
                                <g id="Group">
                                    <g id="Clipped">
                                        <mask id="mask-2" fill="white">
                                            <use xlinkHref="#path-1" />
                                        </mask>
                                        <g id="SVGID_1_" />
                                        <path
                                            d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L36.71875,10.3409091 L29.375,0 Z"
                                            id="Path"
                                            fill="#4285F4"
                                            fillRule="nonzero"
                                            mask="url(#mask-2)"
                                        />
                                    </g>
                                    <g id="Clipped">
                                        <mask id="mask-4" fill="white">
                                            <use xlinkHref="#path-3" />
                                        </mask>
                                        <g id="SVGID_1_" />
                                        <polygon
                                            id="Path"
                                            fill="url(#linearGradient-5)"
                                            fillRule="nonzero"
                                            mask="url(#mask-4)"
                                            points="30.6638281 16.4309659 47 32.8582386 47 17.7272727"
                                        ></polygon>
                                    </g>
                                    <g id="Clipped">
                                        <mask id="mask-7" fill="white">
                                            <use xlinkHref="#path-6" />
                                        </mask>
                                        <g id="SVGID_1_" />
                                        <path
                                            d="M11.75,47.2727273 L35.25,47.2727273 L35.25,44.3181818 L11.75,44.3181818 L11.75,47.2727273 Z M11.75,53.1818182 L29.375,53.1818182 L29.375,50.2272727 L11.75,50.2272727 L11.75,53.1818182 Z M11.75,32.5 L11.75,35.4545455 L35.25,35.4545455 L35.25,32.5 L11.75,32.5 Z M11.75,41.3636364 L35.25,41.3636364 L35.25,38.4090909 L11.75,38.4090909 L11.75,41.3636364 Z"
                                            id="Shape"
                                            fill="#F1F1F1"
                                            fillRule="nonzero"
                                            mask="url(#mask-7)"
                                        />
                                    </g>
                                    <g id="Clipped">
                                        <mask id="mask-9" fill="white">
                                            <use xlinkHref="#path-8" />
                                        </mask>
                                        <g id="SVGID_1_" />
                                        <g id="Group" mask="url(#mask-9)">
                                            <g transform="translate(26.437500, -2.954545)">
                                                <path
                                                    d="M2.9375,2.95454545 L2.9375,16.25 C2.9375,18.6985795 4.90929688,20.6818182 7.34375,20.6818182 L20.5625,20.6818182 L2.9375,2.95454545 Z"
                                                    id="Path"
                                                    fill="#A1C2FA"
                                                    fillRule="nonzero"
                                                />
                                            </g>
                                        </g>
                                    </g>
                                    <g id="Clipped">
                                        <mask id="mask-11" fill="white">
                                            <use xlinkHref="#path-10" />
                                        </mask>
                                        <g id="SVGID_1_" />
                                        <path
                                            d="M4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,4.80113636 C0,2.36363636 1.9828125,0.369318182 4.40625,0.369318182 L29.375,0.369318182 L29.375,0 L4.40625,0 Z"
                                            id="Path"
                                            fillOpacity="0.2"
                                            fill="#FFFFFF"
                                            fillRule="nonzero"
                                            mask="url(#mask-11)"
                                        />
                                    </g>
                                    <g id="Clipped">
                                        <mask id="mask-13" fill="white">
                                            <use xlinkHref="#path-12" />
                                        </mask>
                                        <g id="SVGID_1_" />
                                        <path
                                            d="M42.59375,64.6306818 L4.40625,64.6306818 C1.9828125,64.6306818 0,62.6363636 0,60.1988636 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,60.1988636 C47,62.6363636 45.0171875,64.6306818 42.59375,64.6306818 Z"
                                            id="Path"
                                            fillOpacity="0.2"
                                            fill="#1A237E"
                                            fillRule="nonzero"
                                            mask="url(#mask-13)"
                                        />
                                    </g>
                                    <g id="Clipped">
                                        <mask id="mask-15" fill="white">
                                            <use xlinkHref="#path-14" />
                                        </mask>
                                        <g id="SVGID_1_" />
                                        <path
                                            d="M33.78125,17.7272727 C31.3467969,17.7272727 29.375,15.7440341 29.375,13.2954545 L29.375,13.6647727 C29.375,16.1133523 31.3467969,18.0965909 33.78125,18.0965909 L47,18.0965909 L47,17.7272727 L33.78125,17.7272727 Z"
                                            id="Path"
                                            fillOpacity="0.1"
                                            fill="#1A237E"
                                            fillRule="nonzero"
                                            mask="url(#mask-15)"
                                        />
                                    </g>
                                </g>
                                <path
                                    d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L29.375,0 Z"
                                    id="Path"
                                    fill="url(#radialGradient-16)"
                                    fillRule="nonzero"
                                />
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    ),
    zapier: () => (
        <svg
            width="105"
            height="28"
            viewBox="0 0 244 66"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M57.1877 45.2253L57.1534 45.1166L78.809 25.2914V15.7391H44.0663V25.2914H64.8181L64.8524 25.3829L43.4084 45.2253V54.7775H79.1579V45.2253H57.1877Z"
                fill="#201515"
            />
            <path
                d="M100.487 14.8297C96.4797 14.8297 93.2136 15.434 90.6892 16.6429C88.3376 17.6963 86.3568 19.4321 85.0036 21.6249C83.7091 23.8321 82.8962 26.2883 82.6184 28.832L93.1602 30.3135C93.5415 28.0674 94.3042 26.4754 95.4482 25.5373C96.7486 24.5562 98.3511 24.0605 99.9783 24.136C102.118 24.136 103.67 24.7079 104.634 25.8519C105.59 26.9959 106.076 28.5803 106.076 30.6681V31.7091H95.9401C90.7807 31.7091 87.0742 32.8531 84.8206 35.1411C82.5669 37.429 81.442 40.4492 81.4458 44.2014C81.4458 48.0452 82.5707 50.9052 84.8206 52.7813C87.0704 54.6574 89.8999 55.5897 93.3089 55.5783C97.5379 55.5783 100.791 54.1235 103.067 51.214C104.412 49.426 105.372 47.3793 105.887 45.2024H106.27L107.723 54.7546H117.275V30.5651C117.275 25.5659 115.958 21.6936 113.323 18.948C110.688 16.2024 106.409 14.8297 100.487 14.8297ZM103.828 44.6475C102.312 45.9116 100.327 46.5408 97.8562 46.5408C95.8199 46.5408 94.4052 46.1843 93.6121 45.4712C93.2256 45.1338 92.9182 44.7155 92.7116 44.246C92.505 43.7764 92.4043 43.2671 92.4166 42.7543C92.3941 42.2706 92.4702 41.7874 92.6403 41.3341C92.8104 40.8808 93.071 40.4668 93.4062 40.1174C93.7687 39.7774 94.1964 39.5145 94.6633 39.3444C95.1303 39.1743 95.6269 39.1006 96.1231 39.1278H106.093V39.7856C106.113 40.7154 105.919 41.6374 105.527 42.4804C105.134 43.3234 104.553 44.0649 103.828 44.6475Z"
                fill="#201515"
            />
            <path
                d="M175.035 15.7391H163.75V54.7833H175.035V15.7391Z"
                fill="#201515"
            />
            <path
                d="M241.666 15.7391C238.478 15.7391 235.965 16.864 234.127 19.1139C232.808 20.7307 231.805 23.1197 231.119 26.2809H230.787L229.311 15.7391H219.673V54.7775H230.959V34.7578C230.959 32.2335 231.55 30.2982 232.732 28.9521C233.914 27.606 236.095 26.933 239.275 26.933H243.559V15.7391H241.666Z"
                fill="#201515"
            />
            <path
                d="M208.473 17.0147C205.839 15.4474 202.515 14.6657 198.504 14.6695C192.189 14.6695 187.247 16.4675 183.678 20.0634C180.108 23.6593 178.324 28.6166 178.324 34.9352C178.233 38.7553 179.067 42.5407 180.755 45.9689C182.3 49.0238 184.706 51.5592 187.676 53.2618C190.665 54.9892 194.221 55.8548 198.344 55.8586C201.909 55.8586 204.887 55.3095 207.278 54.2113C209.526 53.225 211.483 51.6791 212.964 49.7211C214.373 47.7991 215.42 45.6359 216.052 43.3377L206.329 40.615C205.919 42.1094 205.131 43.4728 204.041 44.5732C202.942 45.6714 201.102 46.2206 198.521 46.2206C195.451 46.2206 193.163 45.3416 191.657 43.5837C190.564 42.3139 189.878 40.5006 189.575 38.1498H216.201C216.31 37.0515 216.367 36.1306 216.367 35.387V32.9561C216.431 29.6903 215.757 26.4522 214.394 23.4839C213.118 20.7799 211.054 18.5248 208.473 17.0147ZM198.178 23.9758C202.754 23.9758 205.348 26.2275 205.962 30.731H189.775C190.032 29.2284 190.655 27.8121 191.588 26.607C193.072 24.8491 195.268 23.972 198.178 23.9758Z"
                fill="#201515"
            />
            <path
                d="M169.515 0.00366253C168.666 -0.0252113 167.82 0.116874 167.027 0.421484C166.234 0.726094 165.511 1.187 164.899 1.77682C164.297 2.3723 163.824 3.08658 163.512 3.87431C163.2 4.66204 163.055 5.50601 163.086 6.35275C163.056 7.20497 163.201 8.05433 163.514 8.84781C163.826 9.64129 164.299 10.3619 164.902 10.9646C165.505 11.5673 166.226 12.0392 167.02 12.3509C167.814 12.6626 168.663 12.8074 169.515 12.7762C170.362 12.8082 171.206 12.6635 171.994 12.3514C172.782 12.0392 173.496 11.5664 174.091 10.963C174.682 10.3534 175.142 9.63077 175.446 8.83849C175.75 8.04621 175.89 7.20067 175.859 6.35275C175.898 5.50985 175.761 4.66806 175.456 3.88115C175.151 3.09424 174.686 2.37951 174.09 1.78258C173.493 1.18565 172.779 0.719644 171.992 0.414327C171.206 0.109011 170.364 -0.0288946 169.521 0.00938803L169.515 0.00366253Z"
                fill="#201515"
            />
            <path
                d="M146.201 14.6695C142.357 14.6695 139.268 15.8764 136.935 18.2902C135.207 20.0786 133.939 22.7479 133.131 26.2981H132.771L131.295 15.7563H121.657V66H132.942V45.3054H133.354C133.698 46.6852 134.181 48.0267 134.795 49.3093C135.75 51.3986 137.316 53.1496 139.286 54.3314C141.328 55.446 143.629 56.0005 145.955 55.9387C150.68 55.9387 154.277 54.0988 156.748 50.419C159.219 46.7392 160.455 41.6046 160.455 35.0153C160.455 28.6509 159.259 23.6689 156.869 20.0691C154.478 16.4694 150.922 14.6695 146.201 14.6695ZM147.345 42.9602C146.029 44.8668 143.97 45.8201 141.167 45.8201C140.012 45.8735 138.86 45.6507 137.808 45.1703C136.755 44.6898 135.832 43.9656 135.116 43.0574C133.655 41.2233 132.927 38.7122 132.931 35.5243V34.7807C132.931 31.5432 133.659 29.0646 135.116 27.3448C136.572 25.625 138.59 24.7747 141.167 24.7937C144.02 24.7937 146.092 25.6994 147.385 27.5107C148.678 29.322 149.324 31.8483 149.324 35.0896C149.332 38.4414 148.676 41.065 147.356 42.9602H147.345Z"
                fill="#201515"
            />
            <path d="M39.0441 45.2253H0V54.789H39.0441V45.2253Z" fill="#FF4F00" />
        </svg>
    ),
    messenger: () => (
        <svg
            width="100"
            height="100"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
        >
            <radialGradient
                id="8O3wK6b5ASW2Wn6hRCB5xa_YFbzdUk7Q3F8_gr1"
                cx="11.087"
                cy="7.022"
                r="47.612"
                gradientTransform="matrix(1 0 0 -1 0 50)"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset=".079" stopColor="#2982ff"></stop>
                <stop offset=".428" stopColor="#6d53ff"></stop>
                {/* <stop offset=".946" stopColor="#ff6257"></stop> */}
            </radialGradient>
            <path
                fill="url(#8O3wK6b5ASW2Wn6hRCB5xa_YFbzdUk7Q3F8_gr1)"
                d="M44,23.5C44,34.27,35.05,43,24,43c-1.651,0-3.25-0.194-4.784-0.564	c-0.465-0.112-0.951-0.069-1.379,0.145L13.46,44.77C12.33,45.335,11,44.513,11,43.249v-4.025c0-0.575-0.257-1.111-0.681-1.499	C6.425,34.165,4,29.11,4,23.5C4,12.73,12.95,4,24,4S44,12.73,44,23.5z"
            />
            <path
                d="M34.992,17.292c-0.428,0-0.843,0.142-1.2,0.411l-5.694,4.215	c-0.133,0.1-0.28,0.15-0.435,0.15c-0.15,0-0.291-0.047-0.41-0.136l-3.972-2.99c-0.808-0.601-1.76-0.918-2.757-0.918	c-1.576,0-3.025,0.791-3.876,2.116l-1.211,1.891l-4.12,6.695c-0.392,0.614-0.422,1.372-0.071,2.014	c0.358,0.654,1.034,1.06,1.764,1.06c0.428,0,0.843-0.142,1.2-0.411l5.694-4.215c0.133-0.1,0.28-0.15,0.435-0.15	c0.15,0,0.291,0.047,0.41,0.136l3.972,2.99c0.809,0.602,1.76,0.918,2.757,0.918c1.576,0,3.025-0.791,3.876-2.116l1.211-1.891	l4.12-6.695c0.392-0.614,0.422-1.372,0.071-2.014C36.398,17.698,35.722,17.292,34.992,17.292L34.992,17.292z"
                opacity=".05"
            />
            <path
                d="M34.992,17.792c-0.319,0-0.63,0.107-0.899,0.31l-5.697,4.218	c-0.216,0.163-0.468,0.248-0.732,0.248c-0.259,0-0.504-0.082-0.71-0.236l-3.973-2.991c-0.719-0.535-1.568-0.817-2.457-0.817	c-1.405,0-2.696,0.705-3.455,1.887l-1.21,1.891l-4.115,6.688c-0.297,0.465-0.32,1.033-0.058,1.511c0.266,0.486,0.787,0.8,1.325,0.8	c0.319,0,0.63-0.107,0.899-0.31l5.697-4.218c0.216-0.163,0.468-0.248,0.732-0.248c0.259,0,0.504,0.082,0.71,0.236l3.973,2.991	c0.719,0.535,1.568,0.817,2.457,0.817c1.405,0,2.696-0.705,3.455-1.887l1.21-1.891l4.115-6.688c0.297-0.465,0.32-1.033,0.058-1.511	C36.051,18.106,35.531,17.792,34.992,17.792L34.992,17.792z"
                opacity=".07"
            />
            <path
                fill="#ffffff"
                d="M34.394,18.501l-5.7,4.22c-0.61,0.46-1.44,0.46-2.04,0.01L22.68,19.74	c-1.68-1.25-4.06-0.82-5.19,0.94l-1.21,1.89l-4.11,6.68c-0.6,0.94,0.55,2.01,1.44,1.34l5.7-4.22c0.61-0.46,1.44-0.46,2.04-0.01	l3.974,2.991c1.68,1.25,4.06,0.82,5.19-0.94l1.21-1.89l4.11-6.68C36.434,18.901,35.284,17.831,34.394,18.501z"
            />
        </svg>
    ),
};
