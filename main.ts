class BeginnerWebComponwnt extends HTMLElement {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return ["c", "l"];
  }

  connectedCallback() {
    console.log("Custom element added to page.");
  }

  disconnectedCallback() {
    console.log("Custom element removed from page.");
  }

  adoptedCallback() {
    console.log("Custom element moved to new page.");
  }

  attributeChangedCallback(name: string, oldValue: any, newValue: any) {
    console.log("Custom element attributes changed.");
  }
}
