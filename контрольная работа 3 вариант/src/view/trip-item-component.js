export class TripItemComponent {
    constructor(trip, onRemove, onEdit) {
      this.trip = trip;
      this.onRemove = onRemove;
      this.onEdit = onEdit;
    }
  
    render() {
      const tripElement = document.createElement('div');
      tripElement.className = 'trip-item';
      tripElement.innerHTML = `
        <h3>${this.trip.destination}</h3>
        <p>Дата: ${this.trip.date}</p>
        <p>Заметки: ${this.trip.notes}</p>
        <button class="delete-button">Удалить</button>
        <button class="edit-button">Редактировать</button>
      `;
      
      const deleteButton = tripElement.querySelector('.delete-button');
      deleteButton.addEventListener('click', () => {
        this.onRemove();
      });
  
      const editButton = tripElement.querySelector('.edit-button');
      editButton.addEventListener('click', () => {
        this.onEdit();
      });
  
      return tripElement;
    }
  }
  