export const PREPARE_QUEUE = 'PREPARE_QUEUE';

export const prepareQueue = track_ids => {
    return {
        type: PREPARE_QUEUE,
        track_ids
    }
}
