'use client';
import { useEffect, useRef, useState } from "react";
import anime from "animejs";
import { useSession } from "next-auth/react";

export default function Banner() {

    const {data:session} = useSession();

    const wrapperRef = useRef(null);
    const [columns, setColumns] = useState(0);
    const [rows, setRows] = useState(0);
    const [toggled, setToggled] = useState(false);

    useEffect(() => {
        const createGrid = () => {
            if (!wrapperRef.current) return;

            const wrapper = wrapperRef.current;
            const size = document.body.clientWidth > 800 ? 100 : 50;

            const cols = Math.floor(document.body.clientWidth / size);
            const rows = Math.floor(document.body.clientHeight / size);

            setColumns(cols);
            setRows(rows);

            wrapper.style.setProperty("--columns", `${cols}`);
            wrapper.style.setProperty("--rows", `${rows}`);
        };

        createGrid();
        window.addEventListener("resize", createGrid);

        return () => {
            window.removeEventListener("resize", createGrid);
        };
    }, []);

    const handleOnClick = (index) => {
        setToggled((prev) => !prev);

        anime({
            targets: ".tile",
            opacity: toggled ? 0 : 1,
            delay: anime.stagger(50, {
                grid: [columns, rows],
                from: index,
            }),
        });
    };

    const tiles = Array.from({ length: columns * rows }, (_, index) => (
        <div
            key={index}
            className="tile"
            style={{ opacity: toggled ? 0 : 1 }}
            onClick={() => handleOnClick(index)}
        />
    ));

    return (
        <>  
            <div className="w-full my-5 relative overflow-hidden rounded-lg">
                <div
                    className="rounded-lg p-5 text-white text-center relative flex flex-col items-center justify-center"
                    style={{ minHeight: "50vh", zIndex:'50', pointerEvents:'none' }}
                >
                    <h2 className="font-semibold text-2xl">Welcome {session?session.user.firstName:''} to</h2>
                    <h1 className="text-5xl uppercase tracking-widest font-bold">hackathon</h1>
                </div>
                <div className="anim-canvas"></div>
                <div id="tiles" ref={wrapperRef} className="tiles-wrapper">
                    {tiles}
                </div>
            </div>
            
        </>
    );
}
