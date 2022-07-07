class LinkTextStandard extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    const wrapper = document.createElement("p");
    wrapper.setAttribute("class", "wrapper");
    wrapper.innerText = "Here we will add a link to the";

    const link = wrapper.appendChild(document.createElement("a"));
    link.setAttribute("class", "anchor");
    link.setAttribute("tabindex", "0");

    let hrefText = "";
    if (this.hasAttribute("href")) {
      hrefText = this.getAttribute("href") || "";
    } else {
      hrefText = "https://www.mozilla.org/";
    }

    link.setAttribute("href", hrefText);

    let anchorText = "";
    if (this.hasAttribute("anchor")) {
      anchorText = this.getAttribute("anchor") || "";
    } else {
      anchorText = "Mozilla homepage";
    }

    link.innerHTML = anchorText;

    const style = document.createElement("style");
    style.textContent = `
      .wrapper {}

      .link {}
    `;

    shadow.append(style);
    shadow.append(wrapper);
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

  attributeChangedCallback(name, oldValue, newValue) {
    console.log("Custom element attributes changed.");
  }
}

customElements.define("link-text-standard", LinkTextStandard);
