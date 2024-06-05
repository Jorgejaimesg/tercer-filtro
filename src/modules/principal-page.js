import { LitElement, css, html } from 'lit'
export class fourPage extends LitElement {


    render(){
        return html`
        <h1>Tercer Filtro<h1>
        <div class="container">
        <button class="button" id="page-one"> primer ejercicio</button>
        <button class="button" id="image-gallery"> segundo ejercicio</button>
        <button class="button" id="dinamic-table"> tercer ejercicio</button>
        <button class="button" id="api-data-list"> cuarto ejercicio</button>
        </div>
        `}

        firstUpdated(){
            const buttonDiv=this.shadowRoot.querySelector('.container')
            buttonDiv.addEventListener('click',(e)=>{
                const button=e.target.closest('.button')
                const newPage =`<${button.id}></${button.id}>`
                this.parentNode.insertAdjacentHTML('beforeend',newPage)
                this.parentNode.removeChild(this)
            })
        }

}

customElements.define('page-principal', fourPage);
