<?php
/**
 * @file
 * Administration interface for the kpi module.
 */

/**
 * Admin settings form.
 */
function ding_kpi_admin_settings_form($form_state) {
  $form = array();

  global $base_url;
  $form['kpi_domain'] = array(
    '#type' => 'textfield',
    '#title' => t('Hostname'),
    '#description' => t('The hostname of the tracked site.'),
    '#default_value' => variable_get('kpi_domain', $base_url),
  );

  $form['kpi_dcs_id'] = array(
    '#type' => 'textfield',
    '#title' => t('Site ID'),
    '#description' => t('The site identification key.'),
    '#default_value' => variable_get('kpi_dcs_id', ''),
  );

  // Clear JS cache to ensure the news version is used.
  $form['#submit'][] = 'drupal_clear_js_cache';

  return system_settings_form($form);
}

