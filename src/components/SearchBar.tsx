import { Input } from '@chakra-ui/react';
import React, { useRef } from 'react'

const SearchBar = () => {

    const clickPoint = useRef<HTMLDivElement>();
    const handleFocus = () => {
        clickPoint.current.style.display = "none";
    };

    const handleBlur = () => {
        clickPoint.current.style.display = "block";
    };

  return (
                <Input
                    type="text"
                    placeholder="Search Here..."
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
  )
}

export default SearchBar