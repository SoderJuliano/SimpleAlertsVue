export function showAlert(message) {
  // Cria um novo elemento div
  const alertDiv = document.createElement('div');
  alertDiv.id = 'theAlert';
  alertDiv.innerHTML = `
    <div class="main-alert show">
      <div class="inner-alert">
        <span class="closebtn" onclick="this.parentElement.parentElement.style.display='none';">&times;</span>
        ${message}
      </div>
    </div>
  `;

  // Adiciona o estilo para o alerta
  const style = document.createElement('style');
  style.innerHTML = `
    .main-alert {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      padding: 5px;
      border-radius: 10px;
      background-color: rgba(0,0,0,0.65);
      width: 400px;
      min-height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .inner-alert {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-size: 16px;
      font-weight: bold;
      position: relative;
    }
    .show {
      transition: all 0.5s;
      opacity: 1;
      z-index: 10;
      top: 2%;
    }
    .hide {
      transition: all 0.5s;
      opacity: 0;
      z-index: -1;
      top: -50px;
    }
    .closebtn {
      position: absolute;
      top: 0px;
      right: 10px;
      color: white;
      font-weight: bold;
      font-size: 22px;
      line-height: 20px;
      cursor: pointer;
      transition: 0.3s;
    }
    .closebtn:hover {
      color: black;
    }
  `;
  document.head.appendChild(style);

  // Adiciona o elemento ao corpo do documento
  document.body.appendChild(alertDiv);

  // Remove o elemento após 3 segundos
  setTimeout(() => {
    document.body.removeChild(alertDiv);
  }, 3000);
}