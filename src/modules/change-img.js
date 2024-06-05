import { LitElement, css, html } from 'lit'
import imgs from '../modules/pictures.json'
export class changepictures extends LitElement {
    static get styles() {
        return css`
    .imgDiv{
        width:50vw;
        heigth:50vw;
        background-size: cover;
        background-position: start;
        background-repeat: no-repeat;
    }
    img{
        width:100%;
    }
    
    
    `}

    connectedCallback(){
        super.connectedCallback()
        const url =document.querySelector('image-gallery')
        this.id=url.id
        this.key=0
        console.log(this.id)

    }
    render(){
        return html`
        
        <div style="background-image: url(${this.id});" class="imgDiv">
        <img src="${this.id}" alt="">
        </div>
        <button class="next">next </button>
        <button class="back">back</button>
        
        `
    }
    firstUpdated(){
        const next=this.shadowRoot.querySelector('.next')
        const back=this.shadowRoot.querySelector('.back')

        next.addEventListener('click',(e)=>{

            Object.entries(imgs).forEach(([key,value])=>{
                const pastId=this.id
                if(value['img']===pastId){

                    this.key =(parseInt(key)+1)

                }

                this.nextimg()
            }
        )})
    }
    nextimg(){
        this.id=imgs[this.key]["img"]
        this.requestUpdate()
    }

}

customElements.define('see-images', changepictures);
