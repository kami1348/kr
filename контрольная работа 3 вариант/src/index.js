import { TripsPresenter } from './presenter/trips-presenter.js';

document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('app');
  const tripsPresenter = new TripsPresenter(rootElement);
  tripsPresenter.init();
});
