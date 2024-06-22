// Function to remove blur filter from an element's inline style
function removeInlineBlurFilter(element) {
  if (element.style.filter && element.style.filter.includes("blur")) {
    element.style.filter = element.style.filter.replace(/blur\(.*?\)/, "");
  }
}

// Function to remove blur filter from an element's computed style
function removeComputedBlurFilter(element) {
  const computedStyle = window.getComputedStyle(element);
  if (computedStyle.filter && computedStyle.filter.includes("blur")) {
    element.style.filter = computedStyle.filter.replace(/blur\(.*?\)/, "");
  }
}

// Function to remove blur filter from stylesheets
function removeBlurFilterFromStylesheets() {
  for (const sheet of document.styleSheets) {
    try {
      for (const rule of sheet.cssRules) {
        if (
          rule.style &&
          rule.style.filter &&
          rule.style.filter.includes("blur")
        ) {
          rule.style.filter = rule.style.filter.replace(/blur\(.*?\)/, "");
        }
      }
    } catch (e) {
      // Catch and ignore CORS errors
      console.error(e);
    }
  }
}

// Function to remove blur filter from all elements
function removeAllBlurFilters() {
  const allElements = document.querySelectorAll("*");
  allElements.forEach((element) => {
    removeInlineBlurFilter(element);
    removeComputedBlurFilter(element);
  });
  removeBlurFilterFromStylesheets();
}

// Observe for new elements being added to the DOM and remove blur filters
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      if (node.nodeType === 1) {
        // Check if it's an element
        removeInlineBlurFilter(node);
        removeComputedBlurFilter(node);
        const descendants = node.querySelectorAll("*");
        descendants.forEach((descendant) => {
          removeInlineBlurFilter(descendant);
          removeComputedBlurFilter(descendant);
        });
      }
    });
  });
});

// Start observing the document for changes
observer.observe(document.body, { childList: true, subtree: true });

// Initial run to remove blur filters from existing elements and stylesheets
document.addEventListener("DOMContentLoaded", removeAllBlurFilters);

// Run again after the page is fully loaded to catch late-loaded elements
window.addEventListener("load", removeAllBlurFilters);
