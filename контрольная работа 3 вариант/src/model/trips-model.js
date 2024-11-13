export class TripsModel {
    constructor() {
      this.trips = [
        { destination: 'Новокузнецк', date: '2024-12-15', notes: 'Посетить храм' },
        { destination: 'Москва', date: '2024-11-20', notes: 'Посетить все клубы' },
      ];
    }
  
    getTrips() {
      return this.trips;
    }
  
    addTrip(trip) {
      this.trips.push(trip);
    }
  
    removeTrip(index) {
      this.trips.splice(index, 1);
    }
  
    updateTrip(index, updatedTrip) {
      this.trips[index] = updatedTrip;
    }
  
    filterTripsByDate(startDate, endDate) {
      return this.trips.filter(trip => {
        const tripDate = new Date(trip.date);
        return tripDate >= startDate && tripDate <= endDate;
      });
    }
  }

  