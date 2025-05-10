"use server";
import { Dispatch, SetStateAction } from "react";
import { TimeState } from "./types";
import fs from "fs/promises";
import path from "path";

export async function enterTime(
    time_state: TimeState,
    setData: Dispatch<SetStateAction<object>>,
) {}

export async function deleteTime(
    time_state: TimeState,
    setData: Dispatch<SetStateAction<object>>,
) {}

async function saveData(data: object) {
    const data_to_write = JSON.stringify(data);
    const file_path = path.join(process.cwd(), "public", "data.json");
    await fs.writeFile(file_path, data_to_write);
}
