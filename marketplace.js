document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("marketplaceModal");
    const btn = document.getElementById("openModalBtn");
    const span = document.getElementsByClassName("close")[0];
    const toolbar = document.getElementById("toolbar");
  
    btn.onclick = function() {
      modal.style.display = "block";
    }
  
    span.onclick = function() {
      modal.style.display = "none";
    }
  
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  
    const items = document.querySelectorAll('.marketplace .item');
  
    items.forEach(item => {
      item.addEventListener('click', () => {
        const itemId = item.getAttribute('data-id');
        const toolbarItem = document.getElementById(`toolbar-${itemId}`);
        
        if (toolbarItem) {
          toolbarItem.style.display = 'inline';
          toolbarItem.setAttribute('data-purchased', 'true');
          modal.style.display = "none";
        }
      });
    });
  });
  