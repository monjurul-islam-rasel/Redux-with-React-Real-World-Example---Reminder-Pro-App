import { ADD_REMINDER } from '../constants';
import { DELETE_REMINDER } from '../constants';
import { CLEAR_REMINDERS } from '../constants';

export const addReminder = (text, dueDate) => {
    const action = {
        type: ADD_REMINDER,
        text,
        dueDate
    }

    console.log('action in addReminder: ', action);

    return action;
}

export const deleteReminder = (id) => {
    const action = {
        type: DELETE_REMINDER,
        id
    }
    return action;
}

export const clearReminders = () => {
    const action = {
        type: CLEAR_REMINDERS
    }
    return action;
}

