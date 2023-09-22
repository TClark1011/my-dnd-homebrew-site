<script lang="ts">
  import * as styles from "./SlideOutPanel.css";
  import cx from "classnames";

  let className: string | undefined = undefined;
  export { className as class };

  /**
   * If a child element that matches this selector is clicked,
   * we close the panel.
   */
  export let closeOnClickSelector: string | undefined = undefined;

  let isOpen = false;

  let panel: HTMLDivElement | undefined;

  const onClose = () => {
    isOpen = false;
  };

  const onToggle = () => {
    console.log("toggling stuff");
    isOpen = !isOpen;
  };

  $: {
    console.log({
      panel,
      closeOnClickSelector,
      childrenToCloseOn: panel?.querySelectorAll(closeOnClickSelector ?? ""),
    });
    panel?.querySelectorAll(closeOnClickSelector ?? "").forEach((element) => {
      element.addEventListener("click", onClose);
    });
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class={cx(styles.panelOverlay, isOpen && "open")} on:click={onClose}></div>
<div class={cx(styles.panel, className)} bind:this={panel}>
  <slot />
  <button
    class={styles.button}
    aria-label="Toggle slide-out panel"
    on:click={(e) => {
      e.stopPropagation();
      onToggle();
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="ionicon"
      viewBox="0 0 512 512"
      fill="currentColor"
    >
      <path
        d="M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z"
      >
      </path>
    </svg>
  </button>
</div>
