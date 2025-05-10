"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

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
        [key: string]: {
            start_day: string;
            start_lunch: string;
            end_lunch: string;
            end_day: string;
        };
    };
}

export default function HourSet({ data }: Readonly<Props>) {
    const [dayData, setDayData] = useState(data);
    const [buttonAvailable, setButtonAvalaible] = useState(0);
    async function setTime(time_state: TimeState) {
        await enterTime(time_state);
        toast(`${time_state} at ${moment().format("HH:mm")}`, {
            description: `Set for the day ${moment().format("YYYY/MM/DD")}`,
            descriptionClassName: "text-black",
            style: {
                backgroundColor: "#6afea0",
            },
        });
    }

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
