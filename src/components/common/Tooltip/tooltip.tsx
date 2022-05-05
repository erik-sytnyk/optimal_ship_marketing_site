import PropTypes from 'prop-types';
import classNames from 'classnames';

Tooltip.propTypes = {
  id: PropTypes.string,
  tooltip: PropTypes.object.isRequired
};

Tooltip.defaultProps = {
  className: ''
};

function Tooltip({id, tooltip, className}) {
  const tooltipClass = classNames({
    tooltip: true,
    [className]: className ? true : false
  });

  return (
    <div id={id} className={tooltipClass}>
      <div className="quote">{tooltip.quote}</div>
      <div className="author">{tooltip.author}</div>
    </div>
  );
}

export default Tooltip;
