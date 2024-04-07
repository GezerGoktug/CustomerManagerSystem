import CustomerItem from "./CustomerItem";

const CustomerList = ({ customerList, setCustomerList }) => {
  //! Kaldırma butonu tıklandığında ilgili müşteriyi listeden siler.
  const removeCustomer = (customer) => {
    setCustomerList(
      customerList.filter((customerItem) => customerItem.id !== customer.id)
    );
  };
  return (
    <div className="flex flex-col gap-5 max-h-80 overflow-auto">
      {customerList.length === 0 ? (
        <p className="text-center py-3 font-semibold">Customer list is empty</p>
      ) : (
        customerList.map((customer) => (
          <CustomerItem
            key={customer.id}
            customer={customer}
            onClick={() => removeCustomer(customer)}
          />
        ))
      )}
    </div>
  );
};
export default CustomerList;
