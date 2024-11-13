export class FilterTripFormComponent {
    constructor(onFilter) {
      this.onFilter = onFilter;
    }
  
    render() {
      const form = document.createElement('form');
      form.className = 'filter-trip-form';
      form.innerHTML = `
        <label for="startDate">Дата начала:</label>
        <input type="date" id="startDate" name="startDate">
        <label for="endDate">Дата окончания:</label>
        <input type="date" id="endDate" name="endDate">
        <button type="submit">Фильтровать</button>
      `;
  
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        const startDate = new Date(form.querySelector('#startDate').value);
        const endDate = new Date(form.querySelector('#endDate').value);
        this.onFilter(startDate, endDate);
      });
  
      return form;
    }
  }
  