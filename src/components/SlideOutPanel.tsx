import { createEffect, createSignal, type ParentComponent } from "solid-js";
import * as styles from "./SlideOutPanel.css";
import cx from "classnames";

type SlideOutPanelProps = {
  closeOnClickSelector?: string;
  class?: string;
};

const SlideOutPanel: ParentComponent<SlideOutPanelProps> = ({
  children,
  closeOnClickSelector,
  class: className,
}) => {
  const [isOpen, setIsOpen] = createSignal(false);

  const toggle = () => setIsOpen(!isOpen());
  const close = () => setIsOpen(false);

  let panel!: HTMLDivElement;


  createEffect<NodeListOf<Element>>((previousElements) => {
    if (previousElements) {
      previousElements.forEach((el) => {
        el.removeEventListener("click", close);
      });
    }
    
    const childrenToCloseOnClick = panel?.querySelectorAll(closeOnClickSelector ?? "")

    childrenToCloseOnClick.forEach((el) => {
      el.addEventListener("click", close);
    });

    return childrenToCloseOnClick;
  });

  return (
    <>
      <div
        class={cx(styles.panelOverlay, isOpen() && "open")}
        onClick={close}
      ></div>
      <div class={cx(styles.panel, className)} ref={panel}>
        {children}
        <button
          class={styles.button}
          aria-label="Toggle slide-out panel"
          onClick={(e) => {
            e.stopPropagation();
            toggle();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ionicon"
            viewBox="0 0 512 512"
            fill="currentColor"
          >
            <path d="M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z"></path>
          </svg>
        </button>
      </div>
    </>
  );
};

export default SlideOutPanel;
