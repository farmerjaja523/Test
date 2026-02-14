// Search functionality
function performSearch() {
    const searchType = document.getElementById('search-type').value;
    const searchInput = document.getElementById('search-input').value.trim();
    
    if (searchInput === '') {
        alert('Please enter a search term');
        return;
    }
    
    // Handle different search types
    let searchUrl = '';
    switch(searchType) {
        case 'keyword':
            searchUrl = `search.html?keyword=${encodeURIComponent(searchInput)}`;
            break;
        case 'id':
            searchUrl = `search.html?id=${encodeURIComponent(searchInput)}`;
            break;
        case 'confirmation':
            searchUrl = `search.html?confirmation=${encodeURIComponent(searchInput)}`;
            break;
        case 'reservation':
            searchUrl = `search.html?reservation=${encodeURIComponent(searchInput)}`;
            break;
        case 'appointment':
            searchUrl = `search.html?appointment=${encodeURIComponent(searchInput)}`;
            break;
        case 'ticket':
            searchUrl = `search.html?ticket=${encodeURIComponent(searchInput)}`;
            break;
    }
    
    // Redirect to search results page
    window.location.href = searchUrl;
}

// Update search input placeholder based on selected search type
document.addEventListener('DOMContentLoaded', function() {
    const searchType = document.getElementById('search-type');
    const searchInput = document.getElementById('search-input');
    
    if (searchType) {
        searchType.addEventListener('change', function() {
            const placeholders = {
                'keyword': 'Enter keywords...',
                'id': 'Enter ID...',
                'confirmation': 'Enter Confirmation Number...',
                'reservation': 'Enter Reservation Number...',
                'appointment': 'Enter Appointment Number...',
                'ticket': 'Enter Ticket Number...'
            };
            
            if (searchInput) {
                searchInput.placeholder = placeholders[this.value] || 'Enter search term...';
            }
        });
    }
});

// Form validation
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (form) {
        form.addEventListener('submit', function(e) {
            const inputs = form.querySelectorAll('input[required]');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = '#e74c3c';
                } else {
                    input.style.borderColor = '#ddd';
                }
            });
            
            if (!isValid) {
                e.preventDefault();
                alert('Please fill in all required fields');
            }
        });
    }
}

// Allow Enter key to trigger search
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
});