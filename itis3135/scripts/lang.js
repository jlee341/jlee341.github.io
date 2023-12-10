$(document).ready(function() {
    function loadSupportedLanguages() {
        $.ajax({
            url: 'https://beta-news.snailbot.net/api/providers?includeLanguages=true',
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                // Assuming data is an array of providers with supported languages
                // Update your HTML with the supported languages information
                var providersHtml = '';

                data.forEach(function(provider) {
                    providersHtml += '<h2>' + provider.display_name + '</h2>';
                    providersHtml += '<p>Provider Type: ' + provider.provider_type + '</p>';
                    providersHtml += '<p>Update Rate: ' + provider.update_rate + ' seconds</p>';
                    providersHtml += '<p>Supports Tags: ' + provider.supports_tags + '</p>';
                    
                    if (provider.supported_languages && provider.supported_languages.length > 0) {
                        providersHtml += '<h3>Supported Languages</h3>';
                        providersHtml += '<ul>';
                        
                        provider.supported_languages.forEach(function(language) {
                            providersHtml += '<li>' + language.name + ' - ' + language.code + '</li>';
                        });

                        providersHtml += '</ul>';
                    }
                });

                $('#content').html(providersHtml);
            },
            error: function() {
                $('#content').html('<p>Error loading supported languages.</p>');
            }
        });
    }

    // Initial load of supported languages
    loadSupportedLanguages();
});
