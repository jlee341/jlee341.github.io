$(document).ready(function() {
    function loadSupportedLanguages() {
        $.ajax({
            url: 'https://beta-news.snailbot.net/api/providers?includeLanguages=true',
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                // Assuming data is an array of providers with supported languages
                // Update your HTML with the supported languages information
               


                data.forEach(function(provider) {      
                    var template = `
    <section class="bot">
    <div>
    <h2>Provider Name: ${provider.name}</h2>
    <p>Provider Type: ${provider.provider_type}</p>
    <p>Update Rate: ${provider.update_rate}</p>
    <p>Supports Tags: ${provider.supports_tags}</p>
    <ul>
    ${provider.supported_languages.map((s) => "<li>" + s.name + " - " + s.code + "</li>").join("")}
    </ul>
    </div>
    </section>
    `;
    $("#content").append(template)
                });
            },
            error: function() {
                $('#content').html('<p>Error loading supported languages.</p>');
            }
        });
    }
    // Initial load of supported languages
    loadSupportedLanguages();
    function loadVersionInfo() {
        $.ajax({
            url: 'https://beta-news.snailbot.net/api/version',
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                // Assuming data is an array of providers with supported languages
                // Update your HTML with the supported languages information
               


                     
                    var template = `
    <section class="bot">
    <div>
    <h1>Version Info</h1>
    <p>Version: ${data.version}</p>
    <p>Status: ${data.status}</p>
    </div>
    </section>
    `;
    $("#content").append(template)
               
            },
            error: function() {
                $('#content').html('<p>Error loading supported languages.</p>');
            }
        });
    }
    loadVersionInfo();
});







