import { LitElement, css, html } from 'lit'
export class fourPage extends HTMLElement {

    render(){ 
        return html`
    <style>
      .container { font-family: Arial, sans-serif; }
      .list-item { cursor: pointer; padding: 10px; border: 1px solid #ccc; margin: 5px 0; }
      .list-item:hover { background-color: #f0f0f0; }
      .details { margin-top: 10px; }
      button { margin-top: 10px; padding: 10px; }
    </style>
    <div class="container">
      <button id="fetch-button">Actualizar Datos</button>
      <div id="list-container"></div>
      <div id="details-container" class="details"></div>
    </div>
  `;}

    
  firstUpdated(){
    const button=this.shadowRoot.querySelector('#fetch-button')
    this.button.addEventListener('click', () => {this.fetchData()});
        
    }
    
  
    async fetchData() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        this.renderList(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  
    renderList(data) {
      const listContainer = this.shadowRoot.getElementById('list-container');
      listContainer.innerHTML = data;
      data.forEach(item => {
        const listItem = document.createElement('div');
        listItem.className = 'list-item';
        listItem.textContent = item.name;
        listItem.addEventListener('click', () => this.showDetails(item));
        listContainer.appendChild(listItem);
      });
    }
  
    showDetails(item) {
      const detailsContainer = this.shadowRoot.getElementById('details-container');
      detailsContainer.innerHTML = `
        <h3>${item.name}</h3>
        <p>Email: </p>
        <p>Phone: </p>
        <p>Website: </p>
        <p>Company: </p>
        <p>Address: </p>
      `;
    }
  }
  

customElements.define('api-data-list', fourPage);
