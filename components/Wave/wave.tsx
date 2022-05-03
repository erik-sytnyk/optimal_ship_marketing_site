import PropTypes from 'prop-types';

Wave.props = {
  id: PropTypes.string.isRequired
};

function Wave({id}) {
  return <div id={id} className="wave" />;
}

export default Wave;
