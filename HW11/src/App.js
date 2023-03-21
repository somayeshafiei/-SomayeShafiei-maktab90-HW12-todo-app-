import El from './library/El';
import { Navbar } from './layout/components/Navbar';
import { Table } from './layout/components/Table';
import { Form } from './layout/components/Form';
import { gettingData } from './layout/components/Form/Api';
import { renderRow } from './layout/components/Form/renderTable';
import { createPaginate } from './layout/components/pagination';
import { filtering } from './layout/components/Navbar/filter';
const App = () => {
  return El({
    element: 'div',
    child: [Navbar(), Table(), Form(), filtering()],
    className: 'h-16 bg-[#6200ea] z-10',
  });
};

export async function firstLoading() {
  try {
    await gettingData().then((response) => {
      renderRow(response, true);
    });
  } catch (error) {
    console.log(error);
  }
}
// createPaginate();
// firstLoading();

export default App;
