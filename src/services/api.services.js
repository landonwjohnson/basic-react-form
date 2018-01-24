import axios from 'axios';
const baseURL = '/api';

function findApplicants() {
    return axios
        .get(`/api/all-applicants`)
        .then(res => res)
        .catch(err => {throw err});
}

export {
    findApplicants
}