export class HeaderComponent {
    render() {
      const header = document.createElement('h1');
      header.className = 'app-header';
      header.textContent = 'Планер поездок';
      return header;
    }
  }
  