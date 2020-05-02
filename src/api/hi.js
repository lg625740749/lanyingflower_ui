import request from '../router/axios'

export const test = (obj) => {
    return request({
        url: "http://localhost:8088/api/history_today",
        method: 'get',
        data: obj
    });
};