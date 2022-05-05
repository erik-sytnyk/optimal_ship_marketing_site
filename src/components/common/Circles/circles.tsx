import classNames from 'classnames';

Circles.defaultProps = {
  className: ''
};

function Circles({className}) {
  const circlesClass = classNames({
    'circle-external': true,
    [className]: className ? true : false
  });

  return (
    <div className={circlesClass}>
      <div className="circle-internal" />
    </div>
  );
}

export default Circles;
