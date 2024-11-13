export class AddTripFormComponent {
    constructor(onAddTrip) {
      this.onAddTrip = onAddTrip;
    }
  
    render() {
      const form = document.createElement('form');
      form.className = 'add-trip-form';
  
      form.innerHTML = `
        <label for="destination">Место назначения:</label>
        <input type="text" id="destination" name="destination" required>
        <label for="date">Дата:</label>
        <input type="date" id="date" name="date" required>
        <label for="notes">Заметки:</label>
        <textarea id="notes" name="notes"></textarea>
        <button type="submit">Добавить поездку</button>
      `;
  
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        const destination = form.querySelector('#destination').value;
        const date = form.querySelector('#date').value;
        const notes = form.querySelector('#notes').value;
        
        this.onAddTrip({ destination, date, notes });
  
        form.reset();
      });
  
      return form;
    }
  }
  