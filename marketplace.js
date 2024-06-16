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
  
    const marketplaceItems = document.querySelectorAll(".item");
    marketplaceItems.forEach(item => {
        item.addEventListener("click", (event) => {
            const blockId = event.target.dataset.blockId;
            // console.log(blockId);
            // this.activeBlockId = blockId;
    
            // Show the purchased item in the toolbar
            const toolbarItem = document.getElementById(`toolbar-${blockId}`);
            if (toolbarItem) {
                toolbarItem.style.display = 'block';
                toolbarItem.dataset.purchased = 'true';
            }
    
            // Update the selected toolbar icon
            document
                .querySelectorAll(".toolbar-icon.selected")
                .forEach((el) => el.classList.remove("selected"));
            toolbarItem?.classList.add("selected");
        });
    });
    
  });
  