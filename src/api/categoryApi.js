import axiosClient from "./axiosClient";
const categoryApi = {
    getAll(params) {
        const url = '/categories';
        return axiosClient.get(url, { params })
        .then(function (response) {
            // handle success
            console.log(response);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .then(function () {
            // always executed
          });
    },
    get(id) {
        const url = `/categories/${id}`;
        return axiosClient.get(url,);
    },
    add(data) {
        const url = '/categories';
        return axiosClient.post(url, data);
    },
    update(data) {
        const url = `/categories/${data.id}`;
        return axiosClient.patch(url, data);
    },
    remove(id) {
        const url = `/categories/${id}`;
        return axiosClient.delete(url);
    },
}

export default categoryApi;