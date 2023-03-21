import './src/styles/index.css';
import App from './src/App';
import { createPaginate } from './src/layout/components/pagination';

const root = document.getElementById('app');
console.log(root);
root.append(App());
createPaginate();
