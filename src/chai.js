import { use } from 'chai';
import chaiDom from 'chai-dom';

function importAxe() {
  return new Promise((resolve, reject) => {
    const axeScript = document.createElement('script');

    axeScript.src = 'https://unpkg.com/axe-core@4.1.4/axe.js';

    axeScript.onload = () => {
      if (window.axe) {
        resolve();
      } else {
        reject(new Error(`window.axe is ${window.axe}`));
      }
    };

    document.head.appendChild(axeScript);
  });
}

function importChaiA11y() {
  return new Promise((resolve, reject) => {
    const chaiA11yScript = document.createElement('script');

    chaiA11yScript.type = 'module';

    chaiA11yScript.innerHTML = `
      import { chaiA11yAxe } from "https://unpkg.com/chai-a11y-axe@1.3.1/index.js";
      window.chaiA11yAxe = chaiA11yAxe
    `;

    chaiA11yScript.onload = () => {
      if (window.chaiA11yAxe) {
        resolve();
      } else {
        reject(new Error(`window.chaiA11yAxe is ${window.chaiA11yAxe}`));
      }
    };

    document.head.appendChild(chaiA11yScript);
  });
}

export default async function loadChai() {
  await importAxe();

  await importChaiA11y();

  return use(window.chaiA11yAxe).use(chaiDom);
}


