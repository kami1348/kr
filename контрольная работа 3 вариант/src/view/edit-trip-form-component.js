export class EditTripFormComponent {
    constructor(trip, onUpdate, onCancel) {
      this.trip = trip;
      this.onUpdate = onUpdate;
      this.onCancel = onCancel;
    }
  
    render() {
      const form = document.createElement('form');
      form.className = 'edit-trip-form';
      form.innerHTML = `
        <label for="destination">Место назначения:</label>
        <input type="text" id="destination" name="destination" value="${this.trip.destination}" required>
        <label for="date">Дата:</label>
        <input type="date" id="date" name="date" value="${this.trip.date}" required>
        <label for="notes">Заметки:</label>
        <textarea id="notes" name="notes">${this.trip.notes}</textarea>
        <button type="submit">Сохранить</button>
        <button type="button" class="cancel-button">Отмена</button>
      `;
  
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        const destination = form.querySelector('#destination').value;
        const date = form.querySelector('#date').value;
        const notes = form.querySelector('#notes').value;
        
        this.onUpdate({ destination, date, notes });
      });
  
      const cancelButton = form.querySelector('.cancel-button');
      cancelButton.addEventListener('click', (event) => {
        event.preventDefault();
        this.onCancel();
      });
  
      return form;
    }
  }
  