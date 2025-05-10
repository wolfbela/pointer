import { loadData } from "./actions";
import HourSet from "./hoursSet";

export default async function Home() {
    const data = await loadData();

    return (
        <div className="h-full flex flex-col">
            <HourSet data={data} />
        </div>
    );
}
