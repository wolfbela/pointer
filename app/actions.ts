"use server";

enum TimeState {
    start_day,
    start_lunch,
    end_lunch,
    end_day,
}

export async function enterDate(time_state: TimeState) {}

export async function deleteDate() {}
