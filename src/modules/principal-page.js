import { LitElement, css, html } from 'lit'
export class fourPage extends LitElement {


    render(){
        return html`
        <h1>Tercer Filtro<h1>
        <div class="container">
        <button class="button" id="one"> primer ejercicio</button>
        <button class="button" id="dos"> segundo ejercicio</button>
        <button class="button" id="tres"> tercer ejercicio</button>
        <button class="button" id="cuatro"> cuarto ejercicio</button>
        </div>
        `}

        firstUpdated(){
            const buttonDiv=this.shadowRoot.querySelector('.container')
            buttonDiv.addEventListener('click',(e)=>{
                const button=e.target.closest('.button')
                const newPage =`<page-${button.id}></page-${button.id}>`
                this.parentNode.insertAdjacentHTML('beforeend',newPage)
                this.parentNode.removeChild(this)
            })
        }

}

customElements.define('page-principal', fourPage);
