import dataService from 'services/dataService';

function OurPrinciples() {
  const data = dataService.getOurPrinciples();

  return (
    <div id="our-principles">
      {data.items.map(item => {
        return <div key={item}>{item}</div>;
      })}
    </div>
  );
}

export default OurPrinciples;
