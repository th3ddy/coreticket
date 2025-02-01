"use server";
import { revalidatePath } from "next/cache";

export async function createActivityAction(_, formData) {
  const name = formData.get("name");
  const unit = formData.get("unit");
  const batch = Number(formData.get("batch"));
  const description = formData.get("description");
  const createddate = Date(formData.get("createddate"));
  const completed = formData.get("completed");
  const notes = formData.get("notes");

  await fetch("https://v1.appbackend.io/v1/rows/UBmuxwe7fuX0", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([
      { name, unit, batch, description, createddate, completed, notes },
    ]),
  });
  revalidatePath("/");
}
