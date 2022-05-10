import dataService from 'src/services/dataService';

import CustomerService from './components/customer_service/CustomerService';
import OptimalLogistics from './components/optimal_logistics/OptimalLogistics';
import CommerceIntegrations from './components/commerce_integrations/CommerceIntegrations';
import ShipmentTracking from './components/shipment_tracking/ShipmentTracking';
import ShippingQuotes from './components/shipping_quotes/ShippingQuotes';
import BillPay from './components/bill_pay/BillPay';
import SchedulePickup from './components/schedule_pickup/SchedulePickup';

function ServicesList() {
  const data = dataService.getServicesList();

  function render() {
    return (
      <>
        {data.list.map((item, index) => {
          const key = item.title;
          const isOddNumber = index % 2 ? true : false;

          let Section = null;

          switch (index) {
            case 0:
              Section = CustomerService;
              break;
            case 1:
              Section = OptimalLogistics;
              break;
            case 2:
              Section = CommerceIntegrations;
              break;
            case 3:
              Section = ShipmentTracking;
              break;
            case 4:
              Section = ShippingQuotes;
              break;
            case 5:
              Section = BillPay;
              break;
            case 6:
              Section = SchedulePickup;
              break;
            default:
              break;
          }

          if (Section) return <Section key={key} item={item} isOdd={isOddNumber} />;

          return null;
        })}
      </>
    );
  }

  return render();
}

export default ServicesList;
