<?php

require_once './model.php';

$contact = new Contact();

$uri_segments = explode('/',substr($_SERVER['REQUEST_URI'],26));
$id = isset($uri_segments[1])? $uri_segments[1] : null;
//echo $_SERVER['REQUEST_URI'];

switch($_SERVER['REQUEST_METHOD']){
	case 'GET':
		if($id){
			$output = $contact->fetch($id);
		}
		else{
			$output = $contact->getList($_GET);
		}
		
		break;
	
	case 'POST':
		$input_data = json_decode(file_get_contents('php://input'),JSON_OBJECT_AS_ARRAY);
		$output = $contact->create($input_data);
		break;
	
	case 'PUT':
		$input_data = json_decode(file_get_contents('php://input'),JSON_OBJECT_AS_ARRAY);
		$contact->update($id, $input_data);
		break;
	
	case 'DELETE':
		$contact->remove($id);
		break;
}

header('Content-Type: application/json');
if(isset($output)){
	echo json_encode($output);
}

