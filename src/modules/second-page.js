import { LitElement, css, html } from 'lit'
export class secondPage extends LitElement {
    render(){
        return html`
        <h1>2</h1>
        `
    }

}

customElements.define('page-dos', secondPage);
