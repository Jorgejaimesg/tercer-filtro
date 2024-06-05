import { LitElement, css, html } from 'lit'
import imgs from '../modules/pictures.json'
export class secondPage extends LitElement {


    static get styles() {
        return css`
        .container{
            width:100vw;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px,1fr));
            grid-auto-rows: minmax(250px,auto);
            gap:20px;
            padding: 10px;
            grid-auto-flow: dense;

        }
        .imgDiv{
            width:30vw;
            background-size: cover;
            background-position: start;
            background-repeat: no-repeat;
        }
        
        img{
            width:100%;
        }  

        .blur-div{
            width:100vw;
            z-index:1;
            heigth:100vh;
            filter:blur(5px)

        }


        .big-img{
            width:70%;
            z-index:3
        }
        `
    }
    connectedCallback(){
        super.connectedCallback()
        this.id=''
    }
    render(){
        return html`
            <div> gallery</div>
            <div class="container">
            ${(Object.values(imgs)).map((url)=>{
                return html`
                <div style="background-image: url(${url['img']});" class="imgDiv" id=${url['img']}>
                </div>
                `
            })}
            </div>

        `
    }
    firstUpdated(){
        const imgcontainer=this.shadowRoot.querySelector('.container')
        imgcontainer.addEventListener('click',(event)=>{
            const imgclick=event.target.closest('.imgDiv');
            this.id=imgclick.id;
            const bigImgs='<see-images></see-images>'
            this.parentNode.insertAdjacentHTML('beforeend',bigImgs)
            this.parentNode.removeChild(this)
            
        })
    }

}

customElements.define('image-gallery', secondPage);
