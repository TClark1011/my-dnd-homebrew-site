import { chainInitiativeActions } from "$/features/chain-initiative-tracker/chainInitiativeTrackerState";
import { createForm, reset, zodForm } from "@modular-forms/solid";
import { z } from "astro/zod";
import { createEffect, type Component } from "solid-js";
import * as styles from "./CreateNewCharacter.css";

const newCharacterFormSchema = z.object({
  characterName: z.string().nonempty(),
  health: z.number().min(1).int(),
});

const CreateNewCharacter: Component = () => {
  const [form, { Form, Field }] = createForm<
    z.infer<typeof newCharacterFormSchema>
  >({
    validate: zodForm(newCharacterFormSchema),
    initialValues: {
      characterName: "",
      health: undefined,
    },
  });

  return (
    <Form
      onSubmit={(data) => {
        chainInitiativeActions.addCharacter({
          health: data.health,
          name: data.characterName,
          side: "good",
        });
        reset(form);
      }}
      class={styles.form}
    >
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
            {field.error && <div>{field.error}</div>}
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
            {field.error && <div>{field.error}</div>}
          </div>
        )}
      </Field>
      <button class={styles.submitButton} type="submit">
        Add Character
      </button>
    </Form>
  );
};

export default CreateNewCharacter;
