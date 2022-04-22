import PropTypes from 'prop-types';

Tooltip.propTypes = {
  id: PropTypes.string.isRequired,
  tooltip: PropTypes.object.isRequired
};

function Tooltip({id, tooltip}) {
  return (
    <div id={id} className="tooltip">
      <div className="quote">{tooltip.quote}</div>
      <div className="author">{tooltip.author}</div>
    </div>
  );
}

export default Tooltip;
