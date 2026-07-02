import { Star } from 'lucide-react';
import React from 'react';

const FiveStar = () => {
    return (
        <div className='flex items-center gap-1'>
            <Star className='lucide lucide-star w-3.5 h-3.5 fill-amber-400 text-amber-400' />
            <Star className='lucide lucide-star w-3.5 h-3.5 fill-amber-400 text-amber-400' />
            <Star className='lucide lucide-star w-3.5 h-3.5 fill-amber-400 text-amber-400' />
            <Star className='lucide lucide-star w-3.5 h-3.5 fill-amber-400 text-amber-400' />
            <Star className='lucide lucide-star w-3.5 h-3.5 fill-amber-200 text-amber-400' />
        </div>
    );
};

export default FiveStar;