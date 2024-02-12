package com.example.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.example.entities.Customer;
import com.example.repositeries.CustomerRepository;

import jakarta.persistence.EntityNotFoundException;

@Component
public class CustomerServiceImpl implements CustomerService{

	@Autowired
	private CustomerRepository r;


	@Override
	public List<Customer> getCustomers() {

		return r.findAll();

	}


	@Override
	public void deleteCustomer(int id) {
		Customer customer = r.findById(id).orElseThrow(() -> new EntityNotFoundException("Customer not found with ID: " + id));

		if(customer!=null) {
			r.delete(customer);
		}

	}


	@Override
	public Customer saveCustomer(Customer c) {
		// TODO Auto-generated method stub
		return r.save(c);
	}


	@Override
	public int getRedeemPointsByID(int id) {

		return r.getRedeemPointsById(id);
	}


	@Override
	public Optional<Customer> getCustomerByEmail(String email) {

		return r.getCustomerByEmail(email);
	}


	@Override
	public Customer update(Customer c,int cid)
	{

		 Customer cust = r.findById(cid).get();
		 cust.setName(c.getName());
		 cust.setPhoneNo(c.getPhoneNo());
		 cust.setAddressLine1(c.getAddressLine1());
		 cust.setAddressLine2(c.getAddressLine2());
		 return r.save(cust);

	}


}
