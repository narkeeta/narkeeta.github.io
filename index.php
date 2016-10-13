<!DOCTYPE html>
<html>

<head>
	<title>5678 Media Group</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta charset="UTF-8">

	<!--FONT LINKS GO HERE IF NEEDED-->
	<link rel="stylesheet" href="<?php bloginfo('template_directory');?>/font-awesome/css/font-awesome.min.css">
	<link href="https://fonts.googleapis.com/css?family=Hind:300,400,700" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Nunito:400,700" rel="stylesheet">

	<!--THESE ARE THE LINKS TO THE CSS STYLE SHEET AND PRELOADERS FOR BOOTSTRAP AND ANIMATE-->
	<link rel='stylesheet prefetch' href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.1/animate.min.css'>
	<link rel='stylesheet prefetch' href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css'>
	<link rel="stylesheet" href="<?php bloginfo('template_directory');?>/style.css">
</head>

<body>
	<?php echo do_shortcode("[cfdb-save-form-post]"); ?>
	<!--THIS IS THE PURCHASE FORM-->
	<div id="payment-form">
		<h40>BUY TICKET</h40>
		<form method="post" name="payment-info-form" id="payment-info-form">
			<input type="hidden" name="apikey" id="apikey" value="3wZRqBBxeue5fHkTeYtiTwo0ArAoPNBE" />
			<input type="hidden" name="js_security_key" id="js_security_key" value="js-b304d33789d9e65dec4a0de649e0a20bb304d33789d9e65d" />
			<input type="hidden" name="token" id="token" value="fdoa-64c864ceae7f54c40bba79a192704c9b64c864ceae7f54c4" />
			<input type="hidden" name="auth" id="auth" payeezy-data="auth" value="true">
			<input type="text" name="ta_token" id="ta_token" payeezy-data="ta_token" value="NOIW" />
			
		
			<input class="cardinfo" type="text" placeholder="Email Adress" />
			<select class="select1 cardinfo" id="cardtype" payeezy-data="card_type">
				<option value="visa">Visa</option>
				<option value="mastercard">Master Card</option>
				<option value="American Express">American Express</option>
				<option value="discover">Discover</option>
			</select>
			<input class="cardinfo" type="text" payeezy-data="cardholder_name" placeholder="Name On Card" />
			<input class="cardinfo" type="text" payeezy-data="cc_number" placeholder="Card Number" />
			<input class="cardinfo" type="text" payeezy-data="cvv_code" placeholder="CVV Code" />
			<select class="select1 cardinfo" payeezy-data="exp_month">
				<option value="hide">Month</option>
				<option value="january" rel="icon-temperature">January</option>
				<option value="february">February</option>
				<option value="march">March</option>
				<option value="april">April</option>
				<option value="may">May</option>
				<option value="june">June</option>
				<option value="july">July</option>
				<option value="august">August</option>
				<option value="september">September</option>
				<option value="october">October</option>
				<option value="november">November</option>
				<option value="december">December</option>
			</select>
			<select class="select1 cardinfo" payeezy-data="exp_year">
				<option value="hide">Year</option>
				<option value="15">2015</option>
				<option value="16">2016</option>
				<option value="17">2017</option>
			</select>
			<div id="generate-token">
				<button id="buy-btn" type="submit">BUY TICKET</button>
			</div>
		</form>
	</div>
	<!--THIS IS THE VIDEO THAT STAYS BEHIND THE PAGE  AT ALL TIMES-->
	<div class="video-about">
		<video id="video-full-about" muted autoplay loop>
			<source src="<?php bloginfo('template_directory');?>/videos/BACARDI%20Celebrates%20Cuban%20Independence%20Day.mp4" type="video/mp4">
			<source src="<?php bloginfo('template_directory');?>/videos/BACARDI%20Celebrates%20Cuban%20Independence%20Day.webm" type="video/webm"> Your browser does not support the video tag.
		</video>
	</div>
	<!--THIS IS THE NAVIGATION MENU-->
	<div id="menu">
		<a href="#upcoming" class="mitem">UPCOMING EVENTS</a>
		<a href="#about" class="mitem">ABOUT US</a>
		<a href="#work" class="mitem">PAST EVENTS</a>
		<a href="#contact" class="mitem">CONTACT/SPONSOR</a>
	</div>

	<!--THIS IS THE LANDING PAGE OF THE SITE WITH THE VIDEO OVERLAY-->
	<div class="video-tagline">
		<video id="video-full" muted autoplay loop>
			<source src="<?php bloginfo('template_directory');?>/videos/BACARDI%20Celebrates%20Cuban%20Independence%20Day.mp4" type="video/mp4">
			<source src="<?php bloginfo('template_directory');?>/videos/BACARDI%20Celebrates%20Cuban%20Independence%20Day.webm" type="video/webm"> Your browser does not support the video tag.
		</video>
	</div>
	<div id="tagline">
		<i class="pulse fa fa-angle-down"></i>
	</div>

	<!--THIS IS WHERE THE UPCOMING EVENTS GO-->
	<div id="upcoming">
		<div id="scroll-starter"></div>
		<h1>UPCOMING EVENTS</h1>

		<?php 

		$args = array(
			'post_type' => 'your_post',
			'orderby' => 'date',
			'order'   => 'ASC',
		);  
		$your_loop = new WP_Query( $args ); 

		if ( $your_loop->have_posts() ) : while ( $your_loop->have_posts() ) : $your_loop->the_post(); 
		$meta = get_post_meta( $post->ID, 'your_fields', true ); ?>

			<div class="container-fluid event">
				<div class="col-xs-3 event-date">
					<h30>
						<?php echo $meta['event_start_m']; ?>
							<?php echo $meta['event_start_d']; ?> -
								<?php echo $meta['event_end_m']; ?>
									<?php echo $meta['event_end_d']; ?>
					</h30>
					<h31>
						<?php echo $meta['event_city']; ?>
					</h31>
				</div>
				<div class="event-info">
					<h30>
						<?php the_title(); ?>
					</h30>
					<h31>
						<?php echo $meta['event_desc']; ?>
					</h31>
				</div>
				<div class="event-btn">
					<a href="#" class="buybtn">
				   REGISTER
				</a>
				</div>
			</div>

			<?php endwhile; endif; wp_reset_postdata(); ?>

	</div>

	<!--THIS IS THE TEXT ABOUT THE COMAPNY-->
	<div id="about">

		<div id="introFull">
			<div class="aniUp">
				<h1>Entertainment Brought To Life</h1>
				<h3>Mind blowing content creation doesn’t only happen on paper - it happens all around you. 5678 Media Group brings you cutting edge multimedia entertainment from planning stages through production to execution. Join us for an experience and let the experience come to life.</h3>
			</div>
		</div>

		<div id="introFull">
			<div class="aniUp">
				<h1>LIVE EVENT PRODUCTION</h1>
				<h3>Mind blowing content creation doesn’t only happen on paper - it happens all around you. 5678 Media Group brings you cutting edge multimedia entertainment from planning stages through production to execution. Join us for an experience and let the experience come to life.</h3>
			</div>
		</div>

		<div id="introFull">
			<div class="aniUp">
				<h1>MULTIMEDIA ENTERTAINMENT</h1>
				<h3>Mind blowing content creation doesn’t only happen on paper - it happens all around you. 5678 Media Group brings you cutting edge multimedia entertainment from planning stages through production to execution. Join us for an experience and let the experience come to life.</h3>
			</div>
		</div>

		<div id="introFull">
			<div class="aniUp">
				<h1>CREATIVE STRATEGY & DESIGN</h1>
				<h3>We have the skills and imagination to creatively strategize and design the highest quality content for multimedia and live entertainment. From promoting with brand events to digital media series to exciting an audience with a
competition or concert, we plan, produce, and execute all content from the creative and design stages forward.</h3>
			</div>
		</div>

		<div id="introFull" class="aniUp">
			<h1>ABOUT US</h1>
			<h3>5678 Media group is a collective of media professionals specializing in exciting and innovative entertainment.
From corporate events, to concerts, to competitions, to digital content, we bring content forward with bold new ideas, equipment, and technology. Our hands on approach from planning to execution allows us to ensure that all of our clients needs are not only met, but exceeded.
We are the future of live entertainment, the future of multimedia content. The future of experience.<br><br>We are the future of live entertainment, the future of multimedia content. The future of experience.</h3>
		</div>
	</div>

	<!--THIS IS THE PREVOUS WORK SLIDER-->
	<div id="work">
		<div id="posters">

			<div class="poster-default-cover">
				<div class="poster poster-default-l" style="background-image:url('<?php bloginfo('template_directory');?>/poster_images/poster-one.png')"> </div>

				<div class="poster poster-default-r" style="background-image:url('<?php bloginfo('template_directory');?>/poster_images/poster-two.png')"> </div>
			</div>

			<div>
				<h2>EVENTS</h2>
				<!--
				<div class="scroll-left">
					<i class="fa fa-angle-left"></i>
				</div>
				<div class="scroll-right">
					<i class="fa fa-angle-right"></i>
				</div>
				-->
			</div>
		</div>
	</div>

	<!--THIS IS WHERE THE CONTACT STRIP IS-->
	<div id="contact">
		<div id="contact-wrapper">
			<h4>If you're interested in working with 5678 media group, or becoming a sponsor for one of our events, please contact us!</h4>
			<div id="contact-btns">
				<div id="btn-GIT">GET IN TOUCH</div>
				<div id="btn-BAS">BECOME A SPONSOR</div>
			</div>
		</div>
		<!-- THIS IS THE CONTACT FORM FOR THE "GET IN TOUCH BUTTON" -->
		<div id="contact-message">
			<h1 id="SUAM">SEND US A MESSAGE</h1>
			<div class="arrow-up"></div>
			<form id="msgform" action="https://formspree.io/info@5678mediagroup.com" method="POST">
				<input name="THIS PERSON SENT AN EMAIL:" type="text" class="msg-input" placeholder="NAME" />
				<input name="THEIR EMAIL:" type="text" class="msg-input" placeholder="EMAIL" />
				<textarea name="THEIR MESSAGE:" class="msg-input" placeholder="MESSAGE"></textarea>
				<input class="msg-send" type="submit" value="SEND" />
			</form>
		</div>

		<!-- THIS IS THE CONTACT FROM FOR THE "BECOME A SPONSOR BUTTON" -->
		<div id="contact-sponsor">
			<h1 id="SUAM2">REGISTER:</h1>
			<div class="arrow-up"></div>
			<form id="msgform" action="https://formspree.io/info@5678mediagroup.com" method="POST">
				<input name="THIS PERSON WANTS TO BECOME A SPONSOR, FIRST NAME:" type="text" class="msg-input" placeholder="FIRST NAME" />
				<input name="LAST NAME:" type="text" class="msg-input" placeholder="LAST NAME" />
				<input name="THEIR EMAIL:" type="text" class="msg-input" placeholder="EMAIL" />
				<input name="THEIR PHONE NUMBER:" class="msg-input" placeholder="PHONE NUMBER"></input>
				<input class="msg-send" type="submit" value="SEND" />
			</form>
		</div>
	</div>

	<div id="footer" class="container-fluid">

		<div class="logo col-xs-2">
			<img id=logo src="<?php bloginfo('template_directory');?>/images/logo.png">
		</div>

		<div class="footer-email col-xs-4">
			<h5><b>GET UPDATES</b> - Join The Mailing List</h5>

			<form id="subform" action="" method="post" enctype="multipart/form-data">
				<input type="hidden" name="form_title" value="Email Subscription List"/>
				<input type="text" name="email" class="email-input" placeholder="you@example.email" />
				<input class="email-send" type="submit" value="SEND" />
			</form>
			<div class="footer-legal">
				<h5>COPYRIGHT @ 5678MediaGroup - NYC<br>ALL RIGHTS RESERVED // 732.318.0341</h5>
			</div>
		</div>

		<div class="footer-nav col-xs-4">
			<h5><b>QUICK JUMP</b></h5>

			<a href="#upcoming">
				<h7>UPCOMING EVENTS</h7>
			</a>
			<a href="#about">
				<h7>ABOUT US</h7>
			</a>
			<a href="#work">
				<h7>PAST EVENTS</h7>
			</a>
			<a href="#contact">
				<h7>CONTACT/SPONSOR</h7>
			</a>

		</div>

		<div class="footer-social col-xs-2">
			<h6>CONNECT</h6>
			<i class="small fa fa-facebook"></i>
			<i class="small fa fa-linkedin"></i>
			<i class="small fa fa-twitter"></i>
			<i class="small fa fa-instagram"></i>
			<i class="small fa fa-youtube"></i>
			<i class="small fa fa-vimeo"></i>
		</div>
	</div>

	<!--IGNORE THESE< THEY ARE LINKS TO THE JAVASCRIPT FILES-->
	<script src='https://code.jquery.com/jquery-2.2.4.min.js'></script>
	<script src="/payeezy_v3.2.js" type="text/javascript"></script> 
	<script src="http://code.jquery.com/jquery-1.11.3.min.js" type="text/javascript"></script>
	<!--PAYEEZE JAVASCRIPT SETUP-->
	<script>
		Payeezy.setApiKey(3wZRqBBxeue5fHkTeYtiTwo0ArAoPNBE);
		Payeezy.setJs_Security_Key(js-b304d33789d9e65dec4a0de649e0a20bb304d33789d9e65d);
		Payeezy.setTa_token(NOIW);
	</script>
	<script src="<?php bloginfo('template_directory');?>/main.js" type="text/javascript"></script>
</body>

</html>