<?php

	$conn = mysqli_connect('localhost', 'root', '', 'takeposts');

	if(!$conn){
		die("falha ao conectar");
	}


	if(isset($_GET['post'])){
		//echo 'entrou';
		$post = $_GET['post'];
		$sql = "SELECT * FROM wp_posts WHERE ID=".$post;

		$exe = mysqli_query($conn, $sql);

		if(!$exe){
			die(mysql_error());
		}

		$posts = mysqli_fetch_all($exe,MYSQLI_ASSOC);

		$sql = "SELECT * FROM wp_comments WHERE comment_post_ID=".$post;
		$exe = mysqli_query($conn, $sql);

		if(!$exe){
			die(mysql_error());
		}

		$comments = mysqli_fetch_all($exe,MYSQLI_ASSOC);	

		
		//var_dump($comments);

		$result = array_merge($posts, $comments);

		/*print json_encode(array(
			 'posts' => $posts
			,'comments' => $comments
		));*/

		print json_encode($result);
		die();
		//echo 'cabou';
		
	}

	$sql = "SELECT * FROM wp_posts WHERE post_type = 'post' AND post_status = 'publish'";
	$exe = mysqli_query($conn, $sql);

	if(!$exe){
		die(mysql_error());
	}

	$posts = mysqli_fetch_all($exe,MYSQLI_ASSOC);

	print json_encode($posts);

	// foreach($posts as $post){
	// 	$post = (Object) $post;

	// 	echo "<a href=\"editar.php?id={$post->ID}\">{$post->ID}</a> <br>";

	// }

	///$posts = (Object) $posts;
	//$posts = (Array) $posts;

	///var_dump($posts);


	// foreach($posts as $key => $post){
	// 	if($post['ID'] == 1){
	// 		$posts[$key]['ID'] = 10;
	// 	}
	// }


	/*
	//foreach($posts as $post){
	for($i = 0; $i < count($posts);$i++){
		$post = $posts[$i];

		if($post['ID'] == 1){
			//$posts[$i]['ID'] = 20;
			$post['ID'] = 20;
		}

		//var_dump($posts[$i]);

		
		//var_dump($post['ID'] == 1);
		//if($post['ID'] == 1) {
			//$post['ID'] = 20;
		//}
	}
	*/



	//$posts = mysqli_fetch_all($exe,MYSQLI_BOTH);

	//echo $posts[0]['ID'];

	//var_dump($posts);
	//print json_encode($posts);

/*
	$obj = new StdClass();
	$obj->id 	= 1;
	$obj->nome 	= 'Gabriel';

	$arr = array("a", "b", "c");

	$arr2 = array("d", "e", "f");

	$arr[] = $arr2;
	$arr[] = $obj;

	

	var_dump($arr);
*/