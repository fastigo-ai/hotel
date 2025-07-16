import React from 'react';

const CancellationAndInfo = () => {
    return (
        <div className=" max-w-7xl mx-auto bg-white rounded-lg  px-4 py-6 pb-6">
            <div className="mb-4">
                <h2 className="text-xl font-bold mb-2">Cancellation policy</h2>
                <ul className="list-disc pl-5">
                    
                    <li>
                        Cancellations or changes made after 12:00 (property local time) 
                        or no-shows are subject to a property fee equal to 100% of the total amount paid 
                        for the reservation.
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="text-xl font-bold mb-2">Important information</h2>
                <ul className="list-disc pl-5">
                    <li>
                        The front desk is open daily from noon - midnight. This property doesn't offer 
                        after-hours check-in. The front desk is staffed during limited hours.
                    </li>
                    <li>
                        Please note that Plains Motors Inn and the hotel will not issue a tax invoice. You will 
                        receive a commercial receipt for the purpose of the transaction.
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default CancellationAndInfo;
