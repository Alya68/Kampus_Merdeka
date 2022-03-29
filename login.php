<?php
    function login($username, $password){
        if($username == 'admin' && $password == 'mimin') header("location:index.php");
        else echo "<script onclick='history.go(-1)'>alert ('username/password salah!')</script>";
    }
    if(isset($_POST['submit'])) login($_POST['username'],$_POST['password']);
?>
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>

body{
	margin: 0 auto;
	background-image: url("assets/img/tk.jpg");
	background-repeat: no-repeat;
	background-size: 100% 720px;
}
h1{
    font-size: 40px;
}

.container{
	width: 500px;
	height: 450px;
	text-align: center;
	margin: 0 auto;
	background-color: rgba(44, 62, 80,0.7);
	margin-top: 160px;
}
label{
    color:white;
}

.container img{
	width: 150px;
	height: 150px;
	margin-top: -60px;
}

input[type="text"],input[type="password"]{
	margin-top: 30px;
	height: 45px;
	width: 370px;
	font-size: 18px;
	margin-bottom: 20px;
	background-color: #fff;
	padding-left: 40px;
}

.form-input::before{
	padding-left: 07px;
	padding-top: 40px;
	position: absolute;
	font-size: 35px;
	color: #2980b9; 
}



button{
	padding: 25px 35px;
	border: none;
	background-color: #27ae60;
	color: #fff;
    align:center;
}
</style>

  </head>
  <body>
       <h1 align="center">FORM LOGIN</h1>
     
       <div class="container">
	<img src="https://ppid.bandung.go.id/MonevPPID/2019/images/faces/orang2.svg"/>
    <form action =""  method="POST">
        <ul>
    <table>
                    <tr>
                        <td><label for="username">Username :</label></td>
                    </tr>
                    <tr>
                    <div class="form-input">
                        <td><input type="text" name="username" id="username" placeholder="Enter your User Name"></td>
                    </div>
                    </tr>
                    <tr>
                    <div class="form-input">
                        <td><label for="password">Password : </label></td>
                    </div>
                    </tr>
                    <tr>
                        <td><input type="password" name="password" id="password" placeholder="Enter your Password"></td>
                    </tr>
                    <tr>
                        <td><button type="submit" name = "submit">LOGIN</button></td>
                    </tr>
                </table>
</form>

       </ul>
       </div>
  </body>
  </html>