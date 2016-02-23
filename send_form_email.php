<?php
if(isset($_POST['submit'])) {
  $emailbody = 'Name: '.$_POST['your-name']."\n"
  .'Email Address: '.$_POST['your-email']."\n"
  .'Message: '.$_POST['your-message'];
  mail('travissalad@gmail.com', 'Hello, Travis', $emailbody);
  header('location: thank-you.html');
} else {
  header('location: contact.html');
}



 ?>
