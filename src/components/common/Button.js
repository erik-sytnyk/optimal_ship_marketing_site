import PropTypes from 'prop-types';
import classNames from 'classnames';

Button.propTypes = {
  searchButton: PropTypes.boolean,
  onClick: PropTypes.func
};

function Button({children, searchButton, onClick}) {
  function clickButton() {
    if (!onClick) return;

    onClick();
  }

  function render() {
    const buttonClass = classNames({
      'custom-button': true,
      'search-button': searchButton
    });

    return (
      <button className={buttonClass} onClick={clickButton}>
        {children}
      </button>
    );
  }

  return render();
}

export default Button;
