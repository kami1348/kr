import { TripsModel } from '../model/trips-model.js';
import { TripsListComponent } from '../view/trips-list-component.js';
import { AddTripFormComponent } from '../view/add-trip-form-component.js';
import { EditTripFormComponent } from '../view/edit-trip-form-component.js';
import { FilterTripFormComponent } from '../view/filter-trip-form-component.js';
import { HeaderComponent } from '../view/header-component.js';


export class TripsPresenter {
  constructor(rootElement) {
    this.rootElement = rootElement;
    this.tripsModel = new TripsModel();
    this.editIndex = null;
  }

  init() {
    this.renderFilterForm();
    this.renderAddTripForm();
    this.renderTripsList();
  }

  renderFilterForm() {
    const filterTripFormComponent = new FilterTripFormComponent((startDate, endDate) => this.filterTrips(startDate, endDate));
    this.rootElement.appendChild(filterTripFormComponent.render());
  }

  renderAddTripForm() {
    const addTripFormComponent = new AddTripFormComponent((trip) => this.addTrip(trip));
    this.rootElement.appendChild(addTripFormComponent.render());
  }

  renderTripsList() {
    const tripsData = this.tripsModel.getTrips();
    const tripsListComponent = new TripsListComponent(tripsData, (index) => this.removeTrip(index), (index) => this.editTrip(index));
    this.rootElement.appendChild(tripsListComponent.render());
  }

  addTrip(trip) {
    this.tripsModel.addTrip(trip);
    this.updateView();
  }

  removeTrip(index) {
    this.tripsModel.removeTrip(index);
    this.updateView();
  }

  editTrip(index) {
    this.editIndex = index;
    const trip = this.tripsModel.getTrips()[index];
    const editTripFormComponent = new EditTripFormComponent(trip, (updatedTrip) => this.updateTrip(updatedTrip), () => this.cancelEdit());
    this.rootElement.appendChild(editTripFormComponent.render());
  }

  updateTrip(updatedTrip) {
    this.tripsModel.updateTrip(this.editIndex, updatedTrip);
    this.editIndex = null;
    this.updateView();
  }

  cancelEdit() {
    this.editIndex = null;
    this.updateView();
  }

  filterTrips(startDate, endDate) {
    const filteredTrips = this.tripsModel.filterTripsByDate(startDate, endDate);
    const tripsListComponent = new TripsListComponent(filteredTrips, (index) => this.removeTrip(index), (index) => this.editTrip(index));
    this.rootElement.innerHTML = '';
    this.renderFilterForm();
    this.renderAddTripForm();
    this.rootElement.appendChild(tripsListComponent.render());
  }

  updateView() {
    this.rootElement.innerHTML = '';
    this.renderFilterForm();
    this.renderAddTripForm();
    this.renderTripsList();
  }
}
