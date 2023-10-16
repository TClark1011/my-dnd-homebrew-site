import { chainInitiativeActions } from "~chain-initiative-tracker/chainInitiativeTrackerState";
import { createForm, reset, zodForm } from "@modular-forms/solid";
import { z } from "astro/zod";
import { type Component } from "solid-js";
import * as styles from "./CreateNewCharacter.css";
import {
  chainInitiativeSideSchema,
  type ChainInitiativeTrackerSide,
} from "~chain-initiative-tracker/types";
import { keyboardCommand, titleCase } from "$/utils";
import { emulateTab } from "$/lib/emulate-tab";
import type { HTMLTag } from "astro/types";

const DEFAULT_CHAIN_INITIATIVE_SIDE: ChainInitiativeTrackerSide = "bad";

const chainInitiativeOptions: ChainInitiativeTrackerSide[] = [
  ...chainInitiativeSideSchema.options,
].sort((a) => (a === DEFAULT_CHAIN_INITIATIVE_SIDE ? -1 : 1));

const newCharacterFormSchema = z.object({
  characterName: z.string().nonempty("Character name is required"),
  health: z
    .number({
      invalid_type_error: "Health is required",
    })
    .min(0, "Cannot be negative")
    .int(),
  side: chainInitiativeSideSchema,
});

const CreateNewCharacter: Component = () => {
  const [form, { Form, Field }] = createForm<
    z.infer<typeof newCharacterFormSchema>
  >({
    validate: zodForm(newCharacterFormSchema),
    initialValues: {
      characterName: "",
      health: 0,
      side: DEFAULT_CHAIN_INITIATIVE_SIDE,
    },
  });

  let firstInputElement: HTMLInputElement | undefined = undefined;

  return (
    <Form
      onSubmit={(data) => {
        chainInitiativeActions.addCharacter({
          health: data.health,
          name: data.characterName,
          side: data.side,
        });
        reset(form);
        firstInputElement?.focus();
      }}
      class={styles.form}
      onKeyDown={(event) => {
        keyboardCommand(event, "Enter", (e) => {
          const currentFocusedElement = document.activeElement;
          const currentFocusedElementTag =
            currentFocusedElement?.tagName?.toLowerCase() as HTMLTag | null;

          if (currentFocusedElementTag && currentFocusedElementTag === "button")
            return;

          e.preventDefault();
          emulateTab();
        });
      }}
    >
      <div class={styles.fields}>
        <Field type="string" name="characterName">
          {(field, props) => (
            <div class={styles.fieldWrapper}>
              <label for="name" class={styles.fieldLabel}>
                Character Name
              </label>
              <input
                id="name"
                class={styles.fieldInput}
                placeholder="Character"
                value={field.value ?? ""}
                {...props}
                ref={(e) => {
                  firstInputElement = e;
                  props.ref(e);
                }}
              />
              {field.error && (
                <div class={styles.fieldError}>{field.error}</div>
              )}
            </div>
          )}
        </Field>
        <Field type="number" name="health">
          {(field, props) => (
            <div class={styles.fieldWrapper}>
              <label for="health" class={styles.fieldLabel}>
                Health
              </label>
              <input
                id="health"
                class={styles.fieldInput}
                placeholder="Health"
                type="number"
                value={field.value ?? ""}
                {...props}
              />
              {field.error && (
                <div class={styles.fieldError}>{field.error}</div>
              )}
            </div>
          )}
        </Field>
        <Field type="string" name="side">
          {(field, props) => (
            <div class={styles.fieldWrapper}>
              <label for="side" class={styles.fieldLabel}>
                Side
              </label>
              <select
                value={field.value ?? ""}
                class={styles.fieldInput}
                classList={{
                  [styles.fieldInput]: true,
                  [styles.fieldSelectPlaceholder]: !field.value,
                }}
                {...props}
                id="side"
              >
                {chainInitiativeOptions.map((option) => (
                  <option value={option}>{titleCase(option)}</option>
                ))}
              </select>
              {field.error && (
                <div class={styles.fieldError}>{field.error}</div>
              )}
            </div>
          )}
        </Field>
      </div>
      <button class={styles.submitButton}>Add Character</button>
    </Form>
  );
};

export default CreateNewCharacter;
