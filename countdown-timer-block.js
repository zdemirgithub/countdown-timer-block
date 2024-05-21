// countdown-timer-block/index.js
import { registerBlockType } from '@wordpress/blocks';
import { useState } from '@wordpress/element';

registerBlockType('countdown-timer-block/countdown-timer', {
    title: 'Countdown Timer',
    icon: 'clock',
    category: 'common',
    attributes: {
        endDate: {
            type: 'string',
            default: '',
        },
    },
    edit: ({ attributes, setAttributes }) => {
        const { endDate } = attributes;
        const [dateInput, setDateInput] = useState(endDate);

        const onChangeDate = (event) => {
            setDateInput(event.target.value);
        };

        const onSaveDate = () => {
            setAttributes({ endDate: dateInput });
        };

        return (
            <div>
                <input type="datetime-local" value={dateInput} onChange={onChangeDate} />
                <button onClick={onSaveDate}>Save</button>
            </div>
        );
    },
    save: () => {
        return null; // No output in save mode
    },
});
