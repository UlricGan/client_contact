<?php

require_once './model.php';

$contact = new Contact();

$id = isset($_GET['id']) ? $_GET['id'] : false;

$output = array();

switch($_SERVER['REQUEST_METHOD']){
	case 'GET' && $id:
		$output = $contact->fetch($id);
		break;
	
	case 'GET':
		$output = $contact->getList($_GET);
		break;
	
	case 'POST':
		$output = $contact->create($_POST);
		break;
	
	case 'PUT':
		$output = $contact->update($id, $_POST);
		break;
	
	case 'DELETE':
		$output = $contact->remove($id);
		break;
}

echo json_encode($output);

