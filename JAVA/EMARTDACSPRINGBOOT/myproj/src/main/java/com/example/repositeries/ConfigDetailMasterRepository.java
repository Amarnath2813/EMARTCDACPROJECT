package com.example.repositeries;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.entities.ConfigDetailMaster;

import jakarta.transaction.Transactional;
@Repository
@Transactional
public interface ConfigDetailMasterRepository extends JpaRepository<ConfigDetailMaster, Integer> {

}
