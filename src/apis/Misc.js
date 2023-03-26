import { API_URL } from '../config'
import axios from 'axios'

export const saveFeedback = (input, callback) => {
  const api_link = `${API_URL}/api/feedback/save_feedback`;
  axios
    .post(api_link, input)
    .then(response => {
      const { data } = response;
      console.log('Save Feedback', data);
      callback(data);
    })
    .catch(error => {
      console.error(error);
    });
}

export const getFilesFromFolder = (folder, callback) => {
  const api_link = `${API_URL}/api/misc/get_files/${folder}`;
  axios
    .get(api_link)
    .then(response => {
      if (response.data.status === true) {
        callback(response.data.data);
      }
    })
    .catch(error => {
      console.error(error);
    });
}

export const uploadHazardMaps = (input, callback) => {
  const api_link = `${API_URL}/api/upload/hazard_maps`;
  axios
    .post(api_link, input)
    .then(response => {
      const { data } = response;
      console.log('Uploaded map', data);
      callback(data);
    })
    .catch(error => {
      console.error(error);
    });
}

export const uploadResources = (input, callback) => {
  const api_link = `${API_URL}/api/upload/save_resources`;
  axios
    .post(api_link, input)
    .then(response => {
      const { data } = response;
      console.log('File uploaded', data);
      callback(data);
    })
    .catch(error => {
      console.error(error);
    });
}

export const uploadMomsResources = (input, callback) => {
  const api_link = `${API_URL}/api/upload/moms_images`;
  axios
    .post(api_link, input)
    .then(response => {
      const { data } = response;
      console.log('File uploaded', data);
      callback(data);
    })
    .catch(error => {
      console.error(error);
    });
}

export const deleteFile = (folder, filename, callback) => {
  const api_link = `${API_URL}/api/delete_file`;
  axios
    .post(api_link, {folder: folder, filename: filename})
    .then(response => {
      callback();
    })
    .catch(error => {
      console.error(error);
    });
}

export const getNumberOfFiles = (folder, callback) => {
  const api_link = `${API_URL}/api/misc/get_files/${folder}`;
  axios
    .get(api_link)
    .then(response => {
      if (response.data.status === true) {
        callback(response.data.data);
      }
    })
    .catch(error => {
      console.error(error);
    });
}