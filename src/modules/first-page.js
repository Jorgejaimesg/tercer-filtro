import { LitElement, css, html } from 'lit'
export class firstPage extends LitElement {
//     Desarrollar un componente web personalizado utilizando JavaScript y el API
//     del Document Object Model (DOM) que calcule el Índice de Masa Corporal
//     (IMC). El componente debe permitir al usuario introducir su peso (en
//     kilogramos) y su altura (en metros), y luego al hacer clic en un botón
//     "Calcular", se debería mostrar el IMC resultante. Recuerde, la fórmula para
//     calcular el IMC es peso / (altura al cuadrado) . Preste atención a la validación de
//     los datos de entrada y a la presentación de los resultados. Se debe mostrar una
//     imagen teniendo en cuenta el tipo de obesidad de acuerdo al IMC.
    render(){
        return html`
        <h1>CALCULO DEL IMC</h1>
        <form class="form">

        <div>
        <label for="weight">INGRESE EL PESO</label>
        <input type="number" name="weight" id="weight">
        </div>
        <div>
        <label for="altura">INGRESE LA ALTURA</label>
        <input type="number" name="altura" id="altura">
        </div>
        <button class="calculate">calculate</button>
        </form>
        <div class="result"></div>
        `
    }

    firstUpdated(){

        const calculateButton = this.shadowRoot.querySelector(".calculate");
        calculateButton.addEventListener("click", (event) => {
            const form = this.shadowRoot.querySelector(".form");
            const data = Object.fromEntries(new FormData(form).entries());
            const imcData = JSON.parse(JSON.stringify(data));
        const {weight,altura}=imcData
        console.log(weight)
        console.log(altura)
        const imc=((weight)/(altura*altura))
        console.log(imc)
        if(imc<18.5){
            this.showResult('Bajo')
        }else if(imc<24.9 ){
            this.showResult('Normal')
            
        }else if (imc <29.9){
            this.showResult('Sobrepeso')
            
        }else if(imc>30){
            this.showResult('Obesidad')
        }
        event.preventDefault()
        this.requestUpdate()
    })
}
showResult(type){
    const result=this.shadowRoot.querySelector('.result')
    result.innerHTML=
    `
    <div>${type}</div>
    <img src="../../src/imgs/primer${type}.png" alt=${type}>
    `

    
}

}

customElements.define('page-one', firstPage);

//falta css
