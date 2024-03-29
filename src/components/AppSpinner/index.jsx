import Spinner from 'react-bootstrap/Spinner';

import "./styles.scss";

const AppSpinner = () => {
  return (
    <Spinner className="panambi-spinner" animation="border" role="status">
      <span className="visually-hidden">Cargando...</span>
    </Spinner>
	)
}

export default AppSpinner;