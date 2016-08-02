<?php

	$nome = $_GET['nome'];
	$comentario = $_GET['comentario'];
	$email = $_GET['email'];
	$post_id = $_GET['post_id'];
	$date = date('Y-m-d h:m:s');

	$conn = mysqli_connect('localhost', 'root', '', 'takeposts');

	if(!$conn){
		die("falha ao conectar");
	}

	$linha = "INSERT INTO wp_comments (comment_post_ID, comment_author, comment_author_email, comment_author_url, comment_author_IP, comment_date, comment_date_gmt, comment_content, comment_karma, comment_approved, comment_agent, comment_type, comment_parent, user_id) VALUES($post_id, '$nome', '$email', ' ', ' ',  '$date', '$date',  '$comentario', 0,  0, ' ', ' ', 0, 0)";

	$exec = mysqli_query($conn, $linha);

	if($exec){
		echo 'Dados enviados com sucesso!';
	}else{
		echo 'Houve algum erro';
	}