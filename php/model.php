<?php

require_once './config.php';

class Contact{
	
	var $con;
	
	function __construct() {
		global $con;
		$this->con = $con;
	}
	
	function fetch($id){
		$sql="select * from client_contact where id = ".intval($id);
		$result=mysql_query($sql,$this->con);
		$row=mysql_fetch_array($result);
		return $row;
	}
	
	function getList($args){
		$name=$_GET["name"];
		$sql="select * from client_contact where true and";
		foreach($args as $key => $value){
			$sql .= " and `$key` = '$value'";
		}
		$result=mysql_query($sql,$this->con);
		return $result;
	}
			
	function create($data){
		$add_sql="insert into client_contact set ";
		
		$glue = '';
		
		foreach($data as $key => $value){
			$add_sql .= "$key = '$value'";
			$glue = ', ';
		}
		
		mysql_query($add_sql,$this->con);
		
		return mysql_insert_id();
	}
	
	function update($id){
		$add_sql="update client_contact set ";
		
		$glue = '';
		
		foreach($data as $key => $value){
			$add_sql .= "$key = '$value'";
			$glue = ', ';
		}
		
		mysql_query($add_sql,$this->con);
	}
	
	function remove($id){
		$de_sql="delete from client_contact where id = ".intval($id);
		mysql_query($de_sql,$this->con);
	}
	
}
