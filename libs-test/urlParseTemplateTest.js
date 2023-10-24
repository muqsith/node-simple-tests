const urlParseTemplate = require("urlparse-template");

const smtpUrl = "smtp://user%40{domainName}:password@mail.server.com:25/";

const smtpUrlTemplate = urlParseTemplate(smtpUrl);

const finalUrl = smtpUrlTemplate({ domainName: "mydomain.com" });

console.log(finalUrl);

/* console.log prints following
{
  protocol: 'smtp:',
  slashes: true,
  auth: 'user@mydomain.com:password',
  host: 'mail.server.com:25',
  port: '25',
  hostname: 'mail.server.com',
  hash: null,
  search: null,
  query: null,
  pathname: '/',
  path: '/',
  href: 'smtp://user%2540mydomain.com:password@mail.server.com:25/',
  username: 'user@mydomain.com',
  password: 'password'
}

If we look at the href value it's not correct. But if replace the parse function with node's url.parse then
the output is

{
  protocol: 'smtp:',
  slashes: true,
  auth: 'user@mydomain.com:password',
  host: 'mail.server.com:25',
  port: '25',
  hostname: 'mail.server.com',
  hash: null,
  search: null,
  query: null,
  pathname: '/',
  path: '/',
  href: 'smtp://user%40mydomain.com:password@mail.server.com:25/',
  username: 'user@mydomain.com',
  password: 'password'
}

If we look at the href now, it's correct.

*/
