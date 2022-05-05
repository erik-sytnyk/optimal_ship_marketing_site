import PropTypes from 'prop-types';
import classNames from 'classnames';

Wave.props = {
  id: PropTypes.string
};

Wave.defaultProps = {
  className: ''
};

function Wave({id, className}) {
  const waveClass = classNames({
    wave: true,
    [className]: className ? true : false
  });

  return <div id={id} className={waveClass} />;
}

export default Wave;
