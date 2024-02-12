package com.example.repositeries;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.entities.ProductMaster;

import jakarta.transaction.Transactional;

@Repository
@Transactional

public interface ProductMasterRepository extends JpaRepository<ProductMaster, Integer>{
	
	
}