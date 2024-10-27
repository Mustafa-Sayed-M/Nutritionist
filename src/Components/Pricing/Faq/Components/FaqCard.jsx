import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleFaqOpens } from '../../../../Store/slices/appSlice';

function FaqCard({ faqData }) {

    const dispatch = useDispatch();

    const { q, a, id } = faqData;
    const { faqOpens } = useSelector(state => state.app);

    const handleClick = () => {
        dispatch(handleFaqOpens(id));
    };

    return (
        <div className='faq-card p-4 bg-dark-color-10 rounded-md space-y-2 flex gap-4'>
            <div className='part-text w-full space-y-3 flex-1'>
                <h2 className='font-medium'>{q}</h2>
                <p className={`${!faqOpens.includes(id) && 'hidden'} pt-3 border-t border-t-dark-color-15`}>{a}</p>
            </div>
            {/* Toggler */}
            <button
                title='Open Faq'
                aria-label='Toggler Faq'
                type='button'
                onClick={handleClick}
                className='p-2 h-fit text-white bg-dark-green-color-20 border border-dark-color-20 rounded-md'
            >
                {
                    faqOpens.includes(id) ? (
                        <i className="fa-solid fa-minus fa-fw"></i>
                    ) : (
                        <i className="fa-solid fa-plus fa-fw"></i>
                    )
                }
            </button>
        </div>
    )
}

export default FaqCard;