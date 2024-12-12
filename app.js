import { Model } from './models/Model.js';
import { View } from './views/View.js';
import { Controller } from './controllers/Controller.js';

// Ініціалізація компонентів
const appModel = new Model();
const appView = new View();
const appController = new Controller(appModel, appView);