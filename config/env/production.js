/**
 * Production environment settings
 *
 * This file can include shared settings for a production environment,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */

module.exports = {

  FACEBOOK_KEY                            : '304672540018026',
  FACEBOOK_SECRET                         : '6a31acbddff025c9c03aaf2e8e54750e',
  MYSQL_SERVER_HOSTNAME_OR_IP_ADDRESS     : '',
  MYSQL_USER                              : '',
  MYSQL_PASSWORD                          : '',
  MYSQL_DATABASE                          : 'dbpegaso'

  /***************************************************************************
   * Set the default database connection for models in the production        *
   * environment (see config/connections.js and config/models.js )           *
   ***************************************************************************/

  // models: {
  //   connection: 'someMysqlServer'
  // },

  /***************************************************************************
   * Set the port in the production environment to 80                        *
   ***************************************************************************/

  // port: 80,

  /***************************************************************************
   * Set the log level in production environment to "silent"                 *
   ***************************************************************************/

  // log: {
  //   level: "silent"
  // }

};
