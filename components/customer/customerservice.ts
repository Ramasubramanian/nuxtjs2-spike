import axios from 'axios';

export type Customer = {
    id: number,
    name: string,
    description: string
}

export type SearchCustomerResponse = {
    customers: Customer[]
}

export async function searchCustomer(searchInput: string) {
    if(searchInput.length == 0) {
        return [];
    }
    try {
        const {data, status} = await axios.get("http://localhost:5001/customers");
        console.log(status);
        //TODO - currently filtered in client side ideally should come from server
        return data.customers.filter((c: Customer) => c.name.toLowerCase().indexOf(searchInput) >= 0);
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('error message: ', error.message);
            return error.message;
          } else {
            console.log('unexpected error: ', error);
            return 'An unexpected error occurred';
          }

    }
}