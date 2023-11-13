
    	// JavaScript to hide and show sections when clicked
    	const sections = document.querySelectorAll('section');
    	sections.forEach((section) => {
        	section.style.display = 'none';
    	});

    	// Show the home page by default
    	document.getElementById('what').style.display = 'block';

    	document.querySelector('nav').addEventListener('click', (event) => {
        	if (event.target.tagName === 'A') {
            	const sectionId = event.target.getAttribute('href').substring(1);
            	sections.forEach((section) => {
                	section.style.display = 'none';
            	});
            	document.getElementById(sectionId).style.display = 'block';
        	}
    	});
	


