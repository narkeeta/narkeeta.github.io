<?php

// Custom Post Type
function create_events() {
	register_post_type('events',
			array(
			'labels' => array(
					'name' => __('Events'),
					'singular_name' => __('Event'),
			),
			'public' => true,
			'has_archive' => true,
			'supports' => array(
					'title',
					'editor',
					'thumbnail',
				    'custom-fields'
			)
	));
}
add_action('init', 'create_events');
