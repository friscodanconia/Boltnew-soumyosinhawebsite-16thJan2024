import { useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

export function useHighlightSearch(containerRef: React.RefObject<HTMLElement>) {
  const [searchParams] = useSearchParams();
  const highlightedElements = useRef<Element[]>([]);

  useEffect(() => {
    const searchTerm = searchParams.get('q');
    if (!searchTerm || !containerRef.current) return;

    // Remove previous highlights
    highlightedElements.current.forEach(el => {
      if (el.parentNode) {
        const parent = el.parentNode;
        parent.replaceChild(document.createTextNode(el.textContent || ''), el);
        parent.normalize();
      }
    });
    highlightedElements.current = [];

    // Function to highlight text in a node
    const highlightText = (node: Node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent || '';
        const regex = new RegExp(searchTerm, 'gi');
        if (regex.test(text)) {
          const span = document.createElement('span');
          span.innerHTML = text.replace(regex, match => 
            `<span class="bg-amber-200/90 text-amber-900 dark:bg-amber-500/20 dark:text-amber-200 px-1.5 py-0.5 rounded-sm transition-colors duration-150">${match}</span>`
          );
          node.parentNode?.replaceChild(span, node);
          // Store highlighted elements for cleanup
          span.querySelectorAll('[class*="bg-amber"]').forEach(el => 
            highlightedElements.current.push(el)
          );
          
          // Scroll to first match
          if (highlightedElements.current.length === 1) {
            highlightedElements.current[0].scrollIntoView({
              behavior: 'smooth',
              block: 'center'
            });
          }
        }
      } else {
        const children = Array.from(node.childNodes);
        children.forEach(highlightText);
      }
    };

    // Start highlighting from container
    highlightText(containerRef.current);
  }, [searchParams, containerRef]);
}