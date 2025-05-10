"use client";

import { Button } from "@/components/ui/button";

export default function HourSet() {
    const [dayData, setDayData] = useState<object>({});
    return (
        <div className="m-6 flex justify-center space-x-4">
            <Button variant="outline">Start of the day</Button>
            <Button variant="outline">Start of lunch pause</Button>
            <Button variant="outline">End of lunch day</Button>
            <Button variant="outline">End of the day</Button>
        </div>
    );
}
