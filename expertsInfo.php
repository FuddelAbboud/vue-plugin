<?php
 /**
 * Plugin Name: Experts Women Info
 * Description: Experts women Api.
 */

 function func_load_experts_info() {
     wp_register_script('app_experts_info', plugin_dir_url( __FILE__ ).'dist/js/app.js', true);
     wp_enqueue_script( 'vue-router', get_template_directory_uri() . '/assets/js/vue-router.js', [ 'vuejs' ] );
     wp_register_script('chunk_experts_info', plugin_dir_url( __FILE__ ).'dist/js/chunk-vendors.js', true);
 }

 add_action('wp_enqueue_scripts', 'func_load_experts_info');

 //Add shortscode
 function func_experts_info(){
     wp_enqueue_script('app_experts_info');
     wp_enqueue_script('chunk_experts_info');
     wp_enqueue_script('vue-router');

     $str= "<div id='app'>"
           ."Loading data... "
           ."</div>";
     return $str;
 } // end function

  add_shortcode( 'experts-info', 'func_experts_info' );
?>