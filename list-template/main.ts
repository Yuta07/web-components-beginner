class ListTemplate extends HTMLElement {
  constructor() {
    super();

    let template = document.getElementById("list-template");

    const templateContent = template?.content;

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(templateContent.cloneNode(true));
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

  attributeChangedCallback(name, oldValue, newValue) {
    console.log("Custom element attributes changed.");
  }
}

customElements.define("list-template-card", ListTemplate);
