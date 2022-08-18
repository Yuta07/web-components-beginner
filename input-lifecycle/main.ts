class InputLifeCycle extends HTMLElement {
  static get observedAttributes() {
    return ["c", "l"];
  }

  constructor() {
    super();

    let template = document.getElementById("input-lifecycle-template");
    const templateContent = template?.content;

    const shadow = this.attachShadow({ mode: "open" });

    let style = document.createElement("style");
    style.textContent = `
      ::slotted(p) {
        font-size: 14px;
        color: red;
      }

      ::slotted(label) {
        font-size: 14px;
      }
    `;

    shadow.appendChild(style);
    shadow.appendChild(templateContent.cloneNode(true));
  }

  connectedCallback() {
    console.log("Custom element added to page.");

    updateStyle(this);
  }

  disconnectedCallback() {
    console.log("Custom element removed from page.");
  }

  adoptedCallback() {
    console.log("Custom element moved to new page.");
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log("Custom element attributes changed.");

    console.log(name, oldValue, newValue);
  }
}

customElements.define("input-with-lifecycle", InputLifeCycle);

function updateStyle(elem) {
  const shadow = elem.shadowRoot;

  const style = shadow?.querySelector("style");

  if (style == null) return;

  style.textContent += `
    ::slotted(input) {
      padding: ${elem.getAttribute("px")}px ${elem.getAttribute(
    "py"
  )}px !important;
      border: 1px solid #b2b2b2;
      border-radius: 4px;
      font-size: 16px
    }
  `;
}

const input = document.querySelector(".input-lifecycle");
const error = document.querySelector(".error");

input.onblur = function () {
  const inputValue = input?.value;

  if (!inputValue) {
    input.style.borderColor = "red";
    error.innerHTML = "入力してください";
    error.style.display = "block";
    error.style.marginTop = "4px";
  } else {
    input.style.borderColor = "#b2b2b2";
    error.innerHTML = "";
    error.style = "";
  }
};
