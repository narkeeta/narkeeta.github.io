<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', '5678database');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'b!x:;+Q7e7pb1~| [<(AndPF]%${g}6*XsHUpw)`|]foY}Rl(f(GyTw.1`2qxJh`');
define('SECURE_AUTH_KEY',  '+8l}O>/ B$saVzfl^F-0:J6d$jnJ4p(%|!t5cn9G9$@8W)`W-=ZAgu#_2pJh|7M|');
define('LOGGED_IN_KEY',    '%p<GFr?G*L~Pp{y,&Tx0V|sUE}|PP8= $b=^BT%_6khMe7CGg0 #+#]fAil(l;=k');
define('NONCE_KEY',        ':kA0~|^L9|]2;X` WmF.UDx</]Dn}@HRGLxs|<{jc+^[z+kJa 1F|6&4^:t-^=m2');
define('AUTH_SALT',        'u3~(f%1d_$e|Ox{|3j7xtE[p1g~bfMXQ8hhz||!al>Li5%qkeiGH%0(.2Ycnq2bN');
define('SECURE_AUTH_SALT', 'O!}9G{M`c=w)ZK++x%g#wWrOW#.b-65`_/zzAZ|0DLXc + ZVt!fRU}I cgF6rx`');
define('LOGGED_IN_SALT',   'meKHgmx:MuS{{/YRq|c?_,4,=nWk%H[P3xIF8z`94&HoJa?f%2>.,NbF@,n;WM95');
define('NONCE_SALT',       '8D4gz:n=}dtz.|c,hDS{1>P>@q-bu2c7`4N[CZY-veRgPrL*b:%(8u?WrkA3@-BM');
/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'xy7_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
