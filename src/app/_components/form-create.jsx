"use client";

import { useActionState } from "react";
import {
  createActivity,
  createActivityAction,
} from "../_actions/action-create";

export const FormCreate = () => {
  const [state, formAction, pending] = useActionState(
    createActivityAction,
    null
  );

  return (
    <form className="space-y-2" action={formAction}>
      <section>
        <h3 className="text-lg font-bold">Add New Ticket</h3>
        <p>Input your error batch coretax</p>
      </section>
      <input name="name" placeholder="Input your name" className="capitalize" />
      <input name="unit" placeholder="Input your unit" className="capitalize" />
      <input name="batch" type="number" placeholder="Input the error batch" />
      <input
        name="description"
        placeholder="Input error message"
        className="capitalize"
      />
      <input name="createddate" type="hidden" value="Date()" />
      <input name="completed" value="N" type="hidden" className="capitalize" />
      <input name="notes" value="" type="hidden" className="capitalize" />
      <button disabled={pending}>{pending ? "SAVING..." : "SAVE"}</button>
    </form>
  );
};
