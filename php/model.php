<?php

class Contact{
	
	var $connection;
	
	var $fields;
	
	function __construct() {
		
		$this->connection = @mysql_connect("127.0.0.1","root","");
		
		if(!$this->connection){
			throw new Exception('Database Error');
		}
		
		mysql_query("set names 'utf8'");
		mysql_select_db("test",$this->connection);
		
		$this->fields = array(
			'name'=>'',
			'phno'=>'',
			'email'=>'',
			'address'=>''
		);
	}
	
	function __destruct(){
		mysql_close($this->connection);
	}
	
	function fetch($id){
		$sql="select * from client_contact where id = ".intval($id);
		$result=mysql_query($sql,$this->connection);
		$row=mysql_fetch_array($result, MYSQL_ASSOC);
		return $row;
	}
	
	function getList($args=array()){
		$args = array_intersect_key($args, $this->fields);
		
		$sql="select * from client_contact where true";
		
		foreach($args as $key => $value){
			$sql .= " and `$key` = '$value'";
		}
		$result=mysql_query($sql,$this->connection);
		
		if($error = mysql_error()){
			throw new Exception($error);
		}
		
		$data = array();
		
		while($row = mysql_fetch_array($result, MYSQL_ASSOC)){
			$data[] = $row;
		}
		
		return $data;
	}
			
	function create($data){
		$data = array_intersect_key($data, $this->fields);
		
		$add_sql="insert into client_contact set ";
		
		$glue = '';
		
		foreach($data as $key => $value){
			$add_sql .= "{$glue}{$key} = '$value'";
			$glue = ', ';
		}
		
		mysql_query($add_sql,$this->connection);
		
		if($error = mysql_error()){
			throw new Exception($error);
		}
		
		return mysql_insert_id();
	}
	
	function update($id, $data){
		$data = array_intersect_key($data, $this->fields);
		
		$sql="update client_contact set ";
		
		$glue = '';
		
		foreach($data as $key => $value){
			$sql .= "{$glue}{$key} = '$value'";
			$glue = ', ';
		}
		
		$sql .= " where id = ".intval($id);
		
		mysql_query($sql,$this->connection);
		
		if($error = mysql_error()){
			throw new Exception($error);
		}
		
	}
	
	function remove($id){
		$de_sql="delete from client_contact where id = ".intval($id);
		mysql_query($de_sql,$this->connection);
		
		if($error = mysql_error()){
			throw new Exception($error);
		}
		
	}
	
}
