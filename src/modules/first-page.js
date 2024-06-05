import { LitElement, css, html } from 'lit'
export class firstPage extends LitElement {

    render(){
        return html`
        <h1>1</h1>
        `
    }

}

customElements.define('page-one', firstPage);

