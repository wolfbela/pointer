"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

import { enterTime } from "./actions";
import { TimeState } from "./types";
import { toast } from "sonner";
import moment from "moment";

const button_types = [
    TimeState.start_day,
    TimeState.start_lunch,
    TimeState.end_lunch,
    TimeState.end_day,
];

interface Props {
    data: {
        [key: string]: Date[];
    };
    setDataAction: (data: { [key: string]: Date[] }) => void;
}

export default function HourSet({ data, setDataAction }: Readonly<Props>) {
    const today = moment().format("YYYY/MM/DD");
    const [buttonAvailable, setButtonAvalaible] = useState(0);

    useEffect(() => {
        setButtonAvalaible(data[today] ? data[today].length : 0);
    }, [data, today]);

    async function setTime(time_state: TimeState) {
        setDataAction(await enterTime(time_state, data, today));
        toast(`${time_state} at ${moment().format("HH:mm")}`, {
            description: (
                <span className="text-black">Set for the day {today}</span>
            ),
            className: "!bg-lime-200",
        });
    }

    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <div className="m-6 flex justify-center space-x-4">
            {button_types.map((elm, index) => (
                <Button
                    key={elm}
                    variant="outline"
                    className="cursor-pointer"
                    onClick={async () => {
                        await setTime(elm);
                        setButtonAvalaible((data) => data + 1);
                    }}
                    disabled={buttonAvailable != index}
                >
                    {elm}
                </Button>
            ))}
        </div>
    );
}
