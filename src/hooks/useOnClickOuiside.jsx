import { useEffect } from 'react';

const useOnClickOutside = (ref, handler, isOpen) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target) || !isOpen) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler, isOpen]);
};

export default useOnClickOutside;
