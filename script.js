const url = '/api/mail';

const post = (params) => {
  console.log('calling', url, params);
  axios.post(url, params);
}

const sendMail = (e) => {
  post(getValues());
  e.preventDefault();
}

const getValues = () => {
  const fields = ['sender', 'title', 'message'];
  const values = {};
  fields.forEach((field, index) => {
    values[field] = document.forms['mail'][field].value;
  });
  return values;
}