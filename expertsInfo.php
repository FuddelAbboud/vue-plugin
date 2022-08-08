<?php
 /**
 * Plugin Name: Experts Women Info
 * Description: Experts women Api.
 */

 function func_load_experts_info() {
    wp_register_script('app_experts_info', plugin_dir_url( __FILE__ ).'dist/js/app.js', true);
    wp_enqueue_script( 'vue-router', get_template_directory_uri() . '/assets/js/vue-router.js', [ 'vuejs' ] );
    wp_register_script('chunk_experts_info', plugin_dir_url( __FILE__ ).'dist/js/chunk-vendors.js', true);

    wp_register_script('app_experts_bootstrap', plugin_dir_url( __FILE__ ).'dist/scripts/bootstrap.bundle.min.js', true);
    wp_register_script('app_experts_aos', plugin_dir_url( __FILE__ ).'dist/scripts/aos.js', true);
    wp_register_script('app_experts_main', plugin_dir_url( __FILE__ ).'dist/scripts/main.js', true);  

    wp_register_style( 'app_expertStyle_fontAwesome', plugin_dir_url( __FILE__ ).'dist/css/font-awesome/css/all.min.css' );
    wp_register_style( 'app_expertStyle_bootstrap', plugin_dir_url( __FILE__ ).'dist/css/bootstrap.min.css' );
    wp_register_style( 'app_expertStyle_aos', plugin_dir_url( __FILE__ ).'dist/css/aos.css' );
    wp_register_style( 'app_expertStyle_main', plugin_dir_url( __FILE__ ).'dist/css/main.css' );     
 }

 add_action('wp_enqueue_scripts', 'func_load_experts_info');

 //Add shortscode
 function func_experts_info(){
     wp_enqueue_script('app_experts_info' );
     wp_enqueue_script('chunk_experts_info');
     wp_enqueue_script('vue-router');

     wp_enqueue_script('app_experts_bootstrap');
     wp_enqueue_script('app_experts_aos');
     wp_enqueue_script('app_experts_main');

     wp_enqueue_style('app_expertStyle_fontAwesome');
     wp_enqueue_style('app_expertStyle_bootstrap');
     wp_enqueue_style('app_expertStyle_aos');
     wp_enqueue_style('app_expertStyle_main');

     ob_start();
        include( plugin_dir_path(__FILE__ ) . '/dist/index.html' );
     return ob_get_clean();
 } // end function

  add_shortcode( 'experts-info', 'func_experts_info' );
?>