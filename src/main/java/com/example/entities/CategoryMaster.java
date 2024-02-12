package com.example.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "category_master")
public class CategoryMaster {

 @Id
 @GeneratedValue(strategy = GenerationType.IDENTITY)
 private Long catmasterId;

 private Integer catId;
 private Integer subCatId;  // Remove one of the subCatId fields
 private String catName;
 private String catImagePath;
 private String flag;
 private String remarks;
 public Long getCatmasterId() {
	return catmasterId;
}
public void setCatmasterId(Long catmasterId) {
	this.catmasterId = catmasterId;
}
public Integer getCatId() {
	return catId;
}
public void setCatId(Integer catId) {
	this.catId = catId;
}
public Integer getSubCatId() {
	return subCatId;
}
public void setSubCatId(Integer subCatId) {
	this.subCatId = subCatId;
}
public String getCatName() {
	return catName;
}
public void setCatName(String catName) {
	this.catName = catName;
}
public String getCatImagePath() {
	return catImagePath;
}
public void setCatImagePath(String catImagePath) {
	this.catImagePath = catImagePath;
}
public String getFlag() {
	return flag;
}
public void setFlag(String flag) {
	this.flag = flag;
}
public String getRemarks() {
	return remarks;
}
public void setRemarks(String remarks) {
	this.remarks = remarks;
}



}
