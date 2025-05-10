"use client";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import moment from "moment";

interface Props {
    data: {
        [key: string]: Date[];
    };
}

export function Board({ data }: Readonly<Props>) {
    return (
        <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader className="bg-gray-200">
                <TableRow>
                    <TableHead className="w-[130px]">Date</TableHead>
                    <TableHead>Start Houre</TableHead>
                    <TableHead>Start Lunch</TableHead>
                    <TableHead>End Lunch</TableHead>
                    <TableHead>End Houre</TableHead>
                    <TableHead className="text-right">Total</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {Object.entries(data).map(([key, value], index) => (
                    <TableRow key={index}>
                        <TableCell className="font-medium">{key}</TableCell>
                        {[0, 1, 2, 3].map((elm) => (
                            <TableCell key={elm}>
                                {value[elm]
                                    ? moment(value[elm]).format("HH:mm")
                                    : "N/A"}
                            </TableCell>
                        ))}
                        <TableCell className="text-right">
                            {moment
                                .duration(
                                    moment(value[3]).diff(moment(value[0])),
                                )
                                .subtract(
                                    moment(value[2]).diff(moment(value[1])),
                                )
                                .asHours()
                                .toFixed(1)}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
