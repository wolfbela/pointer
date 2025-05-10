"use client";
import { useEffect, useState } from "react";
import { loadData } from "./actions";
import HourSet from "./hoursSet";
import { Board } from "./board";

export default function Home() {
    const [data, setData] = useState<{
        [key: string]: Date[];
    }>({});

    useEffect(() => {
        const fetchData = async () => {
            setData(await loadData());
        };

        fetchData();
    });

    return (
        <div className="h-full flex flex-col">
            <HourSet data={data} setDataAction={setData} />
            <Board data={data} />
        </div>
    );
}
