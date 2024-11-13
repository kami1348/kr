import { TripItemComponent } from './trip-item-component.js';
import { EditTripFormComponent } from './edit-trip-form-component.js';

export class TripsListComponent {
  constructor(trips, onRemoveTrip, onEditTrip) {
    this.trips = trips;
    this.onRemoveTrip = onRemoveTrip;
    this.onEditTrip = onEditTrip;
  }

  render() {
    const tripsContainer = document.createElement('div');
    tripsContainer.className = 'trips-list';

    this.trips.forEach((trip, index) => {
      const tripItem = new TripItemComponent(trip, () => this.onRemoveTrip(index), () => this.onEditTrip(index));
      tripsContainer.appendChild(tripItem.render());
    });
    
    return tripsContainer;
  }
}
