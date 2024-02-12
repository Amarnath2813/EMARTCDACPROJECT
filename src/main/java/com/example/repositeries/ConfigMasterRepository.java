package com.example.repositeries;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.entities.ConfigMaster;

@Repository
public interface ConfigMasterRepository extends JpaRepository<ConfigMaster, Long> {
}