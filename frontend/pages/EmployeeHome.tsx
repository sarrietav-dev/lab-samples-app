import type { NextPage } from 'next';
import { Button } from 'react-bootstrap';
import TheNavbar from '../components/TheNavbar';

interface ModalState {
  showScheduleModal: boolean;
  showResultListModal: boolean;
}

/**
 * The main page that an external user sees.\
 * ![image](https://user-images.githubusercontent.com/25210925/144107131-2d333492-6c67-4511-b772-a9b6b6a21896.png)
 */
const EmployeeHome: NextPage = () => {
  // const [state, dispatch] = useReducer(modalReducer, {
  //   showResultListModal: false,
  //   showScheduleModal: false,
  // });

  // /**
  //  * Opens a given Modal
  //  */
  // const handleShowModal = (modal: 'SCHEDULE' | 'RESULT_LIST') =>
  //   dispatch({ type: 'SHOW', payload: modal });

  // /**
  //  * Closes a given Modal
  //  */
  // const handleCloseModal = (modal: 'SCHEDULE' | 'RESULT_LIST') =>
  //   dispatch({ type: 'CLOSE', payload: modal });

  return (
    <div className="vh-100 d-flex flex-column">
      <TheNavbar />
      <div className="d-flex h-100 flex-column align-items-center justify-content-evenly">
        <h1>Bienvenido, David Null</h1>
        <div className="d-flex flex-column">
          <Button
            variant="primary"
            className="my-2"
            // onClick={() => handleShowModal('SCHEDULE')}
          >
            Gestionar tipos de examenes
          </Button>
          <Button
            variant="info"
            className="my-2"
            // onClick={() => handleShowModal('RESULT_LIST')}
          >
            Ver agenda de hoy
          </Button>
        </div>
      </div>
      {/* <ScheduleModal
        show={state.showScheduleModal}
        handleClose={() => handleCloseModal('SCHEDULE')}
      />
      <ResultsListModal
        show={state.showResultListModal}
        handleClose={() => handleCloseModal('RESULT_LIST')}
      /> */}
    </div>
  );
};

enum EmployeeModalType {
  Appointment,
  Tests,
}

/**
 * Controls the state of the modals
 * @param action The types can be **SHOW** to show the modal, **CLOSE** to close it.
 * And the payload handles witch of the two modals is going to be used.\
 * **SCHEDULE**: For {@link ScheduleModal}\
 * **RESULT_LIST**: For {@link ResultsListModal}
 */
// function modalReducer(
//   state: ModalState,
//   action: { type: 'SHOW' | 'CLOSE'; payload: EmployeeModalType },
// ): ModalState {
//   switch (action.type) {
//     case 'SHOW':
//       if (action.payload === EmployeeModalType.Appointment)
//         return { ...state, showScheduleModal: true };
//       else return { ...state, showResultListModal: true };
//     case 'CLOSE':
//       if (action.payload === EmployeeModalType.Appointment)
//         return { ...state, showScheduleModal: false };
//       else return { ...state, showResultListModal: false };
//   }
// }

export default EmployeeHome;
