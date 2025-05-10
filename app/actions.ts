"use server";
import { Dispatch, SetStateAction } from "react";
import { TimeState } from "./types";
import fs from "fs/promises";
import path from "path";
import moment from "moment";

export async function enterTime(
    time_state: TimeState,
    data: { [key: string]: string[] },
    key: string,
) {
    const new_data = {
        ...data,
        [key]: [...data[key], moment().format("HH:mm")],
    };
    saveData(new_data);

    return new_data;
}

export async function deleteTime(
    time_state: TimeState,
    setData: Dispatch<
        SetStateAction<{
            [key: string]: [Date];
        }>
    >,
) {}

async function saveData(data: { [key: string]: string[] }) {
    const data_to_write = JSON.stringify(data);
    const file_path = path.join(process.cwd(), "public", "data.json");
    await fs.writeFile(file_path, data_to_write);
}

export async function loadData() {
    const file_path = path.join(process.cwd(), "public", "data.json");
    const raw = await fs.readFile(file_path, "utf8");
    if (raw) return JSON.parse(raw);

    return null;
}
