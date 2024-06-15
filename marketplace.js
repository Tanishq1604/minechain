    // Get the modal
    // Get the marketplace modal
    var marketplaceModal = document.getElementById("marketplaceModal");

    // Get the button that opens the marketplace modal
    var openModalBtn = document.getElementById("openModalBtn");
    
    // Get the <span> element that closes the marketplace modal
    var closeMarketplaceBtn = document.getElementsByClassName("close")[0];
    
    // Function to open the marketplace modal
    function openMarketplaceModal() {
        marketplaceModal.style.display = "block";
    }
    
    // Function to close the marketplace modal
    function closeMarketplaceModal() {
        marketplaceModal.style.display = "none";
    }
    
    // Event listener for the button to open the marketplace modal
    openModalBtn.onclick = openMarketplaceModal;
    
    // Event listener for the span to close the marketplace modal
    closeMarketplaceBtn.onclick = closeMarketplaceModal;
    
    // Event listener for clicks outside the marketplace modal to close it
    window.onclick = function(event) {
        if (event.target == marketplaceModal) {
            closeMarketplaceModal();
        }
    };
    
    // Event listener for keyboard shortcuts to open/close the marketplace modal
    window.addEventListener('keydown', function(event) {
        if (event.key === 'm' || event.key === 'M') {
            openMarketplaceModal();
        }
        if (event.key === 'c') {
            closeMarketplaceModal();
        }
    });
    
    // Get all items
    var items = document.getElementsByClassName("item");
    
    // Function to open item detail modal with item details
    function openItemDetailModal(item) {
        alert(`Name: ${item.dataset.name}\nDescription: ${item.dataset.description}\nPrice: ${item.dataset.price}`);
    }
    
    // Loop through all items to add click event listener for opening item detail modal
    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener("click", function() {
            openItemDetailModal(items[i]);
        });
    
        // Adding hover effect to display the tooltip
        items[i].addEventListener("mouseover", function() {
            var tooltip = this.querySelector('.tooltip');
            tooltip.style.display = "block";
        });
        items[i].addEventListener("mouseout", function() {
            var tooltip = this.querySelector('.tooltip');
            tooltip.style.display = "none";
        });
    }
    
    // Add event listener for keydown events to open item detail modal with Shift+1, Shift+2, etc.
    document.addEventListener("keydown", function(event) {
        if (event.shiftKey) {
            switch (event.key) {
                case "1":
                    if (items[0]) openItemDetailModal(items[0]);
                    break;
                case "2":
                    if (items[1]) openItemDetailModal(items[1]);
                    break;
                case "3":
                    if (items[2]) openItemDetailModal(items[2]);
                    break;
                case "4":
                    if (items[3]) openItemDetailModal(items[3]);
                    break;
                default:
                    break;
            }
        }
    });