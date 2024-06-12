import { LitElement, css, html } from 'lit'
export class thirdPage extends LitElement {

    render(){
        return html`
        <h1>3</h1>
        `
    }
}

customElements.define('dinamic-table', thirdPage);

