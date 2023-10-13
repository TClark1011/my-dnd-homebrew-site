import { chainInitiativeActions } from "$/features/chain-initiative-tracker/chainInitiativeTrackerState";
import { createForm, reset, zodForm } from "@modular-forms/solid";
import { z } from "astro/zod";
import { type Component } from "solid-js";
import * as styles from "./CreateNewCharacter.css";
import { chainInitiativeSideSchema } from "~chain-initiative-tracker/types";
import { titleCase } from "$/utils";

const newCharacterFormSchema = z.object({
  characterName: z.string().nonempty("Character name is required"),
  health: z
    .number({
      invalid_type_error: "Health is required",
    })
    .min(1)
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
      health: undefined,
      side: undefined,
    },
  });

  return (
    <Form
      onSubmit={(data) => {
        chainInitiativeActions.addCharacter({
          health: data.health,
          name: data.characterName,
          side: data.side,
        });
        reset(form);
      }}
      class={styles.form}
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
                <option value="" hidden disabled>
                  Side
                </option>
                {chainInitiativeSideSchema.options.map((option) => (
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
      <button class={styles.submitButton} type="submit">
        Add Character
      </button>
    </Form>
  );
};

export default CreateNewCharacter;
