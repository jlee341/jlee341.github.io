const header = document.createElement('header');
const h1 = document.createElement('h1');
const a_h1 = document.createElement('a');
const nav = document.createElement('nav');
const ul = document.createElement('ul');
const li = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
const li4 = document.createElement('li');
const ali = document.createElement('a');
const ali2 = document.createElement('a');
const ali3 = document.createElement('a');
const ali4 = document.createElement('a');

a_h1.setAttribute('href','client.html');
a_h1.innerHTML = 'Snailbot'
ali.setAttribute('href','policy.html');
ali2.setAttribute('href','terms.html');
ali3.setAttribute('href','changes.html');
ali4.setAttribute('href','support.html');
ali.innerHTML = 'Privacy Policy';
ali2.innerHTML = 'Terms of Service';
ali3.innerHTML = 'Changelog';
ali4.innerHTML = 'Support';

li.appendChild(ali);
li2.appendChild(ali2);
li3.appendChild(ali3);
li4.appendChild(ali4);
ul.appendChild(li);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);
nav.appendChild(ul);
header.appendChild(h1);
header.appendChild(nav);
h1.appendChild(a_h1);
document.body.appendChild(header);